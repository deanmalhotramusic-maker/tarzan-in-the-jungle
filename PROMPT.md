# Tarzan in the Jungle — Build Prompt

Build a browser game called **"Tarzan in the Jungle"** — an open-world, GTA-style free-roam adventure set in a dense jungle instead of a city. Use React + TypeScript + Vite, with **Phaser 3** for the game engine (2D side-scrolling with a large, explorable world) and Tailwind for menus/HUD. It must run smoothly at 60 fps in desktop browsers and be playable on mobile with on-screen touch controls.

## Story
Tarzan was raised by apes after being orphaned deep in the jungle. Now grown, he roams his home freely — hunting for food, avoiding predators, swinging through the canopy, and uncovering the jungle's secrets, including ancient caves guarded by monsters. Show a short illustrated intro (3–4 panels with text, skippable) before the game starts.

## Core gameplay
- **Open world:** one large, continuous jungle map (at least 8–10 screens wide, with vertical layers: forest floor, mid-branches, and treetop canopy). The player can go anywhere in any order — no forced path. Include distinct zones: Riverbank, Dense Forest, Ape Village (safe home base), Swamp, Rocky Cliffs, and the Ancient Ruins.
- **Movement:** run, jump, climb vines/trunks, crouch, and **vine swinging** — the signature mechanic. Tarzan grabs a vine, swings with real pendulum physics (momentum builds with left/right input), and releases to fly to the next vine or tree. Chaining swings without touching the ground builds a **Swing Combo** multiplier for bonus points.
- **Combat:** punch/kick combo, a throwable spear (limited, recoverable), and a dodge roll. Simple hit-flash and knockback feedback.
- **Hunting:** small animals (rabbits, wild boar piglets, birds, fish in the river) can be hunted for food. They flee when Tarzan gets close, so stealth matters.

## Enemies (they attack Tarzan)
- **Snakes** — hide in grass/branches, quick poison bite (damage over time).
- **Lizards / Monitor lizards** — fast ground runners.
- **Hyenas** — roam in packs of 2–4, circle and flank.
- **Crocodiles** — lurk in the river and swamp.
- **Angry monkeys** — throw fruit/rocks from trees.
Enemies have simple AI states: idle/patrol → notice (a "!" icon) → chase/attack → lose interest.

## Real-world sync (time & weather)
The jungle mirrors the player's real world, live:
- **Real time of day:** use the device's local clock (`new Date()`), not an in-game timer. Map the actual time to the sky: dawn (around sunrise), morning, midday, golden-hour evening, dusk, and night. Use the player's real **sunrise/sunset times** for their location so dawn and dusk land exactly when they do outside. Lighting, sky gradient, sun/moon position, and stars update smoothly every minute. If it's 7am for the player, it's 7am-morning light in the jungle; at 11pm it's dark night.
- **Real weather:** ask for location permission (browser Geolocation API), then fetch live conditions from the free **Open-Meteo API** (`https://api.open-meteo.com/v1/forecast?latitude=..&longitude=..&current=temperature_2m,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,is_day&daily=sunrise,sunset&timezone=auto`, no API key needed). Refresh every 10–15 minutes. Map conditions to the game:
  - Clear → sunny jungle with light rays through leaves
  - Cloudy → dimmer, grey-green light
  - Rain / drizzle → rain particles, puddles, dripping leaves, rain sounds, slippery vines (swing grip is weaker)
  - Thunderstorm → heavy rain, lightning flashes and thunder; lightning can strike tall trees
  - Fog / mist → reduced visibility, enemies harder to spot
  - Snow (rare) → turned into cold mist/hail in the jungle
  - Wind → trees and vines sway harder, swings carry further
  - **Real temperature** drives the in-game cold: a cold real night means Tarzan gets cold in the game.
- Show a small weather widget in the HUD (icon + real temperature + "Live: your location"). If location is denied or offline, fall back to the device's time with randomized weather, and say so in the widget.
- Weather and time affect gameplay: animals sleep or hide in the rain, nocturnal predators (hyenas, snakes) come out at night, some fruits only appear in the morning, and fireflies at night reveal hidden items.

## Survival needs (like a real life sim)
Tarzan has needs that drain in real time and must be managed to survive:
- **Hunger** — drains steadily; he must eat fruit and **hunt** animals to survive. Raw meat fills more if cooked on a fire. Starving drains health.
- **Thirst** — drink from the river, waterfalls, or catch rainwater (faster when it's actually raining).
- **Bathroom** — a bladder/bowel meter fills after eating and drinking. When it's full, Tarzan must go: find a private bush and press E for a quick, family-friendly bathroom break (a bush rustles, a short comic sound, and a "Relieved!" pop-up). Ignoring it slows him down and makes him unable to sprint or hide well.
- **Warmth** — on cold nights (based on the real temperature) and in the rain, a warmth meter drops. Tarzan must **build a fire**: gather sticks and dry leaves, then strike flint rocks to light it. Fires keep him warm, cook meat, scare predators away, and go out in heavy rain unless built under shelter (caves, big leaf canopies). Freezing drains health.
- **Energy / sleep** — drops over the day; sleep in the Ape Village nest, a tree hut, or by a fire to restore it. Sleeping in the open at night is risky (enemy ambush).
- All meters are shown as small icons in the HUD that flash when low, with a gentle warning ("Tarzan is hungry", "Tarzan is cold — build a fire").

## Survival & points
- **Health bar** plus the survival meters above. Any meter at zero slowly drains health.
- **Food:** bananas (+small health), apples (+medium health), meat from hunting (+large hunger refill).
- **Special fruits** (rare, glowing, hidden in hard-to-reach places): Golden Mango (+big score), Blue Jungle Berry (temporary speed boost), Red Fire Fruit (temporary super strength), Star Fruit (full heal).
- **Score** from collecting fruit, hunting, defeating enemies, swing combos, and discovering new zones.

## Stealth & hiding spots
- Tall grass, hollow logs, bushes, and dense leaf canopy act as **hiding spots**. While hidden, enemies lose track of Tarzan and a "Hidden" eye icon appears in the HUD. Hunting from a hiding spot gives a sneak-attack bonus.

## Levels inside the open world (mini-dungeons)
Scattered across the map are entrances that load special challenge levels, then return Tarzan to the world:
1. **Bat Cave** — dark cave lit only around Tarzan; dodge bats, then fight the **Giant Cave Spider** boss.
2. **Serpent's Lair** — under the swamp; climb shifting platforms and defeat the **King Cobra** boss.
3. **Waterfall Grotto** — hidden behind a waterfall; puzzle with pushable boulders and timed vines, ending with a **Stone Golem** boss.
4. **Ancient Ruins Temple** (final, unlocked after the first three) — traps, rolling logs, and the final boss: **the Jungle Shadow Beast**.
Each boss has a health bar, 2–3 attack patterns, and a clear weak-spot tell. Beating a boss grants a permanent upgrade (extra health, stronger punch, longer swing reach, or a call-the-apes ability that summons ape allies for a few seconds).

## Extra creative features
- **Tarzan's jungle yell** (press Y / button) — scares off small enemies nearby, with a cooldown.
- **Ape Village home base:** restores health, saves progress, and an ape elder gives optional side quests ("Bring 5 bananas", "Defeat the hyena pack near the river", "Find the lost baby ape").
- **Mini-map** in the corner showing explored areas, cave entrances, and quest markers; a full map on M.
- **Animal friends:** later, Tarzan can befriend an elephant (ride to cross rivers) and a parrot that points toward hidden special fruits.

## HUD & UI
- Top-left: health bar, survival meters (hunger, thirst, bathroom, warmth, energy), active power-up icons with timers.
- Top-right: score, swing combo counter, mini-map, real-time clock, and live weather widget.
- Main menu: Play, Continue, Controls, Settings (volume, difficulty: Easy/Normal/Hard).
- Pause menu, game-over screen (score summary + retry), and a victory screen after the final boss.
- Save progress (score, upgrades, bosses beaten, quests, explored map, survival meters) in localStorage.

## Controls
- **Keyboard:** A/D or ←/→ move, W/↑ climb, Space jump / grab vine / release, S/↓ crouch & hide, J punch, K throw spear, L dodge, E eat/interact, Y jungle yell, M map, Esc pause.
- **Mobile:** virtual joystick on the left, action buttons (Jump, Attack, Spear, Interact, Yell) on the right.

## Art & audio style
- Bright, colorful, hand-drawn cartoon style with parallax background layers (distant mountains, mid trees, foreground leaves) for depth. Use simple generated shapes/sprites or free placeholder art that can be swapped later; keep all assets in `/public/assets` organized by type.
- Tarzan: muscular, long dark hair, loincloth, expressive animations (idle, run, jump, swing, climb, punch, hurt, eat).
- Ambient jungle sounds (birds, insects, river), upbeat tribal-drum music that intensifies during combat and boss fights, and satisfying sound effects for swinging, eating, and hits. Include a mute toggle.

## Code structure
- Separate Phaser scenes: `BootScene`, `MenuScene`, `IntroScene`, `WorldScene`, `CaveScene` (reused per dungeon with config), `BossScene`, `UIScene` (HUD overlay), `GameOverScene`.
- Entity classes for `Player`, `Enemy` (with subclasses per animal), `Prey`, `Collectible`, `Boss`.
- Game data (enemy stats, fruit effects, level configs, quests) in typed config files so it's easy to tweak and extend.
- Add a `README.md` explaining how to run, the controls, and how to add new enemies, fruits, or levels.

Start by building a playable first version: the open jungle world with vine swinging, bananas/apples/special fruits, real-time day/night and live weather, health and all survival meters (hunger, thirst, bathroom, warmth, energy), hunting, fire-building, snakes and hyenas, hiding in tall grass, the HUD, and the **Bat Cave** level with its spider boss. Then expand with the remaining zones, dungeons, and features.
