# Pratik Chavan — Portfolio Website

A single-page portfolio website built with **Next.js 14**, **React**, and **Tailwind CSS**. Dark gold theme inspired by modern AI/ML engineer portfolios.

---

## 🚀 Quick Start (Local Development)

**Prerequisites:** Install [Node.js 18+](https://nodejs.org/)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at
http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (Easiest)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects Next.js. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (imports all sections)
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Hero section with name, stats, profile
│   ├── About.tsx         # About + What I Build
│   ├── Experience.tsx    # Work experience cards
│   ├── Projects.tsx      # Project cards (featured + additional)
│   ├── Skills.tsx        # Technical toolkit grid
│   ├── Education.tsx     # Education cards
│   ├── Contact.tsx       # Contact info section
│   └── Footer.tsx        # Footer
├── public/               # Static assets (add resume.pdf, profile.jpg here)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🖼️ Adding Your Profile Photo

1. Add your photo as `public/profile.jpg`
2. In `components/Hero.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image
     src="/profile.jpg"
     alt="Pratik Chavan"
     fill
     className="object-cover"
   />
   ```

## 📄 Adding Your Resume

Place your resume PDF at `public/resume.pdf` — the Resume buttons will automatically link to it.

## 🔗 Update GitHub Link

In `components/Hero.tsx`, replace `href="#"` on the GitHub button with your actual GitHub profile URL.

---

## 🎨 Design

- **Background:** `#0d0d0d`
- **Cards:** `#1a1a1a` with `#2a2a2a` border
- **Gold accent:** `#c9a04c`
- **Font:** Inter (Google Fonts via next/font)
