---
title: Is Your Cheap Android TV Box Safe? How to Check It and What to Do
description: After the XCPE botnet takedown, here's how to check your Android TV box in five minutes, why a factory reset won't clean it, and what to buy instead.
category: tech
date: 2026-11-11
author: Guide Market
cover: https://images.unsplash.com/photo-1606904825846-647eb07f5be2
coverAlt: A white home broadband router on a table with an Ethernet cable plugged into the port on its back.
coverCredit: Compare Fibre / Unsplash
coverPage: https://unsplash.com/photos/white-router-on-white-table-hXVVNB6Qctg
---
It's the little black box behind the TV. Maybe you bought it on Amazon or AliExpress for the price of a takeaway because it promised every app and "free channels." Maybe you gave one to your parents last Christmas. It has worked fine ever since, and then this month a headline says Google has shut down a botnet of more than a million infected Android TV boxes.

The obvious question is whether yours is one of them. The less obvious one is what you should do if you can't tell, because with this kind of malware the usual fixes don't work. A factory reset won't clear it, and neither will deleting an app or running an antivirus scan.

Below is a check you can do from the sofa in about five minutes, plus what to do with your passwords and router if the box fails it. The same problem has turned up three times since 2023, so the checks will still be useful the next time it makes the news.

>> **In short:** if your box is a cheap, unknown-brand Android box, assume it's risky until you've checked it.
>> - On November 2, 2026, Google announced that it and its partners had taken down the XCPE botnet, built from **more than 1.3 million** Android TV boxes with a backdoor installed at the factory.
>> - The backdoor lives in the firmware. **A factory reset does not remove it.**
>> - "Play Protect certified" lowers the risk a lot, but this time some certified devices were affected too.
>> - If your box fails the checks, unplug it from the internet, change the passwords you used on it, and secure your router.
>> - Safer name-brand streamers cost roughly $40 to $300 in the US as of November 2026.

## What happened with the XCPE botnet

On November 2, 2026, Google's Threat Intelligence Group announced that, together with Japan's National Police Agency and the security firms Lumen, HUMAN Security, Plume, Synthient and TrendAI, it had taken down the servers that controlled a botnet called XCPE (after its main component, `x.cpe`). [BleepingComputer's report](https://bleepingcomputer.com/news/security/google-disrupts-million-device-xcpe-android-malware-botnet-bans-tv-box-maker) counts more than 1.3 million Android TV streaming boxes in it. The operation reached further than that, too: at least 10 million other compromised devices, from set-top boxes to karaoke machines and telehealth hardware, lost contact with the people controlling them.

What makes this case unusual is who Google blames. It attributes the botnet, "with high confidence," to Videostrong Technology, a [Shenzhen-based maker of TV boxes](https://cybernews.com/security/videostrong-android-tv-box-backdoor-botnet-dismantled-by-google/) that sells under its own name and builds devices for other brands. Google says the backdoor was developed and run deliberately by the company for profit, and not by a rogue employee.

Google's response, as BleepingComputer describes it, goes well beyond the servers. Videostrong no longer has any relationship with Google or a license to ship Android TV devices with Google apps, and neither it nor any future affiliate may make certified Android devices.

The researchers who traced it back, Synthient, started with a [MECOOL KM9PRO Max box bought in late 2025](https://bleepingcomputer.com/news/security/google-disrupts-million-device-xcpe-android-malware-botnet-bans-tv-box-maker) that had the backdoor preinstalled. According to [The Hacker News](https://thehackernews.com/2026/11/google-disrupts-13-million-device.html), MECOOL boxes made up most of the devices Plume saw contacting the control server.

TrendAI ran its own count from June 3 to October 1 and reached 1,472,554 infected devices, spread over 206 models. The largest numbers were in Malaysia, Brazil, Iraq, Mexico and Taiwan. The US, UK, Germany, Australia and Canada came further down the list, but still had roughly 26,000 to 42,000 infected devices apiece.

A word of caution about names. The sources above name Videostrong and MECOOL. They don't publish a full list of other brands Videostrong built boxes for, and we won't guess. **A brand not appearing in the news is not a clean bill of health.**

## Why cheap boxes keep getting caught

This is the third round of the same story. The FBI warned in a [June 2025 public service announcement](https://www.ic3.gov/PSA/2025/PSA250605) about BADBOX 2.0, a network of "millions" of infected home devices, which it described as the successor to an original BADBOX campaign disrupted in 2024. The Hacker News notes that Google's July 2025 lawsuit over BADBOX 2.0 involved more than 10 million devices, all of them uncertified. Now XCPE.

The economics explain why. A box that sells for $25 to $40 leaves very little margin for the maker. A backdoor turns every unit into a source of income long after the sale: the operator can rent out your internet connection, run fake ad views in the background, or install whatever a paying customer wants.

**You paid for the hardware once, and they keep earning from it.**

The FBI's PSA explains the main business model in plain terms: criminals sell access to infected home networks through residential proxy services. That means strangers' traffic is routed through your connection, so to the outside world it looks like it's coming from your house. People use these services to hide fraud, account takeovers and other crimes behind an ordinary home IP address.

### What an infected box can actually do

The list of what XCPE let its operators do, as [BleepingComputer](https://bleepingcomputer.com/news/security/google-disrupts-million-device-xcpe-android-malware-botnet-bans-tv-box-maker) describes it, is long and frightening. In short, they had full control of the box: they could run commands on it, open a remote shell, add apps without asking and turn Google Play Protect off. They could also watch and steer it by taking screenshots and typing keystrokes, and gather information, from account and device details to a scan of the rest of your home network. What they actually loaded onto the boxes included software that sold your bandwidth as a residential proxy, ad-fraud code, and yet more backdoors.

In everyday terms, that means three things for you:

- **Your connection is being used by strangers.** At best that's wasted bandwidth. At worst, your IP address shows up in someone else's fraud.
- **Your accounts on the box are exposed.** The backdoor could take screenshots and collect account details, so if you signed in to Google, Netflix or another service on it, treat those accounts as compromised.
- **It sits inside your home network.** A box that can scan your network sees your laptop, phones and smart devices from the inside, past the protection your router gives you from the outside.

The good news is that a TV box is usually a fairly boring target. People rarely do banking on it. What's at stake is mostly your streaming and Google accounts plus your connection, and every one of those can be fixed.

## The five-minute check

Work through these in order. The point is to sort your box into one of three groups: probably fine, risky, or infected.

### 1. Find the brand and model

Look on the sticker underneath, the box it came in, or your order history. On most Android TV boxes you'll also find it in **Settings > Device Preferences > About**, which shows the model name and Android version. On devices with the newer Google TV interface, it's under **Settings > System > About** instead. Menus vary a little by maker.

If the brand is MECOOL, or you can't find a recognizable brand at all, treat it as high risk from this point on. McAfee's [consumer guide to XCPE](https://www.mcafee.com/blogs/security-news/xcpe-botnet-android-tv-box/) points to a list of 182 model names that Synthient published. A match on that list is a strong warning sign, but McAfee stresses that it isn't proof, and that a model missing from the list isn't automatically safe.

While you're there, note the Android version. The EFF's [BADBOX research](https://www.eff.org/deeplinks/2025/06/fbi-warning-iot-devices-how-tell-if-you-are-impacted) found infected boxes mostly running old versions, Android 9 to 12. On its own an old version doesn't prove anything, but it's one more mark against the box.

### 2. Check whether the maker is a Google partner

Google keeps a list of [Android TV partners](https://www.android.com/tv/) on its Android TV site. Scroll to "See Android TV global partners." Names you'll find there include Sony, TCL, Hisense, Philips, Xiaomi and NVIDIA. As of November 11, 2026, neither MECOOL nor Videostrong appeared.

If the brand printed on your box isn't on that list, it doesn't mean the box is infected. It means Google hasn't vouched for the maker, and you're relying entirely on their honesty.

### 3. Check Play Protect certification

This is the step people skip. Open the **Google Play Store** on the box, open your profile icon, go to **Settings > About**, and look at **Play Protect certification**. [Android Authority](https://androidauthority.com/android-tv-certified-check-3330003) describes this path for TVs, and Google's [help page](https://support.google.com/android/answer/7165974) gives the same one for phones. A certified box should say "Device is certified." If it says "Device is not certified," that's your answer.

According to Google, a certified device has passed Android compatibility testing and carries licensed Google apps. An uncertified one has no test record with Google, may be less secure, and may not get updates. If your box has the Play Store but says it isn't certified, the Play Store was put there without Google's permission, and that's a serious red flag in its own right.

While you're in the Play Store, open **Play Protect** and check that app scanning is switched on. McAfee lists Play Protect being turned off, when you didn't do it, as one of the clearest signs of infection. XCPE disabled it on purpose so it could install apps quietly.

### 4. Look at the system apps

In **Settings > Apps**, open the full app list and make sure system apps are included. There's usually a toggle or a menu option for it. McAfee names three apps tied to XCPE to look for: `x.cpe`, `com.oemservice` and `com.abc.nexus`. A clean result proves little, though, because later versions hide behind names that sound like ordinary parts of Android, such as `com.android.system.ntp`.

Other things worth noticing: apps you never installed, a second app store you didn't add, or settings that change by themselves.

### 5. Check what it does when you're not watching

Most home routers have an app or web page that lists connected devices and, often, how much data each one uses. A TV box that moves large amounts of data overnight, when nobody is streaming, is behaving like a proxy. The FBI lists unexplained internet traffic among its warning signs.

Say your router app shows the box used several gigabytes between 1 a.m. and 7 a.m., while the TV was off and everyone was asleep. Nobody in your house was watching anything, so somebody else was using it.

![A white and black home router with four status lights lit, the device whose app or web page shows each gadget's data use](https://images.unsplash.com/photo-1516044734145-07ca8eef8731)
*Your router, not the TV box, is where you can see what the box does overnight. Photo: Misha Feshchak / [Unsplash](https://unsplash.com/photos/white-and-black-modem-router-with-four-lights-syCXK9WndqQ)*

### Reading the results

| What you found | What it means | What to do |
|---|---|---|
| Known partner brand, "Device is certified," Play Protect on, nothing odd in apps or traffic | Probably fine | Keep it updated, keep Play Protect on, install apps only from the Play Store |
| Unknown brand or not certified, but no other signs | Risky, possibly infected | Plan to replace it; move it to a guest network until you do |
| MECOOL or a model on Synthient's list, suspicious system apps, Play Protect off, or heavy idle traffic | Treat as infected | Follow the steps below today |

>> **Common mistake:** "It works fine, so it's clean." These boxes are built to work fine. The people running the backdoor want you to keep it plugged in, so a box that streams perfectly tells you nothing.

## Does "Play Protect certified" mean it's safe?

Usually it's the best single signal you have. The BADBOX 2.0 devices in Google's 2025 lawsuit were all uncertified, and the FBI lists uncertified Android devices as a warning sign.

XCPE is the exception. Google says Videostrong hid its malicious code during testing and only loaded it after the first boot, which is why Google has now changed its certification review. Google hasn't said how many certified boxes were caught up in it. But Plume's analysis, as reported by The Hacker News, turned up certified devices next to uncertified ones running plain AOSP. The same report notes that on November 2, Videostrong's own website was still listing boxes and sticks labelled "Google Certified."

So **treat "certified" as necessary but not sufficient.** A certified box from a big brand you recognize is a much safer bet than a certified box from a name you've never heard of.

## Why a factory reset won't fix it

This is the part most people find hard to accept, so it's worth spelling out.

A factory reset wipes the parts of the box you added: your apps, accounts and settings. It then restores the system from a separate area of storage that the maker filled at the factory. **If the backdoor was put there at the factory, the reset reinstalls it.**

That's how XCPE behaves: according to BleepingComputer, deleting it doesn't stick, because it puts itself back from a system area called the `/oem/` partition. Only a clean firmware image gets rid of it for good.

Clean firmware has to come from somewhere you trust, and in this case the source would be the same maker Google accuses of planting the backdoor. For a box from an unknown brand, there's usually no trustworthy firmware to install at all.

The researchers don't give the same advice about what to do instead. Synthient's is the simplest: get rid of the boxes. TrendAI says cleaning it up takes action from the vendor, protection at the platform level, or a new device. Plume does recommend a full factory reset, but for a narrower reason: it could clear out extra malware that the add-on modules may have installed. It doesn't claim the reset touches `x.cpe` itself.

In my view, for a box that cost less than a month of streaming subscriptions, replacing it is the sensible answer. An evening spent hunting for firmware you can't trust is worth more than the box.

One more thing people assume: **the takedown didn't fix your box.** Google cut off the control servers, but the backdoor is still on every device sold. If the operators, or someone else, put new infrastructure in place, the boxes are ready to be used again.

## What to do now, step by step

If your box landed in the "treat as infected" row, or you'd simply rather not take the risk, do this in order.

1. **Cut it off first.** Pulling the power plug is the surest way, because it ends any network connection too. If you want to keep it powered for now, at least remove the Ethernet cable or switch off its Wi-Fi. Don't leave it running "just until the new one arrives."
2. **Then deal with every account that was signed in on it.** Use your phone or computer, not the box, to set new passwords for your Google account and for Netflix, Disney+, YouTube, Spotify or whatever else you used. Many streaming services have a "sign out of all devices" option in account settings, so use it.
3. **Check your Google account's device list.** In your Google account's security settings, look at the devices signed in to your account and remove the TV box and anything you don't recognize.
4. **Turn on two-step verification** for your Google account and anything else that offers it, starting with email. Our guide to [spotting phishing emails and scam texts](/articles/how-to-spot-phishing-emails-and-scam-texts) explains how two-factor sign-in and password managers protect you if a password has leaked.
5. **Lock down the router.** An infected box on your network could have seen both the Wi-Fi password and the router's admin password, so give each a new one. While you're in the router's settings, go through the connected-device list and kick off anything you can't identify.
6. **Give smart gadgets their own network from now on.** Most routers can run a guest network. Putting TV boxes and other smart devices there keeps a misbehaving one away from your laptops and phones. McAfee and Synthient both recommend it.
7. **Stay alert for a few weeks.** The signs to look for are notifications about logins you didn't make, password-reset messages you never requested and card payments you can't account for. Call your bank straight away about anything odd.

![A hand holding a white power plug at a wall outlet, the quickest way to cut a suspect box off](https://images.unsplash.com/photo-1610056494071-9373f12bf769)
*Step 1 is the simplest: take the box off the power. Photo: Kelly Sikkema / [Unsplash](https://unsplash.com/photos/person-holding-white-electric-plug-fZirmwarM0E)*

### Should you throw it away?

If it failed the checks, yes, but responsibly. Don't sell it or give it to someone else, because you'd be passing the problem on. Take it to an e-waste collection point.

Before you do, ask the seller or marketplace about a return or refund. Keep your order details and a screenshot of what you found (the uncertified status in the Play Store, or the suspicious system app). Whether you'll get your money back depends on the seller's policy, the marketplace, how long ago you bought it and where you live, so I can't promise anything. A box sold with malware preinstalled is a reasonable thing to complain about, though.

In the US you can also report the listing to the FTC at [ReportFraud.ftc.gov](https://reportfraud.ftc.gov/), as McAfee suggests, and tell the marketplace so other buyers are warned.

### Could you get in trouble?

The honest answer is that it's very unlikely, but I can't give you a legal guarantee. The FBI's PSA defines a botnet as devices controlled without their owners' knowledge, and notes that a warning sign alone doesn't confirm malicious activity or a crime. I haven't found any source suggesting ordinary owners have been pursued for traffic that went through an infected box.

What protects you is acting once you know. Disconnect the box, keep a note of what you found and when, and if you believe criminal activity went through your network, report it to the FBI's Internet Crime Complaint Center at [ic3.gov](https://www.ic3.gov/), which is what the FBI itself asks victims to do. If you live outside the US, your national cybercrime reporting service is the equivalent, and if you're worried about a specific situation, talk to a lawyer.

## Safer replacements and what they cost

The safer choices all come from big companies that control their own software and push regular updates. They cost more than a no-name box, and in 2026 they've been getting more expensive: Roku, Amazon, Google and Apple have all raised prices this year, and Google put its increase down to rising component costs.

These are list prices in the US as of November 2026. You'll often see them lower on sale, and prices elsewhere differ.

| Device | Approx. US list price (Nov 2026) | Software | Worth knowing |
|---|---|---|---|
| Roku Streaming Stick | about $40 | Roku OS | The cheapest option in this table. Price rose $10 in July 2026. [Android Authority](https://www.androidauthority.com/roku-price-hikes-3691262/) |
| Roku Streaming Stick Plus | about $60 | Roku OS | Price rose $20 in July 2026. Higher up the range, the Streaming Stick 4K is about $80 and the Roku Ultra about $150. [Android Authority](https://www.androidauthority.com/roku-price-hikes-3691262/) |
| Fire TV Stick 4K (3rd gen) | about $60 | Amazon Vega OS | Launched September 2026; not Android-based, can't sideload apps and has a smaller app selection. [AFTVnews](https://www.aftvnews.com/amazon-announces-new-3rd-gen-fire-tv-stick-4k-running-vega-os-with-an-all-new-remote/) |
| Fire TV Stick 4K Max | about $85 | Fire OS (Android-based) | Price rose from about $60 in August 2026. [Tom's Guide](https://www.tomsguide.com/audio/smart-speakers/amazon-raised-prices-on-echo-fire-tv-and-kindle-devices-heres-how-much-more-youre-going-to-pay) |
| Google TV Streamer | about $150 | Google TV | The closest like-for-like swap for an Android box, with the Play Store. Rose from $99.99 on August 31, 2026. [TechRepublic](https://www.techrepublic.com/article/news-google-tv-streamer-price-hike-150/) |
| Apple TV 4K (2026) | about $300 | tvOS | One 128 GB model since October 2026. [MacRumors](https://macrumors.com/2026/10/13/apple-tv-4k-is-now-even-more-expensive) |
| Smart TV's built-in system | already paid for | Google TV, Roku, webOS, Tizen and others | If your TV is from a major brand and still gets updates, you may not need a box at all. |

My honest take: if all you do is watch Netflix, YouTube and the big streaming apps, a $40 to $60 Roku or Fire TV stick does the job, and the company that makes the hardware also writes and updates the software. Say your old box cost $30: the cheapest Roku in the table is about $10 more, which is a small price for a maker you can actually hold to account.

If you specifically want Android apps and the Play Store, the Google TV Streamer or a certified box from a brand on Google's partner list is the way to get them. The Apple TV is excellent, but at $300 it's hard to recommend purely as a replacement for a $30 box.

Before you buy anything, check the TV you already own. Many sets from the last few years have Google TV, Roku, webOS or Tizen built in. Our guide to [checking whether a device still gets security updates](/articles/is-your-device-still-getting-security-updates) explains why a supported system is the part that matters.

>> **Tip:** buy from the maker's own store or a major retailer selling the item itself, not a third-party seller with a long product title. A cheap "Fire TV" or "Google TV" from an unknown marketplace seller is exactly where fakes and grey imports turn up.

## How to spot a risky box before you buy

These signs come from the FBI's list of indicators, the EFF's research and the XCPE case. One sign alone isn't proof, but two or three together should be enough to walk away.

- **"Unlocked," "jailbroken," "free channels," "free movies," "no subscription."** The FBI specifically names generic streaming devices advertised as unlocked or offering free content. Boxes sold for pirated TV are the core of this market, and their whole pitch depends on software you can't check.
- **A brand you can't find anywhere except marketplace listings.** If the maker has no real website, no support page and no firmware downloads, there's nobody to fix anything.
- **"Android" with no mention of "Android TV" or "Google TV."** Plenty of these boxes run a plain open-source version of Android (AOSP) that isn't what Google certifies for TVs. Google [warned in 2023](https://9to5google.com/2023/05/26/android-tv-box-malware-tips/) that some boxes call themselves "Android TV" without being built on Android TV OS.
- **An Android version that's several years old**, especially Android 9 to 12, the range the EFF found most often.
- **Instructions to turn off Play Protect** or to install apps from an alternative store. The FBI lists both.
- **Specs that don't match the price.** 8K, 128 GB and the "latest Android" for $35 usually means some of it isn't true.
- **Offers of money for sharing your internet connection.** McAfee warns about these apps, which do with your consent what the backdoor does without it: route strangers' traffic through your home as a proxy.

## Quick answers

**Is my brand on the list?** Only Videostrong, the manufacturer behind MECOOL, is named in the reporting. Synthient's model list (linked from McAfee's guide) is the closest thing to a checklist, but there's no complete public list of affected brands, so run the five-minute check whatever your brand.

**My box is certified and from a big brand. Do I need to do anything?** Keep it updated, leave Play Protect on and install apps only from the Play Store. That's enough for most people.

**Can antivirus apps clean it?** Not reliably. The backdoor runs with system-level privileges, above anything an ordinary app can touch.

**Is it safe to keep using it offline?** An unplugged box can't do much harm, but a streaming box without internet isn't much use, so this is really a temporary measure.

## The takeaway

The cheap box's price was never the whole price. With a backdoored box, the rest gets paid later, in bandwidth and accounts, to people you never agreed to deal with.

Tonight, pick up the remote, open the Play Store on the box and find the Play Protect certification line. It won't settle everything on its own, but if it says "not certified," you already know enough to start the steps above. Then think about who else has one: if you set up a no-name box for your parents or a friend, it's worth a phone call this week to walk them through the same check. A replacement from a big company costs more, but its maker has a reason to keep it clean.
