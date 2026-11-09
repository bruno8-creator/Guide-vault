---
title: How to Spot Phishing Emails, Scam Texts and Fake Calls
description: A practical guide to recognising phishing emails, smishing texts and scam calls, what to do in the first hour if you clicked, and how to report it.
category: tech
date: 2026-11-01
updated: 2026-11-09
author: Guide Market
cover: https://images.unsplash.com/photo-1740479048945-46fe33480214
coverAlt: Wooden letter blocks spelling the word phishing laid out on a table
coverCredit: Markus Winkler / Unsplash
coverPage: https://unsplash.com/photos/MPXlKYuClLI
---
The text arrives at 7:42 on a Tuesday morning. Your parcel "could not be delivered due to an incomplete address", and there is a link to reschedule for a small fee. You are in fact waiting for a parcel. The link looks almost official. You have about four seconds of attention to give it before your coffee goes cold.

That is the whole game. Phishing is rarely clever technology; it is a message timed and worded so that the quick, reasonable response is the wrong one.

This guide is built for the moment you actually face: a message on your screen and a decision to make. You will learn the pressure tactics scammers rely on, the technical clues that hold up even when the writing is flawless, the lures that are circulating most often, a step-by-step plan for the first hour after a mistake, and the account settings that make a slip survivable.

>> **In short:**
>> - Most phishing works on emotion first: urgency, fear, a reward or authority. Notice the feeling before you inspect the message.
>> - Spelling mistakes are no longer a reliable sign. Check the real sender domain, the real link destination and whether the request itself makes sense.
>> - Never use the contact details inside a suspicious message. Open the app or type the website address yourself.
>> - If you clicked, act in this order: stop, change the password from a clean device, sign out other sessions, call your bank if money or card details were involved, then report.
>> - Passkeys and hardware security keys resist phishing in a way that text-message codes do not.

## Why phishing is still the most reported online crime

The FBI's Internet Crime Complaint Center (IC3) received 859,532 complaints in 2024, with reported losses of $16.6 billion, according to its [2024 Internet Crime Report](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf). Phishing and spoofing topped the list by number of complaints, at 193,407, more than double the next category, extortion. The count has actually dropped over the past two years, as the chart below shows, but it remains the single largest category by a wide margin.

```chart
type: column
title: Phishing/spoofing complaints to the FBI's IC3, by year
unit: complaints
source: FBI Internet Crime Complaint Center, 2024 Internet Crime Report | https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf
note: Complaints filed with IC3, not all incidents; many victims never report
2022: 321,136
2023: 298,878
2024: 193,407
```

Read that dip with care. Fewer complaints is not the same as fewer attempts, and the IC3 itself only sees what people choose to report. The losses tied directly to the phishing/spoofing label were $70,013,036 in 2024, which looks small next to the $6.57 billion lost to investment fraud. That gap is misleading: phishing is usually the *first step* of a bigger crime, such as a stolen email login that becomes a business email compromise.

The US Federal Trade Commission tells a similar story from the consumer side. People reported losing more than $12.5 billion to fraud in 2024, a 25% increase on the year before, the FTC said in its [March 2025 release](https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024). The share of people who reported losing money rose from 27% to 38%.

## The psychology: four levers every scam pulls

Before looking at headers and links, it helps to name what a scam message is trying to do to you. Almost every phishing attempt leans on one or more of four levers.

**Urgency.** "Your account will be closed in 24 hours." "Final notice." "Unpaid toll: late fees apply today." A deadline shrinks the time you spend thinking, which is exactly the point. The US Cybersecurity and Infrastructure Security Agency lists urgent or emotionally charged language as the first warning sign in its [guidance on recognising phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing).

**Fear.** A suspicious login, a frozen card, a tax penalty, a warrant. Fear makes people comply first and ask questions later.

**Reward.** A refund you are owed, a prize, a job that pays well for little work, a free gift card for completing a survey.

**Authority and familiarity.** The message borrows a name you trust: your bank, a delivery company, the tax office, your boss, a colleague in finance. Increasingly it also borrows details about you, such as your employer or a recent purchase, taken from social media or old data breaches. The UK's National Cyber Security Centre notes on its [phishing guidance hub](https://www.ncsc.gov.uk/collection/phishing-scams) that criminals use publicly available information to make messages more convincing.

The practical habit: when a message makes you feel a jolt, of worry, of excitement or of obligation, treat the jolt itself as a red flag. Real organisations almost never need you to act through the link in that specific message.

>> **The one rule that beats every trick:** never use the contact route the message gives you. If the "bank" texts, open your banking app or call the number on the back of your card. If "HR" emails a form, message HR through the company chat. A real problem will still be there when you arrive by your own route.

## The technical signs that still work when the grammar is perfect

For years the standard advice was to look for typos. CISA now says that AI tools can produce error-free messages, so poor grammar should no longer be your main test. The signs below are harder for a scammer to fake.

### The sender's real address

Display names cost nothing to forge. An email can show "PayPal Support" or your manager's name while the actual address behind it is something like `support@secure-account-verify.co`. On a phone, tap the sender name to reveal the full address; on a computer, hover over it or open the message details.

What you are looking for is the **domain**, the part after the @. A bank sends from the same domain you would type into a browser. Free webmail addresses (gmail.com, outlook.com and so on) claiming to be a company are a near-certain sign of fraud. So is a domain that merely *contains* the brand name, such as `amazon-orders-help.com`.

### Look-alike domains

Scammers register domains that pass a glance: a letter swapped (`arnazon` with "rn" instead of "m"), an extra word (`yourbank-secure.com`), a different ending (`.co` instead of `.com`) or a subdomain trick: in `yourbank.com.account-check.net`, the real domain is `account-check.net`. Read the address from the right, starting just before the first single slash, to see who owns the page.

### Where the link really goes

On a computer, hover over a link and read the destination before you click. On a phone, press and hold it to preview without opening. Shortened links from large organisations deserve suspicion. So do QR codes asking you to "verify" something: a QR code is just a link you cannot read.

A padlock in the address bar does not mean a site is safe. It means the connection is encrypted, and phishing sites obtain those certificates as easily as anyone else.

### Attachments and unexpected files

An invoice you do not recognise is one of the lures the FTC lists in its [advice on phishing](https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams). Be careful with compressed files (.zip, .rar), disk images (.iso, .img), HTML attachments that open a "login page" in your browser, and Office documents that ask you to "enable content" or "enable macros".

### What the message asks for

This is the most reliable test. Legitimate companies do not ask you to confirm your password, read out a one-time code, move money into a "safe account", pay a fine in gift cards or cryptocurrency, or install remote-access software so they can "fix" your computer. The FTC puts it bluntly: real companies will not email or text you a link to update your payment information.

## Red flags by channel: email, text and phone

The same psychology turns up everywhere, but each channel has its own tells. Scammers also mix them: an email that tells you to call a number, or a call followed by a text "for verification".

| Channel | Common red flags | What to do instead |
|---|---|---|
| Email | Display name does not match the real address; look-alike domain; generic greeting; link destination differs from the text; unexpected attachment or "shared document"; invoice you do not recognise | Open the company's site or app yourself; forward the email to the relevant reporting address; delete |
| Text (smishing) | Unknown number or email-to-text sender; delivery, toll or bank alert with a link; small "fee" to release something; urgency in the first line; a reply-with-Y request | Do not tap or reply; check the account in the official app; forward to 7726 in the US and UK |
| Phone (vishing) | Caller already knows some of your details; asks you to confirm a code sent to your phone; says your money must be moved to protect it; asks for gift cards, crypto or wire transfer; pressure to stay on the line | Hang up; call back on a number you look up yourself, ideally from a different phone |

![Hand holding a smartphone that shows a text message conversation on screen](https://images.unsplash.com/photo-1776797391265-01a0490d4c99)
*Scam texts land in the same thread style as messages from friends, which is part of why they work. Photo: Brett Wharton / [Unsplash](https://unsplash.com/photos/vMuA-OoDReo)*

Texts are harder to inspect than email: no headers, a spoofable sender and a tiny link preview. The safest habit is to ignore any link in a text, however legitimate it looks, and check through the official app.

## Which contact methods scammers use most, and which cost the most

The FTC's [Consumer Sentinel Network Data Book 2024](https://www.ftc.gov/system/files/ftc_gov/pdf/csn-annual-data-book-2024.pdf) breaks fraud reports down by how the scammer first made contact. Email led by volume for the second year running, followed by phone calls and text messages.

```chart
type: bar
title: US fraud reports by first contact method, 2024
unit: reports
source: Federal Trade Commission, Consumer Sentinel Network Data Book 2024 | https://www.ftc.gov/system/files/ftc_gov/pdf/csn-annual-data-book-2024.pdf
note: Only reports where a contact method was identified
Email: 371,651
Phone call: 284,659
Text: 246,784
Social media: 186,826
Website or apps: 186,663
Mail: 42,108
Online ad or pop-up: 42,023
```

Volume is only half the picture. The same data book shows that a scam starting on social media led to $1,858 million in reported losses, the largest total, while email-initiated fraud cost $502 million. Phone calls stand out on the cost of each individual loss: the median loss for people who lost money after a call was $1,500, against $600 for email and $1,000 for texts.

The pattern makes sense once you think about effort. Email is cheap to send by the million, so most attempts fail and the typical loss is modest. A call costs a scammer real time, so it is targeted and pushed hard. If you harden one habit, make it this: never act on an unexpected call that asks you to move money or read out a code, however convincing the caller sounds.

## The lures doing the rounds right now

The costumes change every season, but the families stay familiar.

### Delivery and toll notices

A "missed delivery", a customs fee or an unpaid road toll, with a link to pay a few dollars or pounds. The small sum is the hook: it seems too trivial to be a scam, and paying it hands over your full card details. Check the tracking number on the courier's own site, or your toll account in its official app.

### Bank and payment alerts

"We've detected unusual activity" or "Your card has been suspended". These often come in two stages: a text with a link to a fake login page, followed by a phone call from someone posing as the fraud team who already knows your details because you just typed them in. The call is where money moves, usually by asking you to read out a one-time code or to transfer funds to a "safe account". No genuine bank will ask for either.

### Tax refunds and penalties

The FTC flags messages saying you are eligible for a government refund as a classic lure. The IRS maintains a running list of [tax scams and consumer alerts](https://www.irs.gov/newsroom/tax-scams-consumer-alerts). Demands for instant payment by gift card or crypto, and threats of arrest over the phone, are a scammer's script.

### Job offers

The FTC reported that losses to job and employment agency scams reached $501 million in 2024, up from $90 million in 2020. The pattern: a too-good offer by text or chat, a fake interview, then a request to pay for "equipment", "training" or to deposit a cheque and send part of it back. A real employer pays you, not the other way round.

### Account lock and password reset

"Your mailbox is full", "Your Microsoft 365 password expires today", "Unusual sign-in to your Apple account". These target your email or cloud login, which is the master key to everything else: once a criminal controls your inbox, they can reset most of your other passwords. The FTC lists suspicious login attempts and account problems among the most common stories phishers tell.

>> **A common mistake:** people check one thing and stop. The sender looks right, so they click. Spoofed sender names, compromised real accounts and convincing pages mean a single passing check proves little. Ask three questions instead: is the sender's real domain right, does the link go where it claims, and would this organisation really ask for this, this way?

## If you clicked: what to do in the first hour

Clicking a phishing link is not, by itself, a disaster. The damage comes from what you typed or allowed afterwards, and speed matters more than perfection. Work through these steps in order.

1. **Stop and disconnect the session.** Close the page and enter nothing else. If you downloaded or opened a file, disconnect that device from Wi-Fi or mobile data for now.
2. **Work out what you gave away.** A password, card number, one-time code or remote access each needs a slightly different response; nothing typed means much lower risk.
3. **Change the password from a different, clean device.** Do the affected account first, then anywhere you reused that password.
4. **Sign out of all other sessions and check recovery settings.** Then check that the recovery email, phone number and mail-forwarding rules have not been changed; attackers often add a silent forwarding rule.
5. **Turn on, or reset, two-step verification.** If you read out or typed a code, assume the attacker used it to add their own device. Remove unknown devices and set up verification again.
6. **Call your bank or card issuer if money or card details are involved.** Use the number on the back of your card and ask them to block it. The faster you call, the better the chance of stopping a payment.
7. **Scan and clean the device if you opened a file or installed anything.** The FTC's advice is to update your security software, run a scan and remove anything it flags. If you gave a stranger remote access, uninstall that tool.
8. **Protect your identity if sensitive numbers leaked.** In the US, [IdentityTheft.gov](https://www.identitytheft.gov/) builds a recovery plan based on what was exposed, and a credit freeze stops new accounts being opened in your name.
9. **Report it.** The next section explains where.

![Combination padlock resting on a laptop keyboard on a wooden surface](https://images.unsplash.com/photo-1768839720936-87ce3adf2d08)
*After a slip, locking down your email account comes first, because it controls password resets for everything else. Photo: Sasun Bughdaryan / [Unsplash](https://unsplash.com/photos/WUJmdr8pNwk)*

The same plan, arranged by what happened:

| What happened | Do this immediately | Then |
|---|---|---|
| Clicked a link, typed nothing | Close the page; clear that tab | Watch for follow-up messages; report the message |
| Entered a password | Change it from another device, plus anywhere you reused it | Sign out all sessions; check recovery details and forwarding rules; enable 2FA |
| Shared a one-time code | Change the password and remove unknown devices | Call the provider if you cannot get back in; check recent activity |
| Entered card or bank details | Call the bank on a trusted number; block the card | Review statements; dispute unauthorised charges |
| Sent money | Call your bank or payment provider at once and ask for a recall | Report to the police or the national fraud reporting service |
| Opened a file or installed software | Disconnect from the internet | Run a full security scan; remove remote-access tools; change passwords from a clean device |
| Gave an ID or Social Security number | Use IdentityTheft.gov or your country's equivalent | Freeze your credit; watch for new accounts |

>> **Be wary of the second wave.** People who have just been scammed are prime targets for "recovery" scams: someone calls claiming to be from a law firm, a bank or the police and offers to get your money back for a fee. Legitimate agencies do not charge you to investigate.

## How to report phishing, and why it is worth the minute

Reporting rarely gets your own money back, but it takes sites down and feeds the alerts that protect the next person. Here is where to send things, at the time of writing.

**United States.** Forward phishing emails to `reportphishing@apwg.org`, the address the FTC recommends. Forward scam texts to **7726** (which spells SPAM). Report any scam attempt, including calls, to the FTC at [ReportFraud.ftc.gov](https://reportfraud.ftc.gov/). If you lost money online, file with the FBI's [IC3](https://www.ic3.gov/).

**United Kingdom.** Forward suspicious emails to `report@phishing.gov.uk`, as the [NCSC advises](https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-email). The NCSC analyses the email and any sites it links to, and says it acts on every message it receives. Scam texts can also be forwarded to 7726, as the NCSC explains on its [page on scam text messages](https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-text-message).

**At work.** Use the "report phishing" button in your email client if your organisation has one, or tell IT straight away. An early report can let the security team pull a message from everyone else's inbox, so own up quickly.

## Passkeys, password managers and 2FA: making a mistake survivable

Spotting phishing is a skill, and skills fail on a tired Friday afternoon. The better defence is accounts set up so one slip cannot empty them.

### Two-factor authentication helps, but not all of it is equal

Two-factor authentication (2FA, also called multi-factor authentication or MFA) means a stolen password alone is not enough to log in. Turning it on for your email and bank is the most valuable step most people can take today.

The weakness is that the most common forms can themselves be phished. A fake login page can ask for your text-message code and pass it to the real site in real time. A phone scammer can ask you to read the code out. CISA's fact sheet on [implementing phishing-resistant MFA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf) also warns about "push bombing": repeated approval prompts sent until you tap "approve" to make them stop. SMS codes are also exposed to SIM-swap fraud, where a criminal gets your number moved to their SIM.

### Passkeys and security keys are the strongest option

CISA calls phishing-resistant MFA, based on the FIDO/WebAuthn standard, the gold standard. In practice that means **passkeys** (stored on your phone, computer or password manager and unlocked with your fingerprint, face or PIN) and **hardware security keys** (small USB or NFC devices).

Their advantage is structural, not a matter of you being careful. A passkey is tied to the genuine website's domain. If you land on `yourbank-secure-login.com`, there is simply no passkey for that address, so nothing is offered and nothing can be stolen. There is no code to read out to a caller either.

![Smartphone screen showing account preferences with a verification prompt](https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e)
*Account security settings are where you add a passkey or switch from text-message codes to an authenticator app. Photo: Zulfugar Karimov / [Unsplash](https://unsplash.com/photos/hvbjTynPt7A)*

### Password managers as a phishing detector

A password manager stores a unique password for every site, which limits the damage when one is stolen. It also has a quieter benefit that matters here: it fills in your details only on the domain where you saved them. If your manager does not offer to fill your bank login on a page that looks exactly like your bank, stop. The software checks the real domain while your eyes check the logo.

The honest limits: none of these tools stops you from voluntarily sending money to a scammer who has convinced you of a story, and passkey support is still uneven across sites.

## A two-minute checklist for any suspicious message

1. **Notice the jolt.** Urgency, fear or a reward? Slow down on purpose.
2. **Check the real sender.** Tap or hover to see the full address or number; read the domain from the right.
3. **Check the real destination.** Hover or long-press links; treat QR codes and shortened links as unknown.
4. **Check the request.** Passwords, codes, payment details, gift cards, crypto, remote access or secrecy mean stop.
5. **Go by your own route.** Open the official app, type the address yourself or call a number you already trust.
6. **Report and delete.** Forward to the right address or 7726, then delete.
7. **Harden the accounts that matter most.** Email first, then banking: unique password, and a passkey or authenticator app instead of SMS where possible.

## Frequently asked questions

### Can you get hacked just by opening a phishing email?

For a typical, fully updated phone or computer, simply opening an email is very unlikely to compromise it. The risk comes from clicking links, opening attachments, enabling macros or entering details. Keeping your operating system, browser and email app updated closes most of the rare flaws that could be exploited without a click. That only works while the manufacturer still ships patches, so it is worth checking whether [your device is still getting security updates](/articles/is-your-device-still-getting-security-updates).

### What should you do if you replied to a scam text?

Replying usually confirms that your number is active, so expect more scam messages. Do not engage further, block the number and forward the original text to 7726. If you shared any personal details or codes in the reply, follow the "if you clicked" steps above for that type of information.

### How can you tell if a call from your bank is real?

Hang up and call the number printed on the back of your card or in the bank's app, ideally from a different phone, in case the line has not fully cleared. A real bank will never ask you to read out a one-time code, give your full PIN or move money to a "safe account".

### Are scam messages getting harder to spot because of AI?

Yes, in one specific way: polished, personalised text is now cheap to produce, and CISA notes that bad grammar is no longer a reliable sign. The checks that still work are structural ones, such as the real sender domain, the real link destination and whether the request makes sense, plus calling back on a number you trust.

### Do you need to report a phishing email if you didn't fall for it?

It is not required, but it helps. Reports to services such as reportphishing@apwg.org, the FTC or the NCSC's report@phishing.gov.uk feed takedowns and warnings, and in the UK the NCSC says it acts on every message it receives. It takes less than a minute.

## The takeaway

You will not catch every scam by eye, and you do not need to. The aim is a system that works on your worst day: a habit of never acting through the link or number in an unexpected message, plus accounts set up so that one mistake stays contained.

This week, do two things. Turn on a passkey or an authenticator app for your main email account, because it is the key to everything else, and save the reporting addresses for your country in your phone's contacts. Then, the next time a message makes your pulse jump, let that be the cue to close it and check by your own route.
