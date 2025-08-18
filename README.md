# Andrew Macharia - Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

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
git clone https://github.com/andrewmacharia/portfolio.git
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

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/andrewmacharia/portfolio/issues).

## 📞 Contact

Andrew Macharia - [andrewmacharia@example.com](mailto:andrewmacharia@example.com)

Project Link: [https://github.com/andrewmacharia/portfolio](https://github.com/andrewmacharia/portfolio)

---

⭐ Star this repo if you found it helpful!
