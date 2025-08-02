# Jesús Sunuc - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Sections**: Smooth scrolling navigation and engaging user interactions
- **Contact Form**: Functional contact form for potential collaborators
- **Accessibility**: Built with accessibility best practices
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header with smooth scrolling
│   ├── Hero.tsx         # Landing section with introduction
│   ├── About.tsx        # Detailed about section
│   ├── Projects.tsx     # Portfolio projects showcase
│   ├── Skills.tsx       # Technical skills and experience
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Footer with social links
├── App.tsx              # Main application component
├── App.css              # Global styles and custom animations
└── main.tsx             # Application entry point
```

## 🎨 Sections

### 1. **Hero/Landing**
- Professional introduction
- Call-to-action buttons
- Gradient design elements

### 2. **About Me**
- Personal journey from Guatemala to Snow College
- Professional experience
- Education details
- Core values and languages

### 3. **Projects**
- DormDuty - React Native chore management app
- ConectaHub - Business platform for Guatemalan SMBs
- Concerts API - FastAPI backend with cloud integration
- IT Department tools and automation
- Cybersecurity projects
- Event management system

### 4. **Skills**
- Programming languages with proficiency levels
- Frameworks and libraries
- Database and cloud technologies
- DevOps tools and practices
- Certifications and continuous learning

### 5. **Contact**
- Interactive contact form
- Professional contact information
- Social media links
- Quick facts and availability

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jesus-sunuc/portfolio.git
   cd portfolio/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Customization

### Updating Personal Information
- Edit contact information in `src/components/Contact.tsx`
- Update social media links in `src/components/Footer.tsx`
- Modify project details in `src/components/Projects.tsx`

### Styling
- Global styles: `src/App.css`
- Tailwind configuration: Modify Tailwind classes throughout components
- Color scheme: Update gradient colors in CSS and component classes

### Adding New Projects
1. Open `src/components/Projects.tsx`
2. Add new project object to the `projects` array
3. Include title, description, tech stack, and links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop computers (1024px and up)
- Large screens (1280px and up)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## 🔧 Development

### Code Quality
- ESLint configured for TypeScript and React
- Consistent code formatting
- Type safety with TypeScript

### Performance
- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are always welcome!

## 📞 Contact

- **Email**: jesus.sunuc@example.com
- **LinkedIn**: [linkedin.com/in/jesussunuc](https://linkedin.com/in/jesussunuc)
- **GitHub**: [github.com/jesus-sunuc](https://github.com/jesus-sunuc)

---

Built with ❤️ by Jesús Sunuc
