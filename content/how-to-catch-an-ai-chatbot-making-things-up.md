---
title: How to catch an AI chatbot making things up
description: Chatbots sound equally confident when they're right and when they're inventing. Here are the checks that actually separate the two.
category: ai
date: 2026-11-06
author: Bruno
---
The most useful thing to understand about AI chatbots is also the least intuitive: they don't sound less sure when they're wrong. A made-up court case, a book that was never written, a statistic with a precise-looking decimal point — all of it comes out in the same calm, fluent tone as the correct answers.

That's not because the tools are lying. A language model produces text that is likely to follow your question, based on patterns from its training. Most of the time, likely text and true text overlap. When they don't, you get what people call a "hallucination": an answer that has the shape of a fact without being one.

You can't switch this off. You can get much better at spotting it.

## Where invented answers tend to show up

After a lot of time using these tools for research, I've noticed the errors cluster in predictable places:

- **Specific references.** Paper titles, page numbers, URLs, case names, quotes attributed to a named person. The model knows what a citation *looks* like, so it can produce a convincing one from nothing.
- **Exact numbers.** "Around half" is usually safer than "47.3%". The more precise a figure is, the more you should want a source for it.
- **Niche or local topics.** Ask about a small town's bylaws or an obscure software library and there was simply less training material to draw on. The gaps get filled with plausible guesses.
- **Recent events.** Every model has a training cutoff. Unless the tool is searching the web for you, it may confidently describe a situation that has since changed.
- **Questions with a built-in assumption.** Ask "Why did the company recall its product in 2019?" and you may get a detailed explanation of a recall that never happened. The model tends to go along with the premise.

## Five checks that take under a minute

### 1. Ask for the source, then open it

If the chatbot gives you a link, click it. If it names a study, search for the exact title in a normal search engine or Google Scholar. A surprising number of invented references fall apart at this step: the link is dead, the paper doesn't exist, or the real paper says something different.

Tools that browse the web and show their sources are better here, but not immune. I've seen answers cite a real page that doesn't contain the claim at all. The source being real isn't the same as the source agreeing.

### 2. Ask the same question a different way

Rephrase and ask again, ideally in a new chat. Facts the model genuinely "knows" tend to come back the same. Invented details often change — a different year, a different name, a different number. Inconsistency is one of the clearest warning signs you have.

### 3. Invite it to disagree with you

Instead of "Explain why X is true", try "Is X true? What's the strongest case against it?" Leading questions get agreeable answers. Neutral questions give the model room to say the premise is wrong.

### 4. Ask what it isn't sure about

"Which parts of this answer are you least confident in?" won't catch everything — models are not reliable judges of their own accuracy — but it often surfaces the shaky bits, such as a date it guessed or a detail that varies between sources.

### 5. Check one claim the hard way

You don't need to verify every sentence. Pick the claim your decision actually depends on and confirm that one against a primary source: the official website, the original document, the law itself. If that load-bearing claim holds up, the rest of the answer is more likely to be useful.

## How much checking is enough?

It depends on what's at stake, and it helps to be honest about that.

For brainstorming names for a podcast, rewording an awkward email or getting a first explanation of a concept, mistakes are cheap. Use the answer, keep what's good, move on.

For anything involving money, health, legal questions or something you're going to publish under your name, treat the chatbot as a fast first draft written by someone who has read a lot but checked nothing. It can point you in the right direction. It shouldn't be the last stop.

> A good rule of thumb: the cost of checking should scale with the cost of being wrong.

## Habits that reduce the problem in the first place

A few changes to how you ask make bad answers less likely:

- **Give it the material.** Paste in the document, policy or article you're asking about and tell it to answer only from that text. Models are far more accurate summarising what's in front of them than recalling from memory.
- **Allow "I don't know".** Saying something like "If you're not sure, say so" doesn't guarantee honesty, but in my experience it reduces the confident filler.
- **Ask for structure, not just prose.** "List the claims in this answer and where each comes from" makes gaps much easier to see than a smooth paragraph does.
- **Turn on web search for anything current.** If your tool offers it, use it for prices, news, schedules or anything that changes.

## The takeaway

Chatbots are genuinely useful, and they're getting more accurate. But fluency is not evidence. The fix isn't to stop using them; it's to keep the habit you'd use with any confident stranger: nod along for the small stuff, and ask "how do you know?" when it matters.
