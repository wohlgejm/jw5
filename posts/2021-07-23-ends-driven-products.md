---
layout: main.html
title: Ends-driven product development
tags: post
date: 2021-07-28
---
I've spent my entire career in the B2B software space. The early was a lot of consulting and building custom solutions, while the past 6 years has been working on software for call centers.

While I don't have a huge breadth of experience, a lot of my time has been spent iterating on one common feature set: reporting.

Reporting is usually a core component of most B2B products. Every user loves to ask

> How can I do {data viz, exportable pivot table, etc.} in your system?

The first question should always be can this functionality be bought? I've gone down embedding a reporting tool into an app a few times and it's never been quite up to snuff. The reason is, if reporting is one of your core components, you want direct control over those features. You need even *more* flexibility than your users!

Over time, the temptation is to to build something more and more flexible to support different use cases. Products will start down a slippery slope of becoming a BI tool lite.

This slide has a huge cost. BI tools are immensely complex software. Configuration as data takes a lot of work to maintain from the developer standpoint and usually ends up with a legion of solution architects who configure the software for individual clients.

There's a reason the BI space is large and ripe to disruption: it's really hard to meet everyone's requirements and remain usable. A tool will become overly complex, and a more elegant (likely not simpler) solution will come along. This cycle isn't unique to the BI space, but most software in general.

So, how can this slide be avoided? When building solutions for your users keep the focus on the ends, not the means. This can be hard. Many people think of their jobs in terms of the means.

> I need this report because I email it my boss every 3rd Wednesday before 3:00pm. I'm not totally sure what they do with it.

Reporting is not an end. Hopefully that employee's boss *does* something with that report, [but that is another discussion](https://en.wikipedia.org/wiki/Bullshit_Jobs). The hard part during requirements gather and discovery is distilling the ends. You probably need to talk to that employee's boss's boss. If there is a line chart that shows a downward trend, what *action* does that trigger up the chain of command?

Focus on those actions, the ends, rather than the reports, the means. Gleaning insight from data is a hard skill to learn. If your product can automate that insight, you're building something useful, not something that just demos and photographs nicely.
