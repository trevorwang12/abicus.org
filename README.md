# Abicus - Scientific Calculator Online

🧮 Free online scientific calculator based on the Finnish Abicus calculator system

## Features

- 🔢 **Scientific Functions** - Complete set of mathematical operations for educational use
- 🌍 **Multi-language Support** - Available in English and Finnish
- ⌨️ **Keyboard Support** - Full keyboard integration with shortcuts
- 📱 **Responsive Design** - Optimized for all devices
- 🎯 **Educational Focus** - Designed without symbolic computation to promote understanding

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Vercel
- **Analytics**: Plausible (privacy-friendly)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone <repository-url>
cd abicus
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build
```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── [locale]/        # Internationalized routes
│   │   │   ├── page.tsx     # Homepage
│   │   │   ├── help/        # Help & Tips page
│   │   │   ├── privacy/     # Privacy Policy
│   │   │   └── terms/       # Terms of Service
│   │   ├── manifest.ts      # PWA manifest
│   │   └── sitemap.ts       # SEO sitemap
│   ├── components/          # Reusable components
│   ├── i18n/               # Internationalization config
│   └── middleware.ts        # Route middleware
├── messages/               # Translation files
│   ├── en.json            # English translations
│   └── fi.json            # Finnish translations  
├── public/                # Static assets
│   ├── robots.txt         # SEO robots file
│   └── ads.txt            # AdSense authorization
└── vercel.json            # Vercel deployment config
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js framework and deploy

### Environment Variables
No environment variables required for basic functionality.

## SEO & Analytics

- ✅ Complete SEO optimization with canonical URLs
- ✅ Multi-language sitemaps and hreflang tags  
- ✅ Open Graph and Twitter Card meta tags
- ✅ Privacy-friendly Plausible analytics
- ✅ Google AdSense integration with ads.txt

## About Abicus

Abicus is inspired by the Finnish digital examination system's scientific calculator. It represents a sophisticated approach to educational technology that prioritizes pedagogical goals over feature complexity.

### Design Philosophy
- **Purposeful Limitations**: Features are deliberately constrained to enhance learning
- **Educational Excellence**: Promotes deep mathematical understanding
- **Universal Access**: Same tool for every student, ensuring fairness

## License

This project is inspired by the open-source Abicus calculator developed by the Finnish Matriculation Examination Board (Digabi).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support and questions:
- 📧 Email: support@abicus.com  
- 🌐 Website: [abicus.org](https://abicus.org)
- 📚 Help: [abicus.org/help](https://abicus.org/help)
