# LawnDesk Landing Page

A professional marketing website for LawnDesk - AI-powered business management for lawn care professionals.

## Features

- **Hero Section**: Compelling headline with dual CTA buttons
- **Problem Section**: 3-card layout showcasing key pain points
- **Solution Section**: MIA AI receptionist showcase with features
- **Features Section**: 5 tabbed feature categories
- **Pricing Section**: 3-tier pricing with prepay discount calculator
- **Comparison Table**: Feature comparison vs competitors
- **FAQ Section**: 8 comprehensive FAQs
- **CTA Section**: Final call-to-action
- **Footer**: Complete footer with links and legal info

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with dark theme
- **Color Scheme**: Slate gray background with green (#16a34a) accents
- **Responsive**: Mobile-first responsive design

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site.

## Production Build

```bash
npm run build
```

This generates an optimized production build in the `dist` folder.

## GitHub Pages Deployment

### Prerequisites

1. Repository created on GitHub: `https://github.com/dralanhiatt-source/lawndesk-landing`
2. GitHub Actions enabled

### Deployment Steps

1. Push to main branch:
```bash
git push -u origin main
```

2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Access the Live Site

Once deployed, the site will be available at:
- **GitHub Pages URL**: https://dralanhiatt-source.github.io/lawndesk-landing
- **Custom Domain**: https://lawndesk.io (if configured)

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── ProblemSection.jsx
│   ├── SolutionSection.jsx
│   ├── FeaturesSection.jsx
│   ├── PricingSection.jsx
│   ├── ComparisonTable.jsx
│   ├── FAQSection.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors
Update in `tailwind.config.js`:
```js
colors: {
  green: {
    550: '#16a34a',
  }
}
```

### Content
Edit component files in `src/components/` to update text and features.

### Configuration
- **Base Path**: Set in `vite.config.js` as `base: '/lawndesk-landing/'`
- **Domain**: Update in GitHub Actions workflow

## Support

For questions or issues, contact: support@miaworks.pro
