---
layout: post.html
title: More evidence why AR callbacks are problematic
date: 2021-07-29
tags: post
---
Rail's ORM [ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html) has a well documented and widely used system of [callbacks](https://guides.rubyonrails.org/active_record_callbacks.html) that can apply logic during difference phases of the object lifecycle.

These can be really handy for situations like sending an email notification to a user after some model has been updated, or maybe keeping a secondary data store in sync, like a search engine or a cache.

As your application grows, it's likely that varying pathways toward record creation will be introduced. These pathways tend to use the base API methods of ActiveRecord for mutation, like `create` and `update`. This means that callbacks will usually be triggered, unless you use certain methods, like `update_columns`, that explicitly do not.

This is a huge burden. Now, you must check for callbacks, which are maybe not even on the model class, but included through some other module. This mental burden isn't the only problem. It can be tricky to reason about *when* the callbacks are applied.

Let's walk through a practical example.

Let's say you have a `User` model. You are tasked with adding permissions to that model. Users have some defaults that should be added every time a user is updated. You grep the codebase and over the years, `User` creation isn't trivial anymore. A bulk loading process has been added. There's a few different API endpoints that handle different use cases. To ensure these permissions are always created, you place it in a callback.

```ruby
class User < ApplicationRecord
  has_many :permissions
  after_commit :create_default_permissions, on: [:create]

  private

  def create_default_permissions
    permissions << DEFAULT_PERMISSIONS.map do |p|
      Permission.new(p.merge(user: self))
    end
  end
end
```

This works great for a while.. Then, a requirement comes in to change the default permissions under some condition. Let's say that during the bulk creation process, we want to create users with a different set of permissions. If there's an error when creating one of the users, we want to rollback and show an error to our user, so it's been wrapped in a transaction. It might look something like this.

```ruby
class BulkUserService
  def create!
    User.transaction do
		  csv.each do |attributes|
        user = User.create!(attributes)
        user.permissions = [Permission.new(user: user, name: 'something')]
      end
    end
  end
end
```

At first glance, you might assume that the callback will run after `create!`. Then, we immediately overwrite the collection with the desired new default, so this will work the way we intend it to.

This is not the case, though. Because the entire loop is wrapped in a transaction, `after_commit` is going to run when *that* transaction is finished and committed to the database. So, the users are still going to have the default permissions specified in the callback.

How can these problems be avoided? The best way forward is to stop using callbacks and try to centralize and standardize your mutation APIs. I really like the way [Hanami](https://guides.hanamirb.org/v1.3/repositories/overview/) repositories work. The key point:

> All the queries are private. This decision forces developers to define intention revealing API, instead of leaking storage API details outside of a repository.

I'm interested in ways to achieve this pattern on existing Rails code bases. Has anyone done it? I'm going to be working through some ideas in the future.
