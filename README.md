# Tarzan in the Jungle

An open-world jungle survival game that runs in the browser. Tarzan, raised by apes, roams the jungle: swinging on vines, hunting to survive, building fires on cold nights and fighting the monster in the Bat Cave.

The jungle follows the real world: the time of day comes from your device's clock, dawn and dusk match your real sunrise and sunset, and the weather comes live from [Open-Meteo](https://open-meteo.com) (no API key needed) using your location.

## Play

Open `index.html` in a browser, or turn on GitHub Pages for this repo (Settings → Pages → Deploy from branch `main`, folder `/`). Live weather needs the page to be served over https and the player to allow location; without it the game uses your time zone and lets you set the weather yourself.

## Controls

| Key | Action |
| --- | --- |
| A / D or ← / → | Run, or pump a vine swing |
| W / ↑ | Climb a trunk, or climb up a vine |
| Space | Jump; let go of a vine (touch a vine mid-air to grab it) |
| S / ↓ | Crouch; hide in tall grass, bushes or logs |
| ↓ + Space | Drop through a branch |
| J | Punch |
| K | Throw spear |
| L | Dodge roll |
| E | Use: eat, drink, cook, talk, bathroom, enter cave |
| F | Build a fire (3 sticks + flint) |
| Z | Sleep by a fire or in the Ape Village nest |
| Y | Jungle yell |
| M | Map |
| Esc / P | Pause |

Phones and tablets get on-screen buttons.

## What's in this version

- Six zones: Ape Village, Dense Forest, Riverbank, Swamp, Rocky Cliffs, Ancient Ruins
- Vine swinging with pendulum physics and swing combos
- Survival meters: food, water, bathroom, warmth, energy
- Hunting (rabbits, piglets), cooking on fires, drinking at the river and waterfall
- Enemies: snakes, lizards, hyena packs, crocodiles, rock-throwing monkeys
- Real-time sky, real sunrise/sunset, live weather (rain, storms with lightning, fog, wind, cold)
- Special fruits: Golden Mango (mornings only), Star Fruit (nights only), Blue Jungle Berry, Red Fire Fruit
- Bat Cave with the Giant Cave Spider boss
- Quests from Elder Kerchak, mini-map, saves in the browser

Coming next: Serpent's Lair, Waterfall Grotto and the Ancient Ruins Temple (their entrances are already in the world, sealed).

## Code

Everything is in `index.html`: plain JavaScript and Canvas, no build step. `PROMPT.md` is the full design prompt the game was built from.
