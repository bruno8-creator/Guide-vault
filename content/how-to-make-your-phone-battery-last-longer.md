---
title: How to make your phone battery last longer, by the evidence
description: What actually wears out a phone battery, which charging myths to ignore, the iPhone and Android settings that help, and when a replacement makes sense.
category: tech
date: 2026-10-31
author: Guide Market
cover: https://images.unsplash.com/photo-1557767382-97b28f5488e7
coverAlt: A black smartphone lying face up on a grey textured desk with a white charging cable plugged in.
coverCredit: Andreas Haslinger / Unsplash
coverPage: https://unsplash.com/photos/black-smartphone-with-charger-cord-connected-W9Z87k4hV08
---
Two years ago your phone got through a full day with a third of its charge to spare. Now it is asking for a charger by mid-afternoon, and the battery health screen shows a number in the low 80s. Somewhere along the way you probably picked up a handful of rules: never charge overnight, swipe every app closed, run it down to zero once a month so it "remembers" its capacity.

Most of those rules are either outdated or wrong. A lithium-ion battery does wear out, and you can slow that wear down, but the levers that matter are few and fairly boring: heat, how long the battery sits at a very high charge, and how many cycles it goes through. Everything else is a rounding error.

This guide covers what battery research and the phone makers' own documentation say about ageing, which habits make a measurable difference, the specific settings on iPhone, Pixel and Samsung phones that do the work for you, and how to tell when the honest answer is a new battery rather than another tweak.

>> **In short:**
>> - Heat is the biggest enemy. Apple says ambient temperatures above 35°C (95°F) can permanently reduce capacity, and lab data shows a full battery kept at 40°C loses far more capacity than one kept cool.
>> - Sitting at 100% for hours is the second. Turn on your phone's charging optimisation or an 80% charge limit and stop worrying about overnight charging.
>> - Closing apps, draining to 0% and "calibrating" do not protect the battery. Some of them waste energy.
>> - When battery health drops near 80% and the phone no longer lasts the day, a replacement is usually cheaper than a new phone.

## What actually happens inside an ageing battery

A phone battery is a lithium-ion cell: lithium ions shuttle between two electrodes through an electrolyte as you charge and discharge. Each trip causes a little chemical damage. Some lithium gets locked into a film on the electrode surface, the electrolyte slowly breaks down, and the materials themselves crack and shift. The result is a cell that holds less charge and delivers it less readily, especially when the phone suddenly asks for a burst of power.

Three conditions speed that damage up, and they compound each other.

**Temperature.** Chemical reactions run faster when warm, including the unwanted ones. Apple describes 16°C to 22°C (62°F to 72°F) as the ideal comfort zone for its devices and warns that ambient temperatures above 35°C can permanently damage battery capacity, according to its [battery performance page](https://www.apple.com/batteries/maximizing-performance/). Google's Pixel help pages make a related point: a hot battery drains much faster even when the phone is idle ([Google Pixel Help](https://support.google.com/pixelphone/answer/6090612?hl=en)).

**High state of charge.** A cell held near full is under more chemical stress than one held in the middle of its range. This is why every major phone maker now ships a feature that delays or caps the last stretch of charging.

**Cycles.** Every full charge-discharge equivalent (two half charges count as one cycle) adds wear. Apple says batteries in iPhone 14 models and earlier are designed to retain 80% of their original capacity at 500 complete charge cycles, and iPhone 15 models at 1,000 cycles, under ideal conditions ([Apple battery service page](https://www.apple.com/batteries/service-and-recycling/)). That doubling is a real engineering gain, but note the qualifier: "ideal conditions" means a phone that is not regularly baked or left full.

You cannot avoid cycles if you use your phone. You can do a lot about the first two.

## The data: heat and a full charge are a bad combination

The clearest public illustration of how temperature and charge level interact comes from Battery University, the long-running technical reference published by battery maker Cadex Electronics. Its table of estimated recoverable capacity after a year of storage shows the pattern starkly.

```chart
type: bar
title: Estimated Li-ion capacity left after one year of storage, by temperature and charge level (%)
unit: %
source: Battery University, BU-808 Table 3 | https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries
note: Estimates published by Battery University. The 60°C at 100% figure (60%) is after only three months, so it is left out here.
0°C, 40% charge: 98
0°C, 100% charge: 94
25°C, 40% charge: 96
25°C, 100% charge: 80
40°C, 40% charge: 85
40°C, 100% charge: 65
60°C, 40% charge: 75
```

Read across a single temperature and the effect of charge level jumps out. At a comfortable 25°C, a cell stored at 40% keeps an estimated 96% of its capacity after a year, while one stored full keeps 80%. Push the temperature to 40°C, which a phone easily reaches on a car dashboard or under a pillow while charging, and the full battery drops to an estimated 65%.

Two caveats keep this honest. These are storage figures, not a model of daily use, and they are estimates for generic lithium-ion cells rather than any specific phone. Modern phones also have charge controllers that will not let the cell sit at the most extreme states. Still, the direction is consistent with what manufacturers themselves say, and it explains why the useful advice clusters around two ideas: keep the phone cool, and don't park it at 100%.

![A pink phone with stickers lying in a car's centre console beside sunglasses, a typical spot where phones get hot](https://images.unsplash.com/photo-1760164142126-07f40f29785d)
*A car console or dashboard in summer is one of the quickest ways to cook a battery. Photo: Katya Azimova / [Unsplash](https://unsplash.com/photos/phone-and-sunglasses-in-a-car-console-iZ6sCkrzEIM)*

### Where phones actually get hot

The serious heat exposure rarely comes from normal use. It comes from a handful of situations most people repeat without thinking:

- Charging under a pillow, a duvet or in a thick case, which traps the heat that charging itself produces. Apple specifically notes that charging inside certain styles of case may generate excess heat and suggests taking the phone out of the case first if it gets hot ([Apple](https://www.apple.com/batteries/maximizing-performance/)).
- Leaving it in a parked car, on a sunny windowsill or on a beach towel.
- Using it as a satnav on a windscreen mount with fast charging and the screen at full brightness, all at once.
- Long gaming or video-recording sessions while plugged in.

The fix is mostly behavioural. Charge on a hard surface with some air around it, take a thick case off if the phone feels warm while charging, and keep it out of direct sun. For summer navigation, a mount that keeps the phone out of direct sun, ideally in the stream from the air conditioning (not the heater), is gentler than one stuck to a sunlit windscreen.

## Myths that refuse to die

Plenty of battery folklore dates from the era of nickel-cadmium and nickel-metal-hydride batteries, which really did suffer from a "memory" effect. Lithium-ion behaves differently, and some old habits now do more harm than good.

| Myth | What the evidence says | What to do instead |
|---|---|---|
| Charging overnight ruins the battery | The phone stops charging when full, but sitting at 100% for hours adds stress. Built-in optimisation features hold the charge lower until shortly before you usually unplug. | Charge overnight with Optimised/Adaptive Charging or a charge limit switched on. |
| You should drain to 0% before recharging | Deep discharges add more wear per cycle than shallow ones. Battery University's estimates show far more cycles at shallow depths of discharge. | Top up whenever convenient. Partial charges are fine. |
| Closing apps saves battery | Apple says you should force-close an app only if it is unresponsive. Relaunching from scratch can cost more energy than resuming. | Leave apps alone; restrict background activity for the few that misbehave. |
| Fast charging destroys batteries | Phones manage charging speed and slow down near full. Heat is the real risk, and fast charging adds heat. | Fast charging is fine day to day; use a slower charger overnight if you like, and avoid charging in hot conditions. |
| You must "calibrate" monthly by running it flat | Calibration only affects how accurately the percentage is estimated. Pixel phones handle it themselves by fully charging every tenth cycle. | Let the phone do it. Don't run it to empty on purpose. |
| Third-party "battery saver" apps help | The operating system already controls background work more tightly than any app can. | Use the built-in settings in this guide. |

### Overnight charging, specifically

This is the most searched question, so here is a straight answer. Plugging in at bedtime is not dangerous and will not "overcharge" the cell; the phone's charging circuit stops at full. The cost is that, without help, the battery then sits at or near 100% for six or seven hours, which is precisely the condition the storage data penalises.

That is the problem charging optimisation solves. On an iPhone, Optimized Battery Charging uses on-device learning to predict when you'll unplug, holds the charge lower for most of the night, and aims to have the phone fully charged by the time you pick it up ([Apple Support](https://support.apple.com/en-us/108055)). Pixel's Adaptive Charging does something similar after about 14 days of learning your routine ([Google Pixel Help](https://support.google.com/pixelphone/answer/6090612?hl=en)). With those on, overnight charging is a non-issue.

### Shallow cycles beat deep ones

The "drain it to zero" habit gets the chemistry backwards. Battery University publishes estimated cycle counts for cells discharged to different depths before recharging. The numbers below are for NMC cells, a common lithium-ion chemistry, and the source presents them as approximate.

```chart
type: column
title: Estimated discharge cycles by depth of discharge, NMC lithium-ion cells
source: Battery University, BU-808 Table 2 | https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries
note: Battery University gives these as approximate values (~). Depth of discharge is how much of the full capacity is used before recharging.
100%: 300
80%: 400
60%: 600
40%: 1000
20%: 2000
10%: 6000
```

Read these carefully. A cycle at 20% depth uses only a fifth of the battery, so 2,000 of them deliver less total energy than the raw count suggests. Even so, five shallow 20% top-ups (one full cycle's worth of energy) are estimated to cause less wear than a single run from 100% to empty. The practical message is reassuring: charging little and often, at your desk or in the car, is fine and probably better than the all-or-nothing approach.

>> **Common mistake:** obsessing over keeping the battery between 20% and 80% by hand. The gains are real but modest, and the effort usually lasts a week. Turn on your phone's built-in charge limit or optimisation once and let it do the work every night without you.

## The settings that actually help, on iPhone and Android

Settings fall into two groups. Some protect the battery's long-term health; others stretch how long a charge lasts today. Both matter, but the first group is where most people leave value on the table. Menu names below were checked on official support pages at the time of writing; they shift between software versions, so if a path doesn't match, search the Settings app for the feature name.

### Settings that protect battery health

**iPhone.** On iPhone 15 and later, go to Settings > Battery > Charging. You can set a charge limit between 80% and 100% in 5% steps; Apple says the phone charges to within a few percentage points of the limit and occasionally charges to 100% to keep its battery estimates accurate. Optimized Battery Charging is available only when the limit is set to 100%. On iPhone 14 and earlier, the path is Settings > Battery > Battery Health & Charging, where you can switch Optimized Battery Charging on or off ([Apple Support](https://support.apple.com/en-us/108055)).

**Google Pixel.** Go to Settings > Battery > Battery health > Charging optimisation. You can choose Adaptive Charging, which learns your schedule, or Limit to 80%, which Google says is available on Pixel 6a and later and suits people who usually end the day with some charge left. Even with the limit on, the phone fully charges every tenth cycle to keep its capacity readings accurate, and Google suggests leaving it plugged in for at least 30 minutes after it reaches 100% ([Google Pixel Help](https://support.google.com/pixelphone/answer/6090612?hl=en)).

**Samsung Galaxy.** Samsung's support page describes a Protect battery option under Settings > Battery, off by default, that pauses charging at 85% and shows a "Charging paused" notice when it does ([Samsung Support](https://www.samsung.com/in/support/mobile-devices/battery-protection-feature-in-samsung-galaxy-phones/)). Newer One UI versions split this into several protection modes, including an adaptive one that holds the charge back while you sleep; the exact names and limits vary by model and software version, so check the Battery menu on your own phone.

Other Android makers have similar features under different names. Look in the battery section of Settings for words like "optimised charging", "battery protection" or "charge limit".

### Settings that stretch a single charge

The screen is usually the largest single power draw, so it is the first place to look. Apple recommends dimming the screen or turning on Auto-Brightness, and Google recommends adaptive brightness, Dark theme and a shorter screen timeout such as 30 seconds ([Apple](https://www.apple.com/batteries/maximizing-performance/), [Google Pixel Help](https://support.google.com/pixelphone/answer/6090612?hl=en)). Dark theme helps most on OLED screens, which now cover almost every mid-range and flagship phone, because black pixels are switched off.

Background activity is the second lever. On iPhone, Background App Refresh lives in Settings > General > Background App Refresh ([Apple Support](https://support.apple.com/en-us/HT202070)); Apple lists turning it off for apps that don't need it as a way to save power. On Pixel, Adaptive Battery (Settings > Battery > Battery Saver > Adaptive Battery, on by default) learns which apps you use and limits the rest. You can also set individual apps to "Optimized" background usage under Settings > Apps ([Google Pixel Help](https://support.google.com/pixelphone/answer/7015477?hl=en)).

Location is the third. Apps that track you constantly keep GPS and radios busy.

![A hand holding a smartphone showing a compass app against a desert scene at sunset](https://images.unsplash.com/photo-1760991655905-ee03390b7fec)
*Navigation and location-heavy apps keep GPS working constantly; give them access only while you use them. Photo: Robert Penaloza / [Unsplash](https://unsplash.com/photos/hand-holding-phone-with-compass-app-in-desert--2vcy9sRr0U)*

On iPhone, review apps under Settings > Privacy & Security > Location Services ([Apple Support](https://support.apple.com/en-us/102515)) and switch most to "While Using the App" or "Never". On Android, the equivalent is Settings > Location > App location permissions, where you can pick "Allow only while using the app" or "Don't allow" ([Android Help](https://support.google.com/android/answer/6179507?hl=en)). A weather widget does not need your precise position every few minutes.

Finally, connectivity. Apple notes that Wi-Fi generally uses less power than a cellular connection, so stay on Wi-Fi when it is available. In places with weak signal, the phone burns energy hunting for a tower; if you're somewhere with no useful coverage, Airplane Mode with Wi-Fi switched back on can save a surprising amount.

| Goal | iPhone (path at the time of writing) | Google Pixel (path at the time of writing) |
|---|---|---|
| Limit or delay full charge | Settings > Battery > Charging (iPhone 15+); Battery Health & Charging (iPhone 14 and earlier) | Settings > Battery > Battery health > Charging optimisation |
| Emergency battery stretch | Low Power Mode (Settings > Battery) | Battery Saver (Settings > Battery > Battery Saver) |
| Restrict background apps | Settings > General > Background App Refresh | Adaptive Battery; per-app "Optimized" background usage |
| Screen | Auto-Brightness, Dark Mode | Adaptive brightness, Dark theme, 30-second timeout |
| Location | Settings > Privacy & Security > Location Services | Settings > Location > App location permissions |
| Check battery health | Settings > Battery > Battery Health (path varies by model) | Settings > Battery > Battery health (supported models) |

>> **Tip:** Low Power Mode and Battery Saver are not just for emergencies. Apple says Low Power Mode reduces display brightness, optimises performance and minimises system animations. If you have a long day ahead with no charger, switch it on in the morning rather than at 15%.

## What not to bother with

Some popular advice is technically true but saves too little to justify the friction. Toggling Bluetooth off while your watch or earbuds are connected is one example; manually killing apps, as above, is another, and "battery doctor" apps are pointless at best. A battery is a consumable part, like the tyres on a car. The aim is not to keep it pristine forever, but to avoid needless wear and then replace the battery once rather than the whole phone.

## How to check your battery health

Before changing anything, look at where you stand.

**iPhone** shows a Maximum Capacity percentage, measured relative to when the battery was new, and a message if the battery has significantly degraded. On iPhone 15 and later it also shows the cycle count. Apple's [battery and performance page](https://support.apple.com/en-us/101575) explains how to read it, including that a peak performance capability message appears if the phone has had unexpected shutdowns and performance management has been applied.

**Pixel** phones from the Pixel 8a onwards show an estimate of remaining capacity compared with the original under Settings > Battery > Battery health > Battery capacity. Google labels the status "Reduced" once capacity falls below 80%, and says older models such as the Pixel 7 and Pixel 8 do not show a battery health status ([Google Pixel Help](https://support.google.com/pixelphone/answer/15738128?hl=en)).

**Samsung** and other Android phones vary widely. Some show a battery condition in Settings or in the maker's support app; others show nothing useful, in which case your own sense of how long a charge lasts is the best gauge.

A reading in the high 90s on a phone that is a year old is normal. A reading near 80% after two or three years is also normal. Numbers fall faster in the first months and then level off a little, so do not panic about an early dip.

## When it's time to replace the battery

There is no single magic number, but two signals together are a good rule of thumb: battery health at or below about 80%, and a phone that no longer gets you through a typical day. Apple uses 80% as its own line. Its AppleCare+ coverage replaces the battery at no extra charge if capacity drops below 80% ([Apple battery repair page](https://support.apple.com/iphone/repair/battery-replacement)). Apple's standard one-year warranty, by contrast, does not cover batteries that wear out through normal use.

Other symptoms are worth taking seriously even above 80%: the phone shutting down at 20% or 30%, slowing noticeably in the cold, getting hot while idle, or a case that no longer closes properly. That last one can mean the battery is swelling, which should be dealt with promptly by a repair shop rather than ignored.

![A pile of old mobile phones, from button-keypad handsets to modern touchscreen smartphones](https://images.unsplash.com/photo-1560209617-059c0bd661ba)
*Many phones end up in a drawer because of a tired battery. A replacement is often the cheapest upgrade available. Photo: Eirik Solheim / [Unsplash](https://unsplash.com/photos/assorted-color-phone-lot-mWTOR3Rx8l8)*

### What a replacement costs

Prices change and depend on model and country, so always check the official estimate before booking. For iPhones, Apple's [repair estimator](https://support.apple.com/iphone/repair/battery-replacement) gives the current out-of-warranty fee for your model; Apple says fees may be subject to tax and are confirmed after inspection. For reference, when Apple published fees for the iPhone 16 line in September 2024, MacRumors [reported](https://www.macrumors.com/2024/09/15/iphone-16-pro-battery-replacement-fee/) US prices of $119 for iPhone 16 Pro and Pro Max, $99 for iPhone 14, 15 and 16 models, and $89 for iPhone 13 models. Treat those as a historical guide rather than today's price.

For Pixel and Galaxy phones, Google and Samsung route repairs through their own support sites and authorised partners, and quotes vary by model and region. Start from the repair section of Google's Pixel Help centre or Samsung's support site for your country, and get a quote for your exact model.

Seen against the price of a new mid-range or flagship phone, a battery swap is usually the better deal if the rest of the phone still does what you need and still receives software updates. If your phone is out of security update support, that changes the calculation: a fresh battery will not fix the security gap.

>> **Worked example:** your iPhone 13 is three years old, battery health reads 79%, and it dies by 4pm. A battery replacement at Apple's out-of-warranty fee (check the estimator for today's price) costs a fraction of a new phone and should restore close to a full day of use. If the phone is otherwise fine and still getting updates, that is the sensible first move.

## Your battery-care checklist

Do these once, then forget about them:

1. Turn on Optimized Battery Charging or a charge limit (iPhone), Adaptive Charging or Limit to 80% (Pixel), or Protect battery or its newer equivalent (Samsung).
2. Switch on Auto-Brightness or adaptive brightness, and Dark Mode if your phone has an OLED screen.
3. Set screen timeout to 30 seconds or one minute.
4. Review Location Services and move most apps to "While Using" or "Never".
5. Turn off Background App Refresh (iPhone) or set background usage to Optimized (Android) for apps that don't need to update constantly.
6. Note your current battery health so you can track it over the coming months.

Then build three habits:

1. Keep the phone out of heat: no dashboards, no charging under pillows, take thick cases off if it gets warm on the charger.
2. Top up whenever convenient instead of running down to empty.
3. Leave apps alone unless one is frozen.

If you are putting a phone away for months, Apple's advice is to store it powered off, in a cool and dry place, at around 50% charge, and to top it back up to about 50% every six months.

## Frequently asked questions

### Is it bad to charge my phone overnight?

Not if charging optimisation is on. The phone stops charging when full, but without help it then sits near 100% for hours, which adds wear. Optimized Battery Charging (iPhone) and Adaptive Charging (Pixel) hold the charge lower for most of the night and finish shortly before you usually unplug; a fixed limit such as Samsung's Protect battery simply stops short of full.

### Should I keep my phone between 20% and 80%?

Staying away from both extremes does reduce wear, but doing it by hand is rarely worth the effort. A built-in 80% or 85% limit gets you most of the benefit automatically. If you need the full capacity on long days, use optimised charging instead and accept slightly faster ageing.

### Does closing apps save battery?

Generally no. Apple's own support page says you should close an app only if it's unresponsive. The operating system already suspends background apps, and relaunching them from scratch can use more energy. Restrict background activity for specific apps that drain the battery instead.

### Does fast charging damage the battery?

Fast charging produces more heat, and heat is what ages batteries, but phones regulate charging speed and slow down as they approach full. For everyday use, fast charging is fine. If the phone gets hot on the charger, remove the case and charge somewhere cooler.

### What battery health percentage means I need a new battery?

There is no exact cut-off, but around 80% is the common benchmark: Apple's AppleCare+ replaces batteries below 80% capacity. If health is near that level and the phone no longer lasts your day, a replacement is worth pricing.

## The takeaway

The evidence points to a short list. Keep your phone cool, especially while charging. Let the built-in charge limit or charging optimisation stop it from sitting at 100% all night. Top up whenever it suits you rather than draining to zero, and stop closing apps. Those few changes slow the ageing that matters, and the settings take about five minutes to switch on.

After that, the remaining question is economics, not chemistry. Every lithium-ion battery fades, and when yours reaches about 80% and no longer gets you through the day, price a replacement before you price a new phone.
