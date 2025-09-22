# Bingo Caller

A modern, mobile-friendly web application for calling bingo numbers with their traditional phrases. Perfect for bingo callers who want a digital alternative to paper cards.

## Features

- 🎯 Instant number-to-phrase lookup
- 📱 Mobile-optimized with numeric keypad
- 🌗 Dark theme design
- 🎄 Multiple phrase sets (Standard and Christmas themed)
- ⚙️ Easy theme switching
- 💫 Smooth animations and transitions

## Usage

1. Open the app on your mobile device
2. The numeric keypad will automatically appear
3. Type any number from 1-90
4. The corresponding bingo phrase will instantly appear
5. Use the gear icon (⚙️) in the top right to switch between different phrase sets

## Development

To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

The app is configured for GitHub Pages deployment using gh-pages package.

1. Make your changes
2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Push the built files to the gh-pages branch
- Deploy to https://oligirling.github.io/bingo

## Technical Details

Built with:
- React 18
- Vite
- Modern CSS
- Mobile-first design principles

## Phrase Sets

### Standard Bingo
Traditional British bingo calls, including classics like:
- "Kelly's eye" (1)
- "Two little ducks" (22)
- "Two fat ladies" (88)

### Christmas Special
Festive-themed calls for holiday bingo sessions, featuring:
- "Christmas Eve" (24)
- "Christmas Day!" (25)
- "Boxing Day" (26)

## License

MIT

## Contributing

Feel free to open issues or submit pull requests for:
- New phrase sets
- UI improvements
- Bug fixes
- Feature requests
