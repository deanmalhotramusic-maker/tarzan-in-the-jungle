# Tarzan in the Jungle

A 3D open-world jungle survival game that runs in the browser, on desktop and phones. Tarzan, raised by apes, roams the jungle: swinging on vines, hunting to survive, building fires on cold nights and fighting the monster in the Bat Cave.

The jungle follows the real world: the time of day comes from your device's clock, dawn and dusk match your real sunrise and sunset, and the weather comes live from [Open-Meteo](https://open-meteo.com) (no API key needed) using your location.

## Play

Open `index.html` in a browser, or turn on GitHub Pages for this repo (Settings → Pages → Deploy from branch `main`, folder `/`). Live weather needs the page to be served over https and the player to allow location; without it the game uses your time zone and lets you set the weather yourself.

## Controls

| Desktop | Phone | Action |
| --- | --- | --- |
| W A S D | Left joystick | Move in any direction |
| Mouse drag, wheel | Drag the right side of the screen | Look around, zoom |
| Space | Jump | Jump; jump into a vine to grab it, Jump again to let go |
| W / S / A / D on a vine | Joystick on a vine | Swing higher, slow down, steer |
| C | Crouch | Crouch; hide in tall grass, bushes or logs |
| J | Hit | Punch |
| Q or right mouse (hold) | Hold Spear | Aim: over-the-shoulder view, crosshair and throw arc, with light aim assist |
| K or left click while aiming | Release Spear | Throw the spear at the crosshair |
| L | Roll | Dodge roll |
| E | Use | Climb trees (hand over hand, circle the trunk, pull up onto the deck), grab a branch from the trunk, eat, drink, cook, talk, bathroom, enter cave |
| A / D while hanging | Joystick while hanging | Move hand over hand along a branch; push forward to swing, Jump to let go, Crouch to drop |
| F | Fire | Build a fire (3 sticks + flint) |
| Z | Sleep | Sleep by a fire or in the Ape Village nest |
| Y | Yell | Jungle yell |
| M | Map | Map |
| Esc / P | Pause | Pause |

## What's in this version

- Full 3D third-person world: realistic lighting with soft shadows, a sky with moving clouds, reflective water, textured ground and bark, wind-blown grass, leafy trees, palms, ferns, flowers, birds and butterflies
- A realistic animated Tarzan (idle, walk, jog, sprint, jump, punches, roll, crouch, swim and more) with long hair
- Animated 3D animals (wolf-style hyenas and deer) and photo-scanned ground, bark and rock textures, lit by a real rainforest sky image (Medium and High)
- Graphics setting (Auto / Low / Medium / High) in Settings; Auto lowers itself if a phone struggles
- Six zones: Ape Village, Dense Forest, Riverbank, Swamp, Rocky Cliffs, Ancient Ruins
- Vine swinging with pendulum physics and swing combos
- Branches between trees to hang from and travel hand over hand, with a swinging body and trailing legs
- Hand-built animals with patterned skin, scales and fur: slithering snakes, crocodiles, monkeys, lizards, rabbits, bats, spiders and gorilla elders
- Glowing, blinking fireflies at night; butterflies with patterned wings, parrots and dragonflies by day
- Water ripples and splashes, landing dust and footsteps
- Survival meters: food, water, bathroom, warmth, energy
- Hunting (rabbits, piglets), cooking on fires, drinking at the river and waterfall
- Enemies: snakes, lizards, hyena packs, crocodiles, rock-throwing monkeys
- Real-time sky, real sunrise/sunset, live weather (rain, storms with lightning, fog, wind, cold)
- Special fruits: Golden Mango (mornings only), Star Fruit (nights only), Blue Jungle Berry, Red Fire Fruit
- Bat Cave with the Giant Cave Spider boss
- Quests from Elder Kerchak, mini-map, saves in the browser

Coming next: Serpent's Lair, Waterfall Grotto and the Ancient Ruins Temple (their entrances are already in the world, sealed).

## Install as an app

Open the game link on your phone. Android (Chrome): tap **Install app**. iPhone (Safari): Share → **Add to Home Screen**. It runs full screen and works offline.

## Code

Everything is in `index.html`: plain JavaScript with [three.js](https://threejs.org) for 3D, no build step. `classic.html` is the original 2D side-scrolling version. `PROMPT.md` is the full design prompt the game was built from.

## Credits

All third-party assets are CC0 (public domain):

- Tarzan's body, hair and animations (`models/tarzan_*.glb`): [Quaternius](https://quaternius.com), Universal Base Characters and Universal Animation Library

- 3D animal models and animations (`models/wolf.glb`, `models/deer.glb`): [Quaternius](https://quaternius.com), Ultimate Animated Animal Pack
- Photo-scanned textures (`textures/grass*`, `mud*`, `rock*`, `bark*`): [Poly Haven](https://polyhaven.com) — Leafy Grass, Brown Mud Leaves 01, Rock Face, Bark Brown 02
- Sky lighting (`textures/sky.hdr`): [Poly Haven](https://polyhaven.com) — Rainforest Trail HDRI
