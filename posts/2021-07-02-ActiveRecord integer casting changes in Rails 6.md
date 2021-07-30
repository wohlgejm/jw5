---
layout: post.html
tags: post
title: ActiveRecord integer casting changes in Rails 6
date: 2021-07-02
---
ActiveRecord often goes out of its way to guess your intent when querying. For example, it will convert strings to integers if that is the column type being queries.

You can easily check the output of the conversion like this:

```ruby
Model.arel_table[:id].type_cast_for_database('1')
=> 1
```

In Rails 6, the serialization method changed. Maybe you were accepting some params from a controller and doing something like:

```ruby
Model.where.not(id: ['temporary-id', 1, 2])
```

In Rails 5, the following query would be generated:

```ruby
SELECT * FROM users WHERE id NOT IN (0, 1, 2)
```

This query would run as you expect and return all the records except 1 and 2 since the primary key `id` is ≥ 1.

In Rails 6, this query would be executed:

```ruby
SELECT * FROM users WHERE id NOT IN (NULL, 1, 2)
```

Now, the result set is completely different. Because the string was serialized as `NULL` and the `id` field will never be `NULL` this will always return an empty relation.

This is kind of a fringe case and you probably shouldn't be passing in those string params in the first place, but serialization is something to watch out for when accepting user input and upgrading your Rails versions.
