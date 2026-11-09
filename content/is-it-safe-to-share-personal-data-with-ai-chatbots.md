---
title: Is it safe to share personal data with AI chatbots?
description: What happens to what you type into ChatGPT, Claude, Gemini and Copilot: training, retention, human review, the opt-outs, and what never to paste.
category: ai
date: 2026-11-08
author: Guide Market
cover: https://images.unsplash.com/photo-1758874573150-05c1b6b56407
coverAlt: Close-up of a person's hands typing on a silver laptop keyboard at a wooden table at home.
coverCredit: Vitaly Gariev / Unsplash
coverPage: https://unsplash.com/photos/person-typing-on-a-laptop-computer-at-a-desk-LuzrLgzAFco
---
You are halfway through a tenancy dispute and you want a chatbot to tighten up a letter to your landlord. The draft has your full name, your address, the landlord's name, the amount of the deposit and a paragraph about your partner's medical condition that explains why the boiler matters so much. You hover over the paste shortcut and wonder, for a second, where all of that is about to go.

It is a fair question, and the answer is less dramatic than the worst headlines and less comforting than the marketing. Your words do not vanish when the reply appears. They are stored, sometimes for years, can be read by people in specific circumstances, and on most free consumer accounts may be used to train future models unless you switch that off. None of this makes chatbots unsafe to use. It does mean the settings, and your habits, matter more than most people assume.

This guide walks through what actually happens to a conversation after you press enter, how the four biggest consumer assistants handle training, retention and human review at the time of writing, what you should never paste in the first place, and how to set things up in about ten minutes.

>> **In short:**
>> - On free and paid personal plans, ChatGPT, Gemini and Copilot can use your chats to improve their models by default; Claude asks you to choose. All four let you switch it off.
>> - Turning training off does not mean nothing is kept. Providers still store chats for days, months or years for safety, legal and product reasons.
>> - Humans can read some conversations, especially ones flagged for abuse or, with Gemini, a sample used to improve the service.
>> - Never paste passwords, ID numbers, full card or bank details, or other people's confidential data. Strip names and numbers from anything sensitive.
>> - Business and enterprise plans are generally excluded from training by default. A personal account used for work is not.

## What happens to a message after you press enter

Think of a chatbot conversation as a document that lives on someone else's computer. When you send a message, it travels to the provider's servers, the model reads it together with the earlier part of the conversation, and the reply comes back. The whole exchange is then saved to your chat history so you can scroll back to it next week.

From that point, a conversation can end up in up to four places, and it helps to keep them separate in your head:

1. **Your chat history.** What you see in the sidebar. You control this: you can delete individual chats or the whole lot.
2. **Back-end storage.** Copies kept on the provider's systems, which can outlive what you see. Deleting a chat from your sidebar starts a clock rather than wiping it instantly.
3. **Training data.** If the setting allows it, a conversation can be added to the material used to build future models. Once a model has been trained on something, it cannot practically be removed from that model.
4. **Review queues.** Some conversations are read by people, either because automated systems flagged them for a possible policy breach or because the provider samples chats to improve quality.

Most confusion comes from treating these as one thing. Switching off training affects the third bucket. Deleting a chat affects the first, and eventually the second. Neither guarantees that a person never saw the text if it was flagged, and nothing you do today reaches back into a model that has already been trained.

### Training is not the same as memorising

The fear behind "they train on my chats" is usually that a future version of the chatbot will repeat your address to a stranger. That is not how training normally works. A model learns statistical patterns from enormous amounts of text; it is not a database of individual conversations, and providers say they filter and de-identify data before using it. Still, [researchers have shown](https://arxiv.org/abs/2012.07805) that large models can sometimes reproduce rare strings from their training data word for word, which is exactly why the honest advice is to keep unique identifiers, such as a passport number or an API key, out of chats in the first place. The risk is small. It is not zero, and it is entirely avoidable.

The more realistic risks are duller. An account gets compromised and someone reads your history. A shared family laptop stays logged in. A browser extension with too many permissions sees the page. A colleague looks over your shoulder at a chat titled "redundancy letter draft". These have nothing to do with AI training and everything to do with the fact that a chat history is a very detailed diary.

## How worried people are, in numbers

You are not alone in being uneasy. In a Pew Research Center survey of 5,101 US adults carried out in May 2023, people who had heard of AI were asked how they expected companies to use the information collected by AI systems. The results were [published in October 2023](https://www.pewresearch.org/short-reads/2023/10/18/key-findings-about-americans-and-data-privacy/) and they are striking.

```chart
type: bar
title: US adults who have heard of AI: views on how companies will use personal data (%)
unit: %
source: Pew Research Center, survey of US adults, May 15–21, 2023 | https://www.pewresearch.org/short-reads/2023/10/18/key-findings-about-americans-and-data-privacy/
note: Asked only of US adults who had heard of AI
Info will be used in ways people are not comfortable with: 81
Info will be used in ways not originally intended: 80
Little to no trust in companies to use AI responsibly: 70
Companies analysing personal details could make life easier: 62
```

Read the last line carefully: the same people who distrust companies also see the benefit. That tension is the whole subject of this article. Most of us want the help and doubt the handling.

The unease has not faded. When Pew compared the general public with AI specialists in a [report published in April 2025](https://www.pewresearch.org/internet/2025/04/03/views-of-risks-opportunities-and-regulation-of-ai/), the gap in overall mood was wide.

```chart
type: bar
title: Feelings about the increased use of AI in daily life (%)
unit: %
source: Pew Research Center, How the US Public and AI Experts View Artificial Intelligence, April 2025 | https://www.pewresearch.org/internet/2025/04/03/views-of-risks-opportunities-and-regulation-of-ai/
US adults, more concerned than excited: 51
AI experts, more concerned than excited: 15
US adults, more excited than concerned: 11
AI experts, more excited than concerned: 47
```

The same report notes that six-in-ten of the experts surveyed were extremely or very concerned about data misuse, and that the public was more worried still. In other words, the people who build and study these systems share the concern. They simply tend to know which settings to change.

## The four big assistants, setting by setting

Here is what the providers' own help and privacy pages say at the time of writing (November 2026). Product names, plan names and menus change often, so treat the menu paths as a starting point and check the linked page if something has moved.

### ChatGPT (OpenAI)

On personal Free, Plus and Pro accounts, OpenAI can use conversations to train its models unless you opt out. The switch is in **Settings → Data controls → "Improve the model for everyone"**. According to OpenAI's [Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq), turning it off stops new conversations from being used for training while keeping your history, and the change applies across your devices.

For one-off sensitive questions, **Temporary Chat** is the cleaner option. OpenAI's help centre says temporary chats do not appear in history, are not used to train models and are deleted from its systems after 30 days, during which they may be reviewed only to monitor for abuse. Deleted regular chats are scheduled for permanent deletion within 30 days, unless they were already de-identified or must be kept for security or legal reasons, as OpenAI explains in its [guide to deleting and archiving chats](https://help.openai.com/en/articles/8809935-deleting-and-archiving-chats-in-chatgpt). Note that **archiving** a chat hides it but does not delete it.

### Claude (Anthropic)

Anthropic asks consumer users (Free, Pro and Max) to choose. The control is the **Model Improvement** setting in your **Privacy** settings. Its [privacy article on model training](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training) says chats are used for training only if you allow it, if a conversation is flagged for safety review, or if you opt in another way, such as giving feedback.

Retention depends on that choice. According to Anthropic's [page on data retention](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data), with the setting on, new chats may be kept in de-identified form for up to five years in training pipelines. Deleted chats leave your history immediately and are removed from back-end storage within 30 days. Chats flagged as violating the usage policy may be kept for up to two years, with safety classification scores kept for up to seven. **Incognito chats** are not used to improve Claude even if the training setting is on. Pressing the thumbs up or down button stores the related conversation for up to five years, so be careful rating a chat that contains anything private.

### Gemini (Google)

Gemini's main control is **Keep Activity** (formerly Gemini Apps Activity), managed from the activity settings in the Gemini app. Google's [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) says that while it is on, chats are saved and used to improve Google services, including training generative AI models, and are auto-deleted after 18 months by default; you can change that to 3 or 36 months.

The detail many people miss is human review. Google says a subset of chats is reviewed by people, including trained service providers, and that reviewed chats are disconnected from your account and kept for up to three years. Google itself advises against entering confidential information you would not want a reviewer to see. With Keep Activity off, future chats are kept for 72 hours to run the service and are not used for training unless you send feedback.

### Microsoft Copilot (consumer)

Copilot's consumer app has two separate switches: **"Training on conversation activity"** and **"Training on voice conversations"**. Microsoft's [Copilot privacy controls page](https://support.microsoft.com/microsoft-copilot/microsoft-copilot-privacy-controls) places them under **Privacy** in your profile settings on copilot.com, the desktop app and the mobile app. Opting out excludes future conversations from model training, but Microsoft is explicit that it does not stop use of conversations for other purposes, including product improvement, safety, security and, separately, personalised advertising, which has its own control. The same page says conversation history is kept for 18 months unless you delete it. Microsoft notes that page covers the older version of the app, so check the in-app Privacy menu for current wording.

### Side by side

| | ChatGPT | Claude | Gemini | Copilot |
|---|---|---|---|---|
| Trains on personal-plan chats by default? | Yes, unless you opt out | Only if you allow it | Yes, while Keep Activity is on | Yes, unless you opt out |
| Where to switch it off | Settings → Data controls | Settings → Privacy | Activity → Keep Activity | Profile → Privacy |
| Private mode | Temporary Chat | Incognito chat | Keep Activity off | No direct equivalent |
| Default history retention | Until you delete | Until you delete | 18 months (adjustable) | 18 months |
| After deletion | Removed within 30 days, with exceptions | Removed within 30 days | Depends on activity setting | Can delete items or all history |
| Humans may read chats? | For abuse monitoring | For flagged chats | A sample, kept up to 3 years | Not detailed on the page |
| Business plans trained by default? | No | No | Workspace terms differ | Commercial terms differ |

*Status at the time of writing (November 2026), based on each provider's help and privacy pages linked above. Settings change; check before relying on them.*

## Business plans versus personal accounts

The single biggest difference in how your data is treated is not which chatbot you use. It is whether you are on a consumer plan or a business one.

OpenAI says on its [business data page](https://openai.com/business-data/) that, by default, it does not train on data from ChatGPT Enterprise, Business, Edu or its API platform, and that qualifying organisations can control how long data is kept. Anthropic's [commercial privacy article](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training) says the same about its commercial products. These plans also typically come with contracts covering data processing, administrator controls and audit logs.

That protection belongs to the account, not the person. If your employer pays for an enterprise plan and you paste a client spreadsheet into your personal free account on your phone because it is quicker, none of those contract terms apply. This is the most common way company data ends up in a training set, and it is almost always accidental.

>> **Common mistake:** assuming that because your company "uses ChatGPT", your chats are protected. Check which account you are signed into. Enterprise workspaces usually show the organisation name in the sidebar or account menu. If you cannot see it, you are probably on a personal plan.

## What never to paste, and what to strip first

Some data should stay out of any chatbot, whatever the settings say, because the downside if it leaks is severe and the upside of pasting it is close to nothing.

![A new UK passport lying closed on a plain white table](https://images.unsplash.com/photo-1593781492912-bb538a002c02)
*Identity documents are the clearest case: a chatbot never needs your passport number to help you fill in a form. Photo: Ethan Wilkinson / [Unsplash](https://unsplash.com/photos/black-and-gold-book-on-white-table-gUwTYmydga0)*

### The never-paste list

- **Passwords, PINs, one-time codes and recovery phrases.** No legitimate task requires them. If a chatbot, or a page pretending to be one, asks for a code, stop.
- **API keys, tokens and private keys.** Developers do this constantly when pasting a config file to debug it. Replace secrets with `XXXX` first.
- **Government ID numbers.** Passport, driving licence, Social Security or National Insurance numbers. If you need help with a form, describe the field instead.
- **Full card and bank account numbers.** You can ask how to dispute a charge without supplying the card.
- **Other people's personal data without their agreement.** A friend's diagnosis, a colleague's performance review, a child's school report with their full name.
- **Confidential work material.** Client records, unreleased financial results, source code under NDA, legal advice, anything your contract says stays inside the company.

### Health information deserves its own warning

Many people now use chatbots to make sense of blood test results or to prepare for a doctor's appointment, and that can be genuinely useful. Be clear about what protection you do and do not have. In the United States, the HIPAA privacy rule applies to [covered entities](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html) such as health plans and most healthcare providers, and their business associates. A general-purpose chatbot you signed up for yourself is not your doctor's system, so what you type into it is governed by the provider's privacy policy rather than medical privacy law.

![A blue stethoscope lying beside an open laptop on a white desk](https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg)
*Asking a chatbot to explain a lab result is fine; attaching the full report with your name and patient number is unnecessary. Photo: Negative Space / [Pexels](https://www.pexels.com/photo/computer-desk-laptop-stethoscope-48604/)*

The practical answer is not to avoid the question but to remove the identity from it. "A 45-year-old with an LDL of 4.2 mmol/L and no other risk factors" gets you the same explanation as a photo of the lab report with your name, date of birth and NHS or insurance number on it.

>> **Tip: the redaction habit.** Before pasting anything personal, swap real details for placeholders: "Tenant A", "Landlord B", "£1,200 deposit", "[address]". The chatbot works just as well with placeholders, and you can put the real names back in your own editor afterwards. It takes about thirty seconds and removes most of the risk.

### A worked example

Go back to the landlord letter from the start. Here is the difference between the careless and the careful version of the same request:

| Careless paste | Careful paste |
|---|---|
| Full name and home address | "[Tenant name], [flat address]" |
| Landlord's full name and phone number | "the landlord" |
| Exact deposit and bank reference | "a deposit of about £1,200" |
| Partner's named medical condition | "a household member with a health condition made worse by cold" |
| Tenancy agreement uploaded as PDF | The two relevant clauses typed out |

The second version produces a letter that is just as persuasive. It also means that if the chat is ever seen by a reviewer, exposed in a breach or read by someone who borrows your laptop, it reveals almost nothing about you.

## Workplace rules: what your employer probably expects

Many employers now publish rules on generative AI, and the pattern is broadly consistent. Approved tools are the company's own enterprise accounts. Personal accounts are fine for public information but not for anything internal. Client and customer data is off limits outside approved systems, and outputs used in client work must be checked by a person.

![A tall stack of paper-clipped office documents on a desk next to a pair of glasses](https://images.pexels.com/photos/7054757/pexels-photo-7054757.jpeg)
*Client files, contracts and internal reports are exactly the material most workplace AI policies keep out of personal chatbot accounts. Photo: Kindel Media / [Pexels](https://www.pexels.com/photo/7054757/)*

If your organisation has no written policy, assume the strictest reasonable reading. Ask yourself whether you would be comfortable forwarding the same text to a personal Gmail address. If the answer is no, it does not belong in a personal chatbot either. If you work in a regulated field, such as law, healthcare, accounting or financial advice, your professional body may have its own guidance, and confidentiality duties to clients apply regardless of which tool you use.

There is a quieter workplace risk too: connected apps. Several assistants can now link to your email, calendar, cloud drive or code repositories. Those connections are convenient and can pull far more into a conversation than you intended. Before connecting a work account, check whether your IT team allows it, and review what the integration can read. Anthropic, for instance, says raw content from connectors is not used for training unless you copy it into a chat, but the policy differs by provider and by plan.

## Where the honest risk actually sits

It would be easy to end up more nervous than the evidence supports, so a little perspective helps.

The major providers are large companies subject to privacy law in the US, the UK and the EU, with published retention periods and security teams. For most everyday uses, such as asking for a recipe, rewriting a cover letter with placeholders or explaining a tax term, the privacy risk is modest and comparable to using a search engine or a webmail account.

The risk rises with three things. The first is **specificity**: a chat full of names, numbers and dates is worth far more to an attacker than one full of general questions. The second is **time**: a history kept for 18 months, or until you delete it, is a long-lived target if your account is compromised. The third is **reach**: connected apps and shared devices widen who and what can see the conversation.

Smaller and lesser-known chatbot apps are a different matter. Free "AI companion", homework-helper or PDF-chat apps from unknown developers may have vague privacy policies, unclear data locations and no published retention period. If you cannot find a clear answer to "do you train on my data and how long do you keep it", treat everything you type as public.

## Your 10-minute privacy checklist

Work through these once, then revisit them every few months or after any major app update.

1. **Find the training switch** on every assistant you use and decide deliberately. ChatGPT: Data controls. Claude: Privacy. Gemini: Keep Activity. Copilot: Privacy.
2. **Learn the private mode.** Use Temporary Chat in ChatGPT or Incognito in Claude for one-off sensitive questions, and know that they are still kept for a short period for safety.
3. **Shorten retention where you can.** In Gemini, change auto-delete from 18 months to 3 months if you do not need old chats.
4. **Clear out your history.** Skim your sidebar for chats containing documents, health details or work material and delete them. Remember that archiving is not deleting.
5. **Turn on two-step verification** for the account linked to each chatbot. A stolen password exposes your whole chat history.
6. **Check your memory and personalisation settings.** Several assistants now remember facts about you across chats. Review what has been saved and remove anything you would rather it forgot.
7. **Audit connected apps.** Disconnect email, drive or calendar integrations you no longer use.
8. **Separate work and personal.** Use the employer's approved account for work, and nothing work-related in your personal one.
9. **Adopt the redaction habit.** Placeholders for names, addresses, account numbers and anything that identifies another person.
10. **Be careful with feedback buttons.** A thumbs up or down can send the whole conversation for review or longer storage.

## Frequently asked questions

### Can AI chatbot companies read my conversations?

In limited circumstances, yes. Providers say staff or contracted reviewers may read conversations flagged by automated systems for possible abuse, and Google states that a subset of Gemini chats is reviewed by people to improve the service. Routine, unflagged chats are not read as a matter of course, but you should assume that anything you type could be seen by a person.

### Does deleting a chat really delete it?

It removes it from your history immediately. Back-end copies are typically removed within about 30 days for ChatGPT and Claude, according to their help pages at the time of writing, with exceptions for legal and safety reasons. Deletion does not remove anything from a model that has already been trained on that conversation.

### Is it safe to upload documents like bank statements or contracts?

Treat an upload exactly like pasted text, because that is what it becomes. If a document contains account numbers, signatures or other people's details, copy out only the part you need help with and replace the identifiers. For contracts, the clause text without names is usually enough.

### Is Temporary Chat or Incognito mode completely private?

No. They keep the chat out of your history and out of training, but providers still hold a copy for a short period, 30 days in ChatGPT's case, to detect abuse. They are a sensible default for sensitive one-off questions, not a guarantee of secrecy.

### Are paid plans more private than free ones?

Not automatically. ChatGPT Plus and Pro follow the same training default as the free tier, and Claude Pro and Max follow the same choice-based setting as Claude Free. The real dividing line is between personal plans and business or enterprise plans, which are excluded from training by default under their commercial terms.

### Should I use AI chatbots for medical or legal questions?

They can help you understand terms and prepare questions, and many people find that valuable. Keep the question general, leave out identifying details, and confirm anything important with a qualified professional, both because chatbots make mistakes and because your conversation does not carry the confidentiality of a doctor's or lawyer's office.

## The takeaway

Chatbots are not uniquely dangerous places for your data, but they are unusually tempting ones. The conversational format invites you to explain everything, and the more you explain, the more detailed the record you leave behind.

Spend ten minutes today on the training switch and retention settings of the assistants you actually use, then make placeholders a habit. You keep almost all of the usefulness and give away very little. And when you catch yourself about to paste a passport number, a password or a client's file, take that as the cue to stop and rewrite the request.
