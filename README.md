# 📚 vue-bookstore

A simple Vue 3 + TypeScript bookstore landing page built with Vite. It fetches book data from a local or remote API, displays a catalog, and allows users to view book details and purchase them.

---

## 🚀 Features

- 📘 Book list and individual detail pages
- 🧠 Type-safe models using OOP and serialization
- 🛒 Purchase flow with stock updates
- 🌈 TailwindCSS 3 for styling
- 🔔 Toast notifications for UX feedback
- 🧪 Unit tests with Vitest
- ⚡ Built with Vite for fast development

---

## 🧩 Dependencies Used

| Package                  | Purpose                                  |
|--------------------------|------------------------------------------|
| `vue`                    | Vue 3 framework                         |
| `vue-router`             | Routing/navigation                      |
| `pinia` *(optional)*     | State management (not used by default) |
| `axios`                  | HTTP client for API requests            |
| `vue3-toastify`          | Toast notification library              |
| `tailwindcss`            | Utility-first CSS framework             |
| `postcss`, `autoprefixer`| For Tailwind/PostCSS pipeline           |
| `@vitejs/plugin-vue`     | Vue plugin for Vite                     |
| `vitest`, `@vue/test-utils` | Unit testing                         |
| `vue-tsc`                | TypeScript support for `.vue` files     |

---

## 🛠 Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

---

## 📦 Project Setup

```bash
npm install

## 🔧 Development

```bash
npm run dev

## ✅ Type-Check, Compile & Minify for Production

```bash
npm run build

## 🧪 Run Unit Tests

npm run test:unit


src/
├── api/               # Axios service calls
├── assets/            # Static assets
├── components/
│   └── books/         # Book list & detail views
├── models/            # TypeScript model (OOP)
├── router/            # Vue Router setup
├── styles/            # Tailwind base config (if needed)
└── views/             # Route views
