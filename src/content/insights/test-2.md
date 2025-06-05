---
title: 100% SEO Friendly Site just in a few mins
description: This is a test post from CMS
pubDate: 2025-05-18T00:11:00.000Z
---
# 🚀 Astro + Netlify + Decap CMS Setup Guide!!!

This guide walks you through the **best-practice workflow** for creating a blazing-fast Astro project, connecting it to GitHub, managing content with Decap CMS, and deploying it with Netlify — including Identity + Git Gateway setup.

---

## ✅ Step 1: Create a New Astro Project

```bash
npm create astro@latest
cd your-project
npm install
```

---

## ✅ Step 2: Initialize Git & Connect to GitHub

```bash
git init
git checkout -b dev
git remote add origin git@github.com:yourname/yourrepo.git
git add .
git commit -m "Initial commit"
git push -u origin dev
```

> Optional: Create a production branch

```bash
git checkout -b main
git push -u origin main
```

---

## ✅ Step 3: Install and Configure Decap CMS

Install:

```bash
npm install decap-cms
```

Create CMS files:

### `public/admin/index.html`

```html
<!DOCTYPE html>
<html>
  <head><meta charset="UTF-8" /><title>Decap CMS</title></head>
  <body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

### `public/admin/config.yml`

```yaml
backend:
  name: git-gateway
  branch: dev

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: blog
    label: Blog
    folder: "src/content/blog"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Body", name: "body", widget: "markdown" }
```

---

## ✅ Step 4: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/) → **New site from Git**
2. Connect your GitHub repo
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/`
   - **Branch**: `dev`

---

## ✅ Step 5: Enable Netlify Identity + Git Gateway

- Go to **Site Settings → Identity**
  - Enable **Identity**
  - Enable **Git Gateway** under "Services"
- Invite yourself as a user
- Login at:  
  `https://your-site.netlify.app/admin`

---

## ✅ Step 6: (Optional) Branch Deployment Workflow

- Use `dev` for content edits and preview deploys
- Use `main` for production (connected to a custom domain)
- Merge `dev → main` when ready to go live

Netlify supports separate deploys per branch automatically.

---

## ✅ Bonus Tips

- Add `_redirects` in `public/`:

```txt
/admin/*  /admin/index.html  200
```

- Add `robots.txt` to disallow indexing `/admin/`

```txt
User-agent: *
Disallow: /admin/
```

---

That’s it! You now have a full-stack static CMS setup with Astro, GitHub, Decap CMS, and Netlify — flexible, fast, and future-proof. 💪
