# 🚀 Karan Chittora's Developer Portfolio

Welcome to my personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Swiper**. It's hosted on **GitHub Pages** and designed to showcase my skills, projects, and experience in a clean, animated, and professional layout.

## 🌐 Live Demo
➡️ [krnchittora2.github.io/portfolio](https://krnchittora2.github.io/portfolio)

## ✨ Features
- Dark/Light mode toggle
- Animated skills section
- Professional timeline & journey timeline (clickable tree layout)
- Horizontal carousel for projects with filter by technology
- Contact form via [FormSubmit](https://formsubmit.co)
- Floating back to top button
- Fully responsive and mobile-friendly

## 🛠️ Tech Stack
- **React + Vite** for lightning-fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Swiper.js** for project carousel
- **Lucide Icons** and **React Icons**

## 📁 Folder Structure
```bash
├── public/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Journey.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── animations.js
│   └── index.jsx
└── README.md
```

## 📦 Setup & Installation
```bash
git clone https://github.com/krnchittora2/portfolio.git
cd portfolio
npm install
npm run dev
```

## 🚀 Deployment to GitHub Pages
```bash
npm install gh-pages --save-dev
```
In `package.json`:
```json
"homepage": "https://krnchittora2.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then:
```bash
npm run deploy
```

## 📬 Contact
Feel free to connect:
- Email: karan.chittora@gmail.com
- [LinkedIn](https://linkedin.com/in/krnchittora)
- [GitHub](https://github.com/krnchittora)

---

> Built with ❤️ by [Karan Chittora](https://krnchittora2.github.io/portfolio)
