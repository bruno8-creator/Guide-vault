---
title: How to Write AI Prompts That Actually Work
description: A practical guide to prompting ChatGPT, Claude, Gemini and Copilot: how to structure a request, add context and examples, set formats and check answers.
category: ai
date: 2026-11-09
author: Guide Market
cover: https://images.pexels.com/photos/6684793/pexels-photo-6684793.jpeg
coverAlt: Close-up of a person's hands typing a request on a laptop keyboard at a white desk
coverCredit: Kampus Production / Pexels
coverPage: https://www.pexels.com/photo/close-up-shot-of-a-person-typing-6684793/
---
You type "write an email to my landlord about the boiler" into a chatbot, and back comes three paragraphs of stiff, generic politeness that could have been sent by anyone, about any boiler, to any landlord. You delete half of it, rewrite the rest and wonder whether the tool saved you any time at all.

The problem is rarely the model. It is that the assistant knew almost nothing: not that the boiler has been broken for nine days, not that you already reported it twice, not that your tenancy agreement puts repairs on the landlord, and not that you want a firm tone without burning the relationship. A colleague given that same one-line instruction would produce the same bland draft.

This guide shows how to close that gap. It covers the parts of a request that matter, how much context is enough, when examples beat instructions, how to ask for a specific format, how to iterate instead of starting over, and how to check what comes back. It draws on the prompting guides that OpenAI, Anthropic, Google and Microsoft publish for their own assistants, and it includes before-and-after rewrites you can copy.

>> **In short:**
>> - A good prompt states the task, the context behind it, the material to use and the shape of the answer you want.
>> - Context is the biggest lever: who it is for, why you need it, what you already know or have tried.
>> - Show an example when you care about tone or format; it works better than describing it.
>> - Treat the first answer as a draft. Follow-up messages are where most of the quality comes from.
>> - Check facts, figures and quotes yourself. A confident answer is not a verified one.

## Why vague prompts get vague answers

A chat assistant predicts a useful response from the text it is given. When that text is short and generic, the most likely useful response is also generic: an average email, an average summary, an average plan. Nothing in "write an email to my landlord" tells the model to be specific, because there is nothing specific to work with.

Anthropic's own guidance puts it bluntly. Its [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) suggest you think of the model as "a brilliant but new employee" who lacks context on your norms, and it offers a simple test: show the prompt to a colleague with little background on the task, and if they would be confused, the model will be too.

That test is the most useful idea in this whole article. Before you press enter, read your prompt as if you were a capable stranger. Would you know who the audience is? How long the answer should be? What "good" looks like? If not, add that information. It usually takes thirty seconds and saves several rounds of correction.

These habits matter because more people now lean on assistants for real work. In a survey of US adults conducted in February and March 2025, [Pew Research Center found](https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/) that 34% had ever used ChatGPT, with use heavily concentrated among younger adults.

```chart
type: bar
title: US adults who say they have ever used ChatGPT, by age, 2025 (%)
unit: %
source: Pew Research Center | https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/
note: Survey of US adults conducted February 24 to March 2, 2025
Ages 18-29: 58
Ages 30-49: 41
Ages 50-64: 25
Ages 65+: 10
All adults: 34
```

## The four parts of a prompt that works

The big providers describe good prompts in slightly different words, but they agree on the substance. Google's [guide to writing effective prompts](https://workspace.google.com/resources/ai/writing-effective-prompts/) for Gemini names four elements: persona, task, context and format. Microsoft's [Copilot prompt guidance](https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5) uses goal, context, source and expectations. Both say you do not need every element every time; Microsoft notes that a clear goal is the only strict requirement.

Merged, the frameworks give a practical checklist:

| Part | The question it answers | Example fragment |
|---|---|---|
| Task (goal) | What exactly should the assistant produce? | "Draft a 150-word email asking for a repair date" |
| Context | Why do you need it, who is it for, what has happened so far? | "Boiler broken nine days, reported twice by phone, no reply" |
| Source | What material should it use or stick to? | "Use the repairs clause pasted below" |
| Format (expectations) | What shape, length and tone should the answer take? | "Polite but firm, no apology, end with a deadline" |
| Persona (optional) | What role or expertise should it write from? | "Write as an experienced tenant-rights adviser would" |

Persona is the part people overuse. "You are a world-class marketing genius" adds little on its own. A role helps when it brings a specific standard with it, such as "review this as a sceptical finance director would", because that tells the model which objections to look for. If the role does not change what a good answer looks like, skip it and spend the words on context instead.

### Put the task first, and make it a verb

"Boiler email" is a topic. "Draft an email asking my landlord to confirm a repair date within five working days" is a task. Starting with a concrete verb (draft, summarise, compare, rewrite, list, critique) makes the request unambiguous and stops the assistant from guessing whether you want advice, a template or an explanation.

When you have several things to ask, number them. Assistants handle "1. Summarise the report in five bullets. 2. List the three biggest risks. 3. Suggest one question for the author" far more reliably than the same requests woven into a paragraph.

![Two colleagues leaning over a large sheet of paper, one sketching notes while the other watches closely](https://images.pexels.com/photos/3205614/pexels-photo-3205614.jpeg)
*Briefing an assistant works like briefing a colleague: the more of the background you share, the less they have to guess. Photo: cottonbro studio / [Pexels](https://www.pexels.com/photo/man-writing-on-paper-beside-woman-3205614/)*

## Context: the lever most people ignore

If you only change one habit, make it this one. Context is everything the assistant cannot see from where it sits: your audience, your purpose, your constraints, your history with the problem.

Useful context tends to fall into four buckets:

- **Audience.** "For a board of non-specialists", "for a 12-year-old", "for engineers who already know the API".
- **Purpose.** "So I can decide between two quotes", "to post on our internal wiki", "to read aloud in a two-minute slot".
- **Constraints.** Word limits, house style, things you cannot say, a deadline, a budget.
- **What you already know or tried.** "I've read the official docs and the setting isn't there", "the obvious fix of restarting didn't work".

That last bucket is underrated. Telling an assistant what you have ruled out stops it from offering the first three answers anyone would give, and pushes it towards the less obvious ones that you actually need.

Anthropic's guidance adds a refinement worth copying: explain *why* an instruction matters. "Keep it under 100 words" is followed mechanically. "Keep it under 100 words because it will be read on a phone between meetings" lets the model make sensible trade-offs, such as cutting background rather than the action item.

### How much is too much?

There is a real trade-off here. Google's Gemini guidance advises keeping prompts brief but specific and avoiding jargon, while Anthropic and OpenAI encourage giving rich context. These do not contradict each other. The aim is relevant detail, not volume. A paragraph explaining your situation is helpful; pasting your entire life story into a request for a recipe is not.

A good rule: include anything that would change the answer. If the output would be identical with or without a detail, leave it out.

## Give the assistant something to work from

The single biggest cause of invented facts in AI answers is asking a question the model has to answer from memory. When accuracy matters, give it the source.

Paste the contract clause, the meeting notes, the product specification or the article you want summarised, and then say explicitly: "Answer only from the text below. If the answer isn't in it, say so." Microsoft lists this as its own element ("source") for good reason: an assistant summarising a document you supplied is far less likely to make things up than one recalling a policy it may have half-learned.

For longer material, structure helps. Both [OpenAI's prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering) and Anthropic's documentation recommend separating instructions from reference material with clear markers, such as headings or tags. In a normal chat you do not need anything technical. Something like this works:

```
Instructions: Summarise the complaint below in three bullets, then draft a two-line reply.

--- COMPLAINT START ---
[paste text here]
--- COMPLAINT END ---
```

Anthropic also notes that with long documents, placing the material near the top and your question at the end tends to give better results. It is a small change that costs nothing.

>> **Common mistake:** asking "what does the law say about…" or "what were the figures for…" and trusting the reply. Assistants can produce plausible but wrong citations, dates and numbers. If the answer will be used for anything that matters, either supply the source text yourself or ask for links and then open them.

## Show, don't describe: using examples

Describing a tone is hard. "Friendly but professional" means something different to everyone. Showing one is easy.

If you want product descriptions in a particular house style, paste two existing descriptions you like and ask for a third in the same style. If you want a spreadsheet formula explained a certain way, show one explanation you liked. Anthropic calls examples "one of the most reliable ways" to steer format, tone and structure, and suggests three to five varied examples for the best results. OpenAI's guide recommends the same technique, known as few-shot prompting.

Two cautions. First, vary your examples; if all three share an opening line, the assistant will copy it. Second, label them clearly as examples so the model does not mistake them for the text you want edited.

![A hand writing with a blue pen in an open notebook on a desk](https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg)
*Jotting down the audience, the purpose and one example of the result you want takes a minute and does most of the work. Photo: picjumbo.com / [Pexels](https://www.pexels.com/photo/person-holding-blue-ballpoint-pen-writing-in-notebook-210661/)*

## Ask for the format you actually need

Assistants default to a familiar shape: an introduction, a few headed sections with bullets, a summary. That is often the wrong shape for your purpose.

Say what you want. "A table with columns for option, monthly cost and main drawback." "Plain prose, no bullet points, no headings." "Exactly five items, one sentence each." "Reply as a text message under 40 words." Being explicit about length is particularly useful, because the default length rarely matches what you need.

You can also ask for formats that make your next step easier: a checklist you can paste into a task app, a CSV you can import into a spreadsheet, or two alternative versions so you can pick.

### Before and after: real rewrites

The table below shows weak prompts and stronger versions of the same request. None of the improved prompts is long; each simply answers the questions a capable stranger would ask.

| Weak prompt | Stronger prompt | What changed |
|---|---|---|
| "Write an email to my landlord about the boiler." | "Draft a 150-word email to my landlord. The boiler has been broken for nine days; I reported it by phone on the 2nd and 6th with no response. Tone: polite but firm. Ask for a repair date within five working days." | Facts, history, length, tone and a concrete ask |
| "Summarise this report." | "Summarise the report below for my manager, who has two minutes. Give five bullets: the main finding, two numbers that support it, one risk and one recommended next step." | Audience, time limit and a fixed structure |
| "Give me a workout plan." | "Create a three-day-a-week plan for a beginner with 30 minutes per session, no gym and a sore left knee. Format as a table: day, exercises, sets and reps." | Constraints that change the answer, plus a format |
| "Explain inflation." | "Explain why prices can keep rising even when the inflation rate falls. Write for a smart 15-year-old, in under 200 words, with one everyday example." | A precise question, reader level and length |
| "Fix my code." | "This Python function should return the median of a list but fails on even-length lists. Explain the bug in two sentences, then show the corrected function." | Expected behaviour, the symptom and the output wanted |

Notice that none of the stronger versions uses special phrases, magic words or capital letters. They work because they contain information, not because of any trick.

## Iterate instead of starting over

Most people treat a disappointing first answer as a failure and either give up or retype the whole request. The guides from all four providers point the other way. Microsoft's Copilot guidance notes that most prompts lead to some back-and-forth before you get what you need, and Google describes prompting Gemini as a conversation you refine over several turns.

Follow-ups are cheap and precise because the assistant already has the context. Some of the most effective ones are short:

- "Shorter. Cut the first paragraph entirely."
- "Make the second option more cautious and say why."
- "You assumed I'm in the US. I'm in the UK; redo it."
- "What would a critic say is wrong with this plan?"
- "Ask me three questions you'd need answered to do this better."

That last one is underused. When you are not sure what context matters, letting the assistant ask is often faster than guessing. Google's guide also suggests asking the assistant to improve your prompt itself before running it.

There is one case where starting fresh is better: when a conversation has drifted so far, or contains so many abandoned instructions, that the assistant keeps reverting to an early mistake. Open a new chat, paste a clean summary of what you now want, and continue from there.

## Review what comes back

An assistant's answer arrives formatted, fluent and confident whether it is right or wrong. That makes careful review part of prompting, not an afterthought. Microsoft's guidance tells users to check responses against trusted sources and warns that the same prompt can produce different results each time.

![A hand marking up printed pages with a red pen beside a vintage typewriter](https://images.pexels.com/photos/7967596/pexels-photo-7967596.jpeg)
*Treat every AI answer as a first draft that still needs an editor's pass, especially names, numbers and quotes. Photo: Ron Lach / [Pexels](https://www.pexels.com/photo/a-person-checking-a-composition-7967596/)*

The checks worth doing depend on the stakes, but a sensible minimum is:

1. **Verify every specific claim** you plan to repeat: names, dates, statistics, prices, legal or medical statements. Open the source; do not rely on a link existing.
2. **Check the arithmetic.** Assistants can slip on sums, percentages and unit conversions, especially in long answers.
3. **Read for what is missing.** A tidy list of five risks may omit the one that matters most to you.
4. **Look for invented specifics,** such as a quote that sounds slightly too perfect or a study with no author.
5. **Ask the assistant to critique itself.** "Which parts of your answer are you least sure about?" often surfaces weak points, though it is not a substitute for checking.
6. **Make it yours.** Edit the voice, remove filler and add anything only you know.

None of this means the output is worthless. A draft that is 80% right and takes two minutes to fix is a good outcome. The risk is in skipping the fix.

## What the official prompting guides recommend

The four companies behind the most popular assistants all publish advice, and reading it directly is better than relying on second-hand "prompt hacks". At the time of writing, the main guides are:

- **OpenAI:** the [prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering) is written for developers but much of it applies to everyday use: separate instructions from reference material, give examples, supply relevant context, and give detailed, explicit instructions to faster models while describing the goal at a higher level for reasoning models.
- **Anthropic (Claude):** the [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) centre on being clear and direct, explaining the motivation behind instructions, using varied examples and structuring long prompts. Anthropic also maintains a free [interactive tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial).
- **Google (Gemini):** the [writing effective prompts](https://workspace.google.com/resources/ai/writing-effective-prompts/) page sets out persona, task, context and format, and recommends natural language, specific requests and iterating.
- **Microsoft (Copilot):** the [Copilot prompts](https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5) page describes goal, context, source and expectations, and stresses checking output and expecting variation.

The overlap is striking. Strip away the vocabulary and every provider is giving the same advice: say exactly what you want, explain the situation, provide the material, show what good looks like, and keep refining. Guides that promise secret phrases rarely match what the companies building these models actually recommend.

The guides do differ on detail. OpenAI distinguishes between reasoning models, which do well with a high-level goal, and faster models that need more explicit, step-by-step instructions. Anthropic puts more weight on examples and structure. Google leans towards brevity. In everyday chat these differences are small; the core habits transfer across all four assistants.

## A step-by-step routine for better prompts

When the task matters, this routine takes a couple of minutes and reliably beats a one-liner:

1. **Write the task as a verb and an output.** "Draft a…", "Compare…", "Rewrite…".
2. **Add the context that would change the answer.** Audience, purpose, constraints, what you have already tried.
3. **Paste the source material** if accuracy matters, and tell the assistant to stick to it.
4. **Specify the format.** Length, structure, tone, and anything to avoid.
5. **Add an example** if tone or style is important.
6. **Run the stranger test.** Would a capable person with no background understand exactly what you want?
7. **Refine with short follow-ups** rather than rewriting from scratch.
8. **Check the result** before you use it, starting with facts and figures.

>> **Tip:** if you repeat a type of task often (weekly reports, client emails, meeting summaries), save your best prompt as a template in a notes app with blanks for the details. Most assistants also let you store standing instructions or custom profiles, so you can set your preferences once rather than retyping them.

## Mistakes to avoid

Some errors come up again and again, even among experienced users.

**Stacking contradictory instructions.** "Be concise but comprehensive, casual but authoritative" forces the assistant to guess which half you mean. Pick the priority.

**Burying the request.** A long block of background with the actual question in the last line invites the assistant to answer the wrong thing. Put the task first or mark it clearly.

**Asking for opinions as facts.** "What is the best laptop?" has no single answer. "Which of these three laptops suits a student who edits video, on a budget of 900 pounds, and why?" does.

**Sharing what you shouldn't.** Passwords, full card or account numbers, other people's personal data and confidential work documents should not be pasted into a consumer chatbot. Check your provider's privacy settings and your employer's policy before sharing anything sensitive.

**Assuming the assistant remembers.** Some assistants carry memory between chats and some do not, and settings vary. If a detail matters, restate it.

**Over-trusting tone.** The writing will sound just as sure when it is wrong. Confidence in phrasing tells you nothing about accuracy.

## How people are using assistants, and why prompting skills matter more

Use is spreading beyond experiments. Pew's 2025 survey found sharp increases in the share of Americans using ChatGPT for work, learning and entertainment compared with 2023.

```chart
type: bar
title: Share of US adults who have used ChatGPT for each purpose, 2023 vs 2025 (%)
unit: %
source: Pew Research Center | https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/
note: Work figures are among employed adults; learning and entertainment among all adults. 2023 figures are from Pew's early-2023 survey.
Work, 2023: 8
Work, 2025: 28
Learning, 2023: 8
Learning, 2025: 26
Entertainment, 2023: 11
Entertainment, 2025: 22
```

The work figure is the one to watch. When an assistant drafts something that goes to a client, a manager or a regulator, the difference between a vague prompt and a well-briefed one becomes the difference between a usable draft and an embarrassing one. Pew found that among employed adults under 30, 38% had used ChatGPT for work, according to the same survey.

These numbers describe one assistant in one country, so they understate overall use of AI tools. But the direction is clear, and the skill of briefing an assistant well is becoming as routine as writing a clear email.

## Frequently asked questions

### What is the best prompt formula for ChatGPT?

There is no single formula, but a reliable structure is task, context, source and format: say what you want produced, explain the situation and audience, provide any material it should use, and describe the shape of the answer. This mirrors the frameworks Google and Microsoft publish and works across ChatGPT, Claude, Gemini and Copilot.

### Do longer prompts give better answers?

Only when the extra words carry useful information. A prompt that adds audience, purpose and constraints usually improves the answer; padding, repetition and conflicting instructions do not. Include anything that would change the result and leave out anything that would not.

### Should I tell the AI to act as an expert?

A role can help when it implies a specific standard, such as asking for a review "as a sceptical editor would". A generic "you are an expert" adds little. Concrete context about your situation almost always does more than an impressive-sounding persona.

### Do I need to be polite to AI chatbots?

Politeness does no harm and many people find it keeps their prompts clear and complete. What matters far more is clarity: a precise, well-briefed request gets a better answer than a courteous but vague one.

### How do I stop an AI assistant from making things up?

You cannot eliminate it, but you can reduce it. Give the assistant the source text, tell it to answer only from that text and to say when the answer is not there, ask for links, and verify any specific fact before you rely on it.

### Do the same prompts work in ChatGPT, Claude, Gemini and Copilot?

Mostly, yes. The official guidance from all four providers rests on the same principles. Small differences exist, such as how each handles very long documents or how much step-by-step instruction a given model needs, so if a prompt underperforms in one assistant, add more context or an example before assuming the tool is at fault.

## The takeaway

Better prompts are not about clever wording. They come from giving the assistant what any capable helper would need: a clear task, the situation behind it, the material to work from and a picture of the result. Do that, refine with short follow-ups, and check the facts before you use the answer.

Start with the next request you would normally dash off in one line. Spend an extra minute adding the audience, the purpose and the format you want, and compare the result with what you usually get. For most people, that single habit is the biggest improvement available.
