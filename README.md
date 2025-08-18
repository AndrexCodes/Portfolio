# Your Name - Portfolio

A personal portfolio website showcasing my projects and skills, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and vibrant accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and SEO with Next.js
- **Animations**: Smooth animations and micro-interactions for enhanced UX
- **Accessibility**: Built with accessibility best practices
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Work Sans & Open Sans
- **Animations**: Custom CSS animations + Tailwind

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── navigation.tsx       # Navigation component
│   ├── hero-section.tsx     # Hero section
│   ├── projects-section.tsx # Projects showcase
│   ├── skills-section.tsx   # Skills display
│   ├── about-section.tsx    # About me section
│   └── contact-section.tsx  # Contact information
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
\`\`\`

## 🎨 Customization

### Colors
The color scheme can be customized in `app/globals.css` by modifying the CSS custom properties:

\`\`\`css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --accent: #00d4ff;
  /* ... other colors */
}
\`\`\`

### Content
Update your personal information in the respective component files:
- `components/hero-section.tsx` - Main introduction
- `components/about-section.tsx` - About me content
- `components/projects-section.tsx` - Project showcase
- `components/skills-section.tsx` - Skills and technologies

## 🚀 Deployment

### GitHub Pages
1. In your repository settings, enable GitHub Pages
2. Set the source branch to `main` and folder to `/docs`
3. Add the following to your `next.config.js`:
\`\`\`js
module.exports = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true
  }
}
\`\`\`
4. Update your build script in `package.json`:
\`\`\`json
"build": "next build && next export -o docs"
\`\`\`
5. Push your changes to GitHub

### Other Platforms
The project can be deployed to any static hosting platform:
- Netlify
- Cloudflare Pages
- Firebase Hosting
- Surge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ If you found this template helpful, please give it a star!
