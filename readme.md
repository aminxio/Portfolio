# 🛡️ Pentester (Bug Hunter) Portfolio ⚡

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60" height="60" alt="React" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="60" height="60" alt="TypeScript" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="60" height="60" alt="Tailwind" />
  <img src="https://vitejs.dev/logo.svg" width="60" height="60" alt="Vite" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/⚛️_React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/🔷_TypeScript-5.5-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/🎨_Tailwind-3.4-blue?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/⚡_Vite-5.4-blue?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/github/actions/workflow/status/AmazingMoaaz/Portfolio/ci.yml?style=for-the-badge" alt="CI/CD Status" />
  <img src="https://img.shields.io/github/license/AmazingMoaaz/Portfolio?style=for-the-badge" alt="License" />
</div>

<div align="center">
  <h3>🔐 Secure • 🎯 Modern • ⚡ Fast</h3>
  <p>A cutting-edge portfolio website showcasing cybersecurity expertise, built with modern web technologies.</p>
</div>

## 📋 Table of Contents
- [⚡ Key Features](#-key-features)
- [🚀 Quick Start](#-quick-start)
- [🚀 Deployment](#-deployment)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Security Features](#-security-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ⚡ Key Features

🎨 **Design & UI**
- Responsive design optimized for all devices
- Dark/Light theme with smooth transitions
- Particle background animation
- Interactive UI elements
- Custom typewriter effect
- Smooth scroll behavior
- Loading animations and transitions

🛡️ **Security Features**
- Content Security Policy (CSP) headers
- XSS protection mechanisms
- Input sanitization
- Secure HTTP headers
- Protected API endpoints
- Rate limiting implementation
- CORS configuration

🔧 **Technical Features**
- Type-safe development with TypeScript
- Component-based architecture
- Efficient build system with Vite
- Modern CSS with Tailwind
- Form validation & handling
- Automated CI/CD pipeline
- Performance optimization

## 🚀 Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/AmazingMoaaz/Portfolio.git
   cd portfolio
   npm install
   ```

2. **Configure Environment**
   ```bash
   # Create .env file with your Web3Forms API key
   echo "VITE_WEB3FORMS_KEY=your-api-key" > .env
   ```
   
   > **Note:** You'll need a Web3Forms API key for the contact form to work. Get one for free at [web3forms.com](https://web3forms.com/).

3. **Development**
   ```bash
   npm run dev
   ```

4. **Production**
   ```bash
   npm run build
   npm run preview
   ```

5. **Linting**
   ```bash
   npm run lint
   ```

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Set up the Web3Forms API key in GitHub Actions:**
   - Go to your repository's Settings
   - Navigate to Secrets and variables > Actions
   - Create a new repository secret:
     - Name: `VITE_WEB3FORMS_KEY`
     - Value: Your Web3Forms API key

2. **Push to the main branch to trigger deployment:**
   ```bash
   git push origin main
   ```

3. **GitHub Actions will:**
   - Build your project with the API key from secrets
   - Deploy it to GitHub Pages
   - Make it available at your configured GitHub Pages URL

## 🛠️ Tech Stack

### 🎨 Frontend
- **⚛️ React 18** - Component-based UI
- **🔷 TypeScript** - Type safety
- **🎨 Tailwind CSS** - Utility-first styling
- **⚡ Vite** - Next-gen frontend tooling

### 📚 Libraries
- **🔷 Lucide React** - Beautiful icons
- **🎨 React Icons** - Comprehensive icon set
- **📝 Web3Forms** - Form handling
- **🎭 Framer Motion** - Smooth animations
- **🔍 React Intersection Observer** - Scroll animations

## 📂 Project Structure

```
src/
├── 🎨 components/    # React components
│   ├── 📱 ui/       # Reusable UI components
│   └── 📑 sections/ # Page sections
├── 🌍 context/      # React context
├── 📊 data/         # Static data
├── 📝 types/        # TypeScript types
├── 🛠️ utils/        # Utilities
└── 📱 App.tsx       # Root component
```

## 🎨 Customization

### 🎯 Content
- Modify `src/data/` files for content updates
- Update social links in `SocialLinks.tsx`
- Add new certifications in `certifications.ts`
- Customize projects in `projects.ts`

### 🎨 Styling
- Theme colors: `tailwind.config.js`
- Animations: `src/index.css`
- Typography: Update font in `index.css`
- Custom components: `src/components/ui/`

## 📱 Responsive Design

| Device      | Width    | Class Prefix | Description                    |
|-------------|----------|--------------|--------------------------------|
| 📱 Mobile   | 320px+   | `sm:`        | Optimized for small screens    |
| 📱 Tablet   | 768px+   | `md:`        | Tablet and small laptops       |
| 💻 Desktop  | 1024px+  | `lg:`        | Standard desktop screens       |
| 🖥️ Large    | 1280px+  | `xl:`        | Large monitors and displays    |

## 🔒 Security Features

- **Content Security Policy (CSP)**
  - Restricts resource loading
  - Prevents XSS attacks
  - Controls script execution

- **Input Validation**
  - Form data sanitization
  - Type checking
  - Length restrictions

- **API Security**
  - Rate limiting
  - CORS configuration
  - Request validation

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💻 Make your changes
4. 🔍 Test your changes
5. 📤 Create a pull request

### 🎯 Pull Request Process
1. Update the README.md with details of changes
2. Update the documentation
3. Ensure all tests pass
4. Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ By @AmazingMoaaz using React, TypeScript, and Tailwind CSS</p>
  <p>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/React-Learn_More-blue?style=flat-square&logo=react" alt="React" />
    </a>
    <a href="https://www.typescriptlang.org">
      <img src="https://img.shields.io/badge/TypeScript-Learn_More-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com">
      <img src="https://img.shields.io/badge/Tailwind-Learn_More-blue?style=flat-square&logo=tailwind-css" alt="Tailwind" />
    </a>
  </p>
</div>
