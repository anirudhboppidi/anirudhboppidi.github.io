# Anirudh Reddy Boppidi - Portfolio

A modern, responsive portfolio website showcasing my work as a Software Development Engineer at Amazon Business.

**Live Site:** [https://anirudhboppidi.github.io](https://anirudhboppidi.github.io)

## About Me

I'm a Software Development Engineer (SDE-2) at Amazon Business with 5+ years of experience building high-end web applications and AI solutions. I specialize in Java, React, and AWS technologies.

- **Location:** Austin, Texas
- **Email:** anirudh.boppidi@gmail.com
- **LinkedIn:** [linkedin.com/in/anirudhboppidi](https://www.linkedin.com/in/anirudhboppidi/)

## Technologies Used

### Frontend
- **React 19** - Latest version with improved performance
- **Vite 6** - Fast build tool and development server
- **CSS Modules** - Scoped styling without additional dependencies

### Features
- Single-page scroll layout with smooth navigation
- Dark theme with modern professional aesthetic
- Fully responsive design (mobile-first)
- CSS animations and transitions
- Accessible (WCAG compliant)

## Project Structure

```
├── public/
│   └── assets/              # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar/          # Fixed navigation with smooth scroll
│   │   ├── Hero/            # Introduction section
│   │   ├── About/           # Bio and experience highlights
│   │   ├── Skills/          # Technical skills with progress bars
│   │   ├── Projects/        # Project showcase cards
│   │   ├── Contact/         # Contact form and info
│   │   └── Footer/          # Footer with quick links
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── index.html
├── package.json
└── vite.config.js
```

## Sections

1. **Hero** - Name, title, tagline, and call-to-action buttons
2. **About** - Professional bio, experience highlights, and resume download
3. **Skills** - Technical skills organized by category (Frontend, Backend, AWS, Data Science)
4. **Projects** - Featured projects from Amazon and previous roles
5. **Contact** - Contact form and social links
6. **Footer** - Quick navigation and social links

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anirudhboppidi/anirudhboppidi.github.io.git

# Navigate to project directory
cd anirudhboppidi.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers a new deployment.

## License

This project is open source and available under the [MIT License](LICENSE).
