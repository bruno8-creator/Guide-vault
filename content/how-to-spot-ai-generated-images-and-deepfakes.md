---
title: How to Spot AI-Generated Images, Deepfake Videos and Voice Clones
description: A practical guide to checking whether a photo, video or voice clip is AI-generated, from visual tells and reverse image search to Content Credentials.
category: ai
date: 2026-11-06
author: Guide Market
cover: https://images.unsplash.com/photo-1739712039253-324be4f33543
coverAlt: A person's hands holding up a smartphone to take a picture of a sunset sky
coverCredit: nedimshoots / Unsplash
coverPage: https://unsplash.com/photos/a-person-taking-a-picture-with-a-cell-phone-HWHS-US4VHE
---
A photo lands in the family group chat: a flooded street two towns over, a celebrity at a protest, a politician shaking the wrong hand. Or your phone rings and the voice on the other end sounds exactly like your son, panicked, asking for money for a lawyer. In both cases you have a few seconds to decide whether to believe it, share it or act on it, and the old rule of "look for the weird fingers" is no longer enough.

This guide is about that decision. We cover what the visual tells of AI imagery are and why they are fading, the source checks that still work when the pixels look perfect, a step-by-step reverse image search, what Content Credentials and invisible watermarks can and cannot tell you, and how to protect your family from cloned-voice scam calls. At the end there is a table of checks by media type you can keep on your phone.

The honest framing is this: you will not become a reliable human deepfake detector, and neither will anyone else. What you can do is build a habit of checking where something came from before you trust it. That habit catches far more fakes than squinting at earlobes.

>> **In short:**
>> - Visual glitches (hands, text, shadows) still catch lazy fakes, but modern generators avoid most of them. Absence of glitches proves nothing.
>> - In a peer-reviewed study, people picked real faces from AI faces with 48.2% accuracy, worse than a coin flip.
>> - Provenance beats pixels: find the original source, run a reverse image search, and look for Content Credentials.
>> - For phone calls, "don't trust the voice": hang up and call back on a number you already know, and agree a family safe word.

## Why your eyes are no longer a reliable detector

For a few years, spotting AI images was a parlour game. Early generators produced six-fingered hands, melted earrings, teeth that merged into one white band and shop signs written in an alphabet nobody speaks. Those tells were real, and the FBI still lists several of them in its [December 2024 public service announcement](https://www.ic3.gov/PSA/2024/PSA241203) on generative AI fraud: distorted hands or feet, unrealistic teeth or eyes, irregular faces, incorrect shadows and unnatural movement.

The problem is that each new model generation fixes the most-mocked flaws first. Hands are now usually right. Text inside images is often legible. Lighting is consistent more often than not. A forger who generates twenty versions and posts the cleanest one will usually beat a casual glance.

The research on faces makes the point bluntly. In a 2022 study published in PNAS, [Sophie Nightingale and Hany Farid](https://pmc.ncbi.nlm.nih.gov/articles/PMC8872790/) showed participants a mix of real photographs and faces made with StyleGAN2. In the first experiment, 315 people classified 128 faces each and averaged 48.2% accuracy, statistically indistinguishable from guessing. A second group of 219 people was taught common artefacts and given feedback after every answer. Their accuracy rose only to 59.0%.

```chart
type: bar
title: Accuracy at telling real faces from AI-generated faces (%)
unit: %
source: Nightingale & Farid, PNAS (2022) | https://pmc.ncbi.nlm.nih.gov/articles/PMC8872790/
note: Chance level is 50%. Experiment 1: 315 participants; Experiment 2: 219 participants with training and feedback.
Experiment 1 (no training): 48.2
Experiment 2 (training + feedback): 59.0
```

A third experiment in the same paper was even more uncomfortable. When 223 people rated faces for trustworthiness on a 1-to-7 scale, synthetic faces averaged 4.82 and real faces 4.48. The fakes were not just convincing; they were judged slightly more trustworthy.

Two caveats keep this in proportion. The study used still portraits of faces, the easiest category for generators, and it was run with a 2020-era model. But the direction of travel is clear, and it is why the rest of this guide leans on context rather than pixels.

## The visual tells that still catch lazy fakes

None of this means you should ignore what you see. Plenty of fakes are made quickly and carelessly, and a thirty-second look will expose them. The trick is to treat a glitch as strong evidence of fakery but the absence of glitches as no evidence at all.

### In still images

Zoom in rather than judging the thumbnail. The places generators still struggle are the places where the image has to obey rules the model never really learned:

- **Text and symbols.** Signs, number plates, book spines, logos on clothing. Look for letters that almost form words, or a sign that reads correctly in one corner and dissolves into squiggles in another.
- **Physical logic.** Shadows that fall in two directions, reflections in glasses or windows that do not match the scene, a hand resting "on" a table but floating a few millimetres above it.
- **Repeated or merging details.** Earrings that differ between ears, fence railings that change spacing, hair that melts into a collar, a crowd where several faces look like siblings.
- **The over-finished look.** Skin with no pores, perfectly even lighting on a "candid" photo, a background blurred in a way no real lens would produce. This is a weak signal on its own, because phone cameras now smooth skin aggressively too.

### In video

Video gives you time, which is an advantage. Slow the clip down (most players let you set 0.5x speed) and watch the edges of the face, the mouth and the hands. Common problems include lips that do not quite match the consonants being spoken, teeth that change shape between frames, earrings or glasses that flicker, and a face that seems to slide slightly over the head when the person turns. The FBI's list also mentions lag and poor voice matching in live video calls.

### In audio

Cloned voices are often flat in emotion, oddly clean (no room echo, no traffic, no breath sounds), or have a rhythm that is slightly too even. Pay attention to word choice too: a cloned voice reads a script, and the script may use phrases your relative never would. The FBI advises listening closely to tone and word choice for exactly this reason. But short, emotional calls on a bad line hide all of this, which is why the defence against voice scams in a later section is procedural rather than perceptual.

>> **Common mistake:** Sharing a dramatic image with "is this real?" as the caption. Even with the question attached, you have amplified it to everyone in the chat. Check first, share second, or do not share at all.

## Start with the source, not the pixels

Professional verification teams spend less time staring at images than you would think. Their first questions are about context, and you can ask the same ones in under two minutes.

**Who posted it first?** A photo of breaking news that only exists on an anonymous account created last month deserves far more suspicion than the same photo on a wire service's site. Scroll the account. Does it post anything else? Does it have a history, or did it appear yesterday with a flood of viral content?

**Is anyone credible reporting the same thing?** If a major event really happened, multiple independent outlets and local sources will have it, usually with different photos from different angles. A single, spectacular image that no news organisation has picked up after several hours is a red flag in itself.

**Does the story fit the image?** Check the details you can verify: the weather on that day, the season (trees in leaf, coats or T-shirts), the architecture, the language on signs. Many viral fakes are not generated at all, but real photos with a false caption, and context checks catch those too.

**What does the post want from you?** Outrage, urgency and a request to share quickly are the common ingredients. So is money: a disaster image linked to a donation page, a celebrity "endorsing" an investment. When an image is attached to a request for money, assume it is fake until proven otherwise.

![A camera lens next to a laptop and tablet on a desk in a bright room](https://images.unsplash.com/photo-1526431038803-6f6c3ee137ae)
*A real photo carries a trail: the camera, the editing software, the first place it was published. Checking that trail is more reliable than inspecting pixels. Photo: Garrhet Sampson / [Unsplash](https://unsplash.com/photos/black-camera-lens-near-gray-laptop-computer-and-black-tablet-computer-inside-well-lit-room-DSQda5dqWPw)*

## Reverse image search, step by step

A reverse image search asks a search engine to find other copies of a picture across the web. It is the single most useful tool for ordinary people, because it answers the question that matters most: where did this come from, and when did it first appear?

1. **Get the best copy you can.** Save the image itself rather than a screenshot of a screenshot. If you only have a video, pause on a clear frame where the main subject is sharp and take a screenshot of that.
2. **Crop to the interesting part.** If the image is a collage, or has a caption bar or a watermark from a social network, crop to the core photo. Search engines match better on the distinctive content.
3. **Run it through more than one engine.** [Google Lens](https://lens.google/) (from the Google app, or by right-clicking an image in Chrome), [Bing Visual Search](https://www.bing.com/visualsearch) and [TinEye](https://tineye.com/) each index different parts of the web. TinEye is particularly useful because it can sort results by the oldest copy it has found.
4. **Look for the oldest version.** If a "photo from this morning" appears in an article from three years ago, you have your answer: it is real but recycled. If the earliest copy comes from an AI art community, a stock-image site's AI section or an account that labels itself as AI, you also have your answer.
5. **Compare the versions.** Sometimes a real photo has been edited: a person added, a sign changed, smoke inserted. Put the viral version side by side with the earliest one you find and look for differences.
6. **Read the text around the results.** Fact-checking organisations often have already written about a viral image, and their articles will appear in the results. Search the claim in words as well, adding "fact check".
7. **Accept "no result" as inconclusive.** A brand-new AI image will have no earlier copies, but neither will a brand-new real photo. No match means you have to rely on the source and context checks above.

>> **Worked example:** A friend forwards a picture of a shark swimming down a flooded motorway "after last night's storm". A reverse search on TinEye, sorted by oldest, turns up the same image years earlier attached to a different storm in a different country. You do not need to decide whether the shark was ever real. You only need to know that it is not from last night, and that is enough to not share it.

## Content Credentials and watermarks: what they can and cannot prove

The technology industry's main answer to synthetic media is not detection but labelling: attach a record of how a file was made at the moment it is made. There are two complementary approaches, and it helps to understand both.

### Content Credentials (C2PA)

The [Coalition for Content Provenance and Authenticity](https://c2pa.org/faqs/), or C2PA, publishes the technical standard behind Content Credentials. The C2PA describes them as "a cryptographically secure way to capture and express content provenance": a signed record, called a manifest, that can list which device or app created a file and what edits were made afterwards. Several AI image generators attach these credentials to their output, and some cameras and editing apps add them to real photos.

To check a file, you can upload it to the free [Content Credentials Verify](https://verify.contentauthenticity.org/) site. If credentials are present, it shows who signed them and the recorded history, including whether a generative AI tool was involved.

The limitation is significant, and the C2PA states it openly: manifests are typically embedded in the file, but "they can be separated." Taking a screenshot, re-saving an image in some apps, or uploading it to a platform that strips metadata can remove the credentials entirely. So the logic only runs one way:

- **Credentials present and saying "AI-generated"** is strong evidence the content was made with AI.
- **Credentials present and showing a camera capture with a clean edit history** is a good sign, though you should still check that the context matches.
- **No credentials** tells you almost nothing. Most real photos on the internet today have none either.

### Invisible watermarks

Watermarking embeds a signal in the pixels or audio itself, which survives some of the edits that strip metadata. Google's [SynthID](https://deepmind.google/models/synthid/) is the best-known example: Google says it adds an imperceptible watermark to images, video and audio generated with its tools, designed to survive cropping, filters and compression, and it offers a detector to check files for that watermark. The C2PA's own documentation mentions watermarking and fingerprinting as "soft bindings" that can help recover credentials that were removed.

The catch is that a watermark only identifies content made by tools that use that particular watermark. A detector that finds no SynthID mark has told you the file probably was not made with Google's tools, not that it is real. Open-source image models that anyone can run at home do not have to add any watermark at all.

| Tool or signal | What a positive result means | What a negative result means | Can it be removed or fooled? |
|---|---|---|---|
| Visual glitches | Strong sign of AI or editing | Very little | Generators fix them; forgers pick clean outputs |
| Reverse image search | Shows older copies or the original source | Inconclusive | Brand-new content has no history either way |
| Content Credentials (C2PA) | Signed record of origin and edits | Very little (most files have none) | Yes, screenshots and re-uploads often strip them |
| Invisible watermark (e.g. SynthID) | Made with a tool that uses that watermark | Only rules out that tool | Only covers participating tools |
| AI-detector websites | Weak signal | Weak signal | Often wrong on new models |

## Voice clones and the "family emergency" call

Of all the uses of synthetic media, cloned voices are the most direct threat to ordinary households, because they are aimed at your money rather than your opinions. The pattern is old: a call from a "grandchild" in trouble who needs bail money, a medical bill, a fee to get out of a foreign police station. What has changed is that the voice can now sound like the real person.

The Federal Trade Commission warned in a [March 2023 consumer alert](https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes) that scammers can clone a loved one's voice from a short audio clip, such as one posted online. Its advice is summed up in four words: "Don't trust the voice." Instead, call the person who supposedly contacted you on a number you know is theirs, and if you cannot reach them, try other family members or friends.

These schemes sit inside a much larger category of fraud. According to the [FTC's figures for 2024](https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024), consumers reported losing more than $12.5 billion to fraud that year, and impostor scams, where someone pretends to be a trusted person or organisation, were the second-largest loss category at $2.95 billion. The FTC's data does not separate AI-assisted impostor calls from ordinary ones, so we cannot say how much of that total involves cloned voices. What it shows is how much money already flows through impersonation, the exact channel voice cloning makes more convincing.

```chart
type: bar
title: Largest reported fraud loss categories in the US, 2024 ($ billion)
unit: $bn
source: Federal Trade Commission, Consumer Sentinel 2024 data | https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024
note: Business and job opportunities reported as $750.6 million, shown here as 0.7506. Losses are as reported by consumers to the FTC.
Investment scams: 5.7
Impostor scams: 2.95
Business and job opportunities: 0.7506
```

The FTC also reported that 38% of people who filed a fraud report in 2024 said they lost money, up from 27% the year before. Scams are not only common; they are working more often.

![A person looking down at an Android smartphone held in both hands](https://images.unsplash.com/photo-1563168206-6920c1377fa6)
*The defence against a cloned-voice call is a habit you practise before the call ever comes. Photo: Paul Hanaoka / [Unsplash](https://unsplash.com/photos/man-using-android-smartphone-wa7_-jf11Vs)*

### Set up a family safe word

The FBI's [public service announcement](https://www.ic3.gov/PSA/2024/PSA241203) recommends agreeing a secret word or phrase with your family to verify identity. The logic is simple: the scammer's raw material is whatever you have posted, and a password agreed over the kitchen table never appears in any of it.

A few practical rules make it useful rather than decorative:

1. **Pick something unguessable.** Not a pet's name, a street you lived on or anything that appears on social media. Two unrelated words ("violet tractor") are easier to remember than a random string and harder to guess than a birthday.
2. **Agree it in person or on a channel you trust.** Do not text it to the family group chat that a compromised phone could expose.
3. **Make the rule clear.** If someone calls asking for money or urgent help and cannot give the word, you hang up and call them back on their known number. No exceptions for "I'm too upset to remember".
4. **Include the people most likely to be targeted.** Grandparents are the classic target of the "grandchild in trouble" script, and they are often the last to be told about new family arrangements.
5. **Rehearse once.** A five-minute conversation at a family meal, including a mock call, makes it far more likely someone will actually use it under stress.

The safe word is a backup. The primary rule is still the FTC's: hang up and call back. Scammers rely on keeping you on the line, so the moment you end the call and dial a number you already have, most of the scam falls apart.

### Red flags in a call or video call

Whether the voice is cloned or the caller is simply lying, the same pressure tactics show up again and again. Be especially wary when a caller:

- insists on secrecy ("don't tell Mum and Dad");
- creates a deadline measured in minutes;
- asks for payment by wire transfer, cryptocurrency or gift cards, which the FTC flags because they are hard to reverse;
- hands the phone to a "lawyer", "police officer" or "doctor" who does the money talk;
- will not let you call back, or gets angry when you suggest it.

The same applies to video calls from a "boss" or "colleague" asking for an urgent payment. Live face-swapping exists, so a familiar face on a call does not settle anything when money is involved. Confirm through a second channel you control.

## A checklist by media type

Bring all of this together and the checks fall into a simple order: context first, then search, then credentials, then pixels. The table below is designed to be screenshotted.

| Check | Images | Video | Voice and audio |
|---|---|---|---|
| Who posted it first, and do they have a history? | Yes, always | Yes, always | Who is calling, and from what number? |
| Are credible outlets reporting the same event? | Yes | Yes | Not applicable for private calls |
| Reverse search | Search the image in two or three engines | Search a clear still frame | Not practical; call the person back instead |
| Content Credentials | Upload to Content Credentials Verify | Supported for some video files | Rarely present |
| Visual or audio glitches | Text, hands, shadows, reflections | Lip sync, teeth, edges of face, flicker | Flat emotion, no background noise, odd phrasing |
| Behavioural red flags | Requests to share urgently or donate | Requests for money on a call | Secrecy, deadlines, gift cards, crypto, wire transfers |
| Final verification | Wait for confirmation before sharing | Confirm through a second channel | Safe word, then hang up and call back |

![A person working on a laptop at a desk with a notebook beside them](https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33)
*Most of these checks take two minutes at a laptop or on a phone. Photo: @breeandstephen / [Unsplash](https://unsplash.com/photos/person-working-on-laptop-WtXcbWXK_ww)*

>> **Tip:** Reduce the raw material scammers can use. The FBI suggests making social media accounts private, limiting followers to people you know and restricting how much of your image and voice you post publicly. A public video of you talking is a ready-made voice sample.

## Where this is heading

The detection arms race is not going to be won by ordinary viewers. Generators will keep improving, and the visual tells listed above will keep getting rarer. The more durable progress is on provenance: more cameras, phones and editing apps signing real photos at the point of capture, more AI tools labelling their output, and more platforms displaying that information instead of stripping it.

That future flips the default question. Instead of "can I prove this is fake?", it becomes "can this prove it is real?" Until signed provenance is common, though, most authentic content will have no credentials at all, and you will be back to the same habits: check the source, search for earlier copies, and slow down when something is designed to make you react fast.

## Frequently asked questions

### Can you tell if an image is AI-generated just by looking at it?

Sometimes, but not reliably. Glitches in text, hands, shadows and reflections still expose quickly made fakes. But in the PNAS study above, people identified real versus AI faces with 48.2% accuracy, and training only raised that to 59.0%. Use visual checks to catch obvious fakes, never to clear a suspicious image.

### Are AI image detector websites accurate?

They give a weak signal at best. They are trained on specific generators, struggle with new models and with compressed or edited files, and can be wrong in both directions. Treat their score as one input, and give more weight to the source of the image and to reverse image search results.

### How do I check Content Credentials on a photo?

Upload the original file to [Content Credentials Verify](https://verify.contentauthenticity.org/). If credentials are attached, the site shows who signed them and the recorded history, including any AI tool involved. If none are found, that is inconclusive: screenshots and many social platforms strip this metadata, and most real photos have none.

### What should I do if I get a call from a relative asking for money urgently?

Follow the FTC's advice not to trust the voice. Hang up and call the person on a number you already know is theirs, or contact another family member. Ask for your family safe word if you have one. Never pay by wire transfer, cryptocurrency or gift cards because a caller is pressing you. In the US, you can report it at [ReportFraud.ftc.gov](https://reportfraud.ftc.gov/).

### How much audio does someone need to clone a voice?

The FTC says scammers can clone a voice from a short audio clip of the person, such as one posted online. The exact length depends on the tool and the quality wanted, and it changes as the technology improves, so the safer assumption is that any public recording of you speaking could be used.

## The takeaway

Stop treating "does it look real?" as the main test. This week, do two concrete things. First, put Google Lens or TinEye where you can reach it in two taps, and make a reverse search your reflex before you share any dramatic image. Second, sit down with your family, including the grandparents, agree a safe word and the "hang up and call back" rule, and practise it once.

Those two habits will not catch every fake. They will catch most of the ones that are trying to cost you money or make you look foolish, and that is the part that matters.
