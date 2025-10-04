# Hockey Scoreboard (Modern) — League Edition


A web-based, interactive hockey scoreboard designed to be used locally or hosted (GitHub Pages).


Features:
- Black background with a single "pop" accent color
- Customizable team names and logos
- 16 default team logo slots (assets/teams/) — starts as HOME and AWAY
- Period cycles: 1 → 2 → ... → 9 → 0 → 1
- Main clock (editable MM:SS), click/tap clock to start/pause
- Scores and shots with +/- buttons
- Two penalty slots per team with M:SS countdown; penalties auto-expire when finished
- Player stat panels on each side (5 skater slots and 2 goalie slots per side)
- Upload custom logos via the UI
- Fullscreen toggle
- Buzzer and goal horn audio hooks (place your audio files in `assets/`)
- Saves state to localStorage so the scoreboard persists on reload


**Audio files** (place your own .mp3/.wav files in `assets/`):
- `assets/buzzer.mp3` — short buzzer sound
- `assets/goal_horn.mp3` — goal horn sound


How to use:
1. Clone or download the repo
2. Put your audio files in `assets/` with the names above (or rename and update `script.js`)
3. Optionally replace or add team logos in `assets/teams/` as `team1.svg` through `team16.svg`
4. Open `index.html` in a browser


License: MIT
