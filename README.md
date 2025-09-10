# 🏨 Grand Vista Hotel - Luxury Hotel Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://comprehensive-modern-1a49.bolt.host)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> **🌟 [View Live Demo](https://comprehensive-modern-1a49.bolt.host)**

A stunning, fully responsive luxury hotel website built with modern web technologies. Experience the perfect blend of elegant design, smooth animations, and exceptional user experience.

![Grand Vista Hotel Preview](https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 **Design & User Experience**
- **Luxury Design**: Premium hotel aesthetic with elegant typography and color schemes
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and micro-interactions for enhanced UX
- **Modern UI Components**: Clean, professional interface elements

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Tablet Optimization**: Special responsive breakpoints for tablet devices
- **Touch-Friendly**: Optimized for touch interactions on mobile devices
- **Cross-Browser Compatible**: Works seamlessly across all modern browsers

### 🏨 **Hotel Features**
- **Room Showcase**: Detailed room and suite presentations
- **Amenities Display**: Comprehensive facilities and services overview
- **Dining Experience**: Restaurant and dining options showcase
- **Photo Gallery**: Beautiful image gallery with lightbox functionality
- **Booking System**: Interactive reservation form with validation
- **Contact Information**: Multiple contact methods and location details

### 🛠 **Technical Features**
- **React Router**: Multi-page navigation with smooth transitions
- **TypeScript**: Type-safe development for better code quality
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Optimized meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/grand-vista-hotel.git
   cd grand-vista-hotel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
grand-vista-hotel/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Rooms.tsx      # Rooms showcase
│   │   ├── Amenities.tsx  # Hotel amenities
│   │   ├── Gallery.tsx    # Photo gallery
│   │   ├── Booking.tsx    # Reservation form
│   │   └── Contact.tsx    # Contact information
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage
│   │   ├── Rooms.tsx     # Rooms page
│   │   ├── Amenities.tsx # Amenities page
│   │   ├── Dining.tsx    # Dining page
│   │   ├── Gallery.tsx   # Gallery page
│   │   ├── About.tsx     # About page
│   │   ├── BookNow.tsx   # Booking page
│   │   └── Contact.tsx   # Contact page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Pages Overview

| Page | Description | Features |
|------|-------------|----------|
| **Home** | Landing page with hero section | Hero banner, features overview, call-to-action |
| **Rooms** | Room and suite showcase | Room types, pricing, amenities, booking links |
| **Amenities** | Hotel facilities and services | Facility descriptions, hours, contact info |
| **Dining** | Restaurant and dining options | Menu highlights, restaurant details, reservations |
| **Gallery** | Photo gallery with categories | Image lightbox, category filters, responsive grid |
| **About** | Hotel information and team | Company story, team members, achievements |
| **Book Now** | Reservation system | Booking form, room selection, guest information |
| **Contact** | Contact information and form | Contact details, inquiry form, location map |

## 🛠 Built With

### Frontend Technologies
- **[React 18.3.1](https://reactjs.org/)** - Modern JavaScript library for building user interfaces
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Vite 5.4.2](https://vitejs.dev/)** - Next generation frontend tooling
- **[React Router 7.8.2](https://reactrouter.com/)** - Declarative routing for React

### Styling & UI
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **Custom CSS Animations** - Smooth transitions and micro-interactions

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing tool
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## 📱 Responsive Breakpoints

| Device | Breakpoint | Description |
|--------|------------|-------------|
| Mobile | `< 768px` | Hamburger menu, stacked layouts |
| Tablet | `768px - 1023px` | Compact navigation, optimized grids |
| Desktop | `≥ 1024px` | Full navigation, multi-column layouts |

## 🎨 Design System

### Color Palette
- **Primary**: Amber (#D97706) - Luxury gold accent
- **Secondary**: Gray (#374151) - Professional dark gray
- **Background**: White (#FFFFFF) and Light Gray (#F9FAFB)
- **Text**: Dark Gray (#111827) and Medium Gray (#6B7280)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (700-900)
- **Body Text**: Regular and medium weights (400-500)
- **Line Heights**: 120% for headings, 150% for body text

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
The project is configured for easy deployment to modern hosting platforms:

1. **Netlify**: Connect your repository and deploy automatically
2. **Vercel**: Import project and deploy with zero configuration
3. **GitHub Pages**: Use the build output for static hosting

## 📈 Performance Features

- **Optimized Images**: Compressed images from Pexels with proper sizing
- **Lazy Loading**: Images load as they enter the viewport
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Purged unused CSS classes
- **Fast Refresh**: Instant updates during development

## 🔧 Customization

### Changing Colors
Edit the Tailwind configuration in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Content
- **Images**: Replace Pexels URLs with your own images
- **Text Content**: Update content in respective component files
- **Contact Info**: Modify contact details in `src/pages/Contact.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: [Pexels](https://pexels.com) for high-quality stock photos
- **Icons**: [Lucide](https://lucide.dev) for beautiful icon set
- **Fonts**: [Google Fonts](https://fonts.google.com) for Inter font family
- **Inspiration**: Modern luxury hotel websites and design trends

## 📞 Support

If you have any questions or need help with the project:

- 📧 **Email**: support@grandvistahotel.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/grand-vista-hotel/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/grand-vista-hotel/discussions)

---

<div align="center">

**[🌟 View Live Demo](https://comprehensive-modern-1a49.bolt.host)** | **[📚 Documentation](#)** | **[🚀 Deploy Now](#)**

Made with ❤️ for luxury hospitality experiences

</div>