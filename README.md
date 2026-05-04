# Copilot License Navigator

A production-ready single-page React app that helps users decide whether a Microsoft 365 scenario can use Microsoft 365 Copilot Chat or likely requires a Microsoft 365 Copilot license.

## Features

- Interactive Microsoft 365 Copilot licensing decision tree
- Yes/No and multiple-choice question flow
- Progress indicator
- Back and Start Over controls
- Recommendation cards with distinct visual states
- Comparison table for Microsoft 365 Copilot Chat and Microsoft 365 Copilot
- Responsive Microsoft-inspired interface
- GitHub Pages deployment configuration

## Tech Stack

- React
- Vite
- JavaScript
- Plain CSS
- GitHub Pages via `gh-pages`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The app is configured for GitHub Pages with this Vite base path:

```js
base: "/copilot-license-navigator/"
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

Make sure the GitHub repository name matches `copilot-license-navigator`, or update the `base` value in `vite.config.js`.

## Disclaimer

Microsoft licensing terms, product names, capabilities, and availability can change. This app provides guidance only. Verify final licensing decisions with official Microsoft documentation and your licensing or IT admin team.
