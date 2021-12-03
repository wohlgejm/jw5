---
layout: post.html
title: Keep incident responses *positive*
date: 2021-12-03
tags: post
---
<iframe style="margin:auto;display:block" width="560" height="315" src="https://www.youtube.com/embed/gdbjw27QPJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

>In the social sciences and philosophy, a positive or descriptive statement concerns what "is", "was", or "will be", and contains no indication of approval or disapproval (what should be). Positive statements are thus the opposite of normative statements [^1]

Responding to production incidents is always *extremely stressful* for the responders.
Many times outages are all-hands-on-deck events and everyone wants to offer their help.
More help is great! But, often, myself included, teammates help might not offer productive advice.

__How can you be unhelpful?__

Making normative statements during an incident response is not helpful.
It's only going to add fuel to the already burning fire.
There is a time and place value judgements: during the post-mortem.

The post-mortem should be done well after the incident is resolved and all evidence has been collated so the team can review the root cause.
It's important to remember that no matter how much evidence is gathered, you'll have perfect context to fully understand historical decisions that were made.
People leave, the code evolves in unintended ways, we forget, etc.

Because we don't have perfect information, when making normative assertions, they should be in the future tense.
For example, we should add more metadata in our observability stack. That we should've already added that data to the stack is unhelpful! We're already here!

We can all try harder to not be Captain Hindsight.

[^1]: https://en.wikipedia.org/wiki/Positive_statement
