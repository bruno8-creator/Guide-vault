---
title: What a "context window" actually is, and why your chatbot forgets things
description: Long conversations get worse for a reason. A plain explanation of tokens, context windows, and what to do when a chat starts losing the thread.
category: ai
date: 2026-10-29
author: Bruno
---
If you've had a long session with an AI assistant, you've probably seen it happen. Early on, it follows your instructions perfectly. Two hours later it's ignoring the format you asked for, repeating suggestions you already rejected, or contradicting something it said at the start.

It isn't getting tired. It's running into the limits of its **context window**, and once you understand what that is, a lot of odd chatbot behaviour suddenly makes sense.

## The short version

A language model doesn't remember your conversation the way a person does. Every time you send a message, the whole conversation so far — your messages, its replies, any files you attached — is fed back into the model as one long block of text. The model reads that block and writes the next reply.

The context window is the maximum size of that block. Anything that doesn't fit can't be read.

## Tokens: the unit everything is measured in

Context windows are measured in **tokens**, not words. A token is a chunk of text — often a whole short word, sometimes part of a longer one, sometimes a punctuation mark. In English, a rough rule is that 100 tokens is about 75 words. Other languages, code and unusual formatting usually take more tokens per word.

Modern assistants have large windows — often hundreds of thousands of tokens, enough for several novels. That sounds like plenty, and for most chats it is. But two things eat into it faster than you'd expect:

- **Attachments.** A long PDF, a spreadsheet or a chunk of code can use up a big share of the window in one go.
- **The replies themselves.** Every long answer the model writes stays in the conversation and gets re-read every turn.

## Why quality drops before the window is full

Here's the part most explanations skip. Even when everything technically fits, models don't pay equal attention to every part of a long context. Researchers have found that information buried in the middle of a very long input is more likely to be overlooked than information at the beginning or end.

In practice, that means an instruction you gave forty messages ago is competing with a lot of newer text. It's still "there", but it carries less weight. That's why the formatting rule you set at the start quietly stops being followed.

## What happens when the window does fill up

Different apps handle this differently, and they don't always tell you:

- Some **drop the oldest messages** silently. The start of your conversation simply stops existing as far as the model is concerned.
- Some **summarise** earlier parts of the chat and keep the summary instead. Details get lost in the compression.
- Some **refuse to continue** and ask you to start a new chat.

If an assistant suddenly seems unaware of something you discussed at length earlier, one of these has probably happened.

## Practical habits that help

### Start fresh more often than feels natural

A new conversation with a good opening message almost always beats a sprawling one. When a chat starts going in circles, ask the assistant to summarise the key decisions and requirements so far, copy that summary, and paste it into a new chat.

### Put the important stuff where it gets read

Restate critical constraints near the end of your message, right before the question: "Remember: British spelling, under 200 words, no bullet points." It feels redundant. It works.

### Give it only what it needs

Instead of attaching a 90-page report and asking about one section, paste the section. Less material means less for the model to sift through and fewer chances to latch onto the wrong part.

### Use project or memory features deliberately

Many tools now offer "projects", custom instructions or memory that persist across chats. These are useful for stable facts — your role, your preferred tone, what your business does. They're a bad place for things that change every week, because outdated instructions keep getting fed in.

## A quick mental model

Think of the context window as a desk rather than a filing cabinet. The model can only work with what's on the desk right now. A bigger desk helps, but a cluttered desk still slows things down, and when space runs out, something gets pushed off the edge.

Keep the desk tidy — short focused chats, the right documents, key instructions repeated — and you'll get noticeably better results from the same tool.
