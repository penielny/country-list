# 🌍 CountryList

**CountryList** is a modern **Angular** application that allows users to browse, search, and filter countries using data from the [REST Countries API](https://restcountries.com). The app features a responsive UI, dark/light theme switching, and robust state management using **NgRx**.

---

## 🚀 Setup & Run Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm serve
```
Visit http://localhost:4200 in your browser.

### 3. Build for production
```bash
ng build
```

---

## ✨ Application Features

- 🔍 **Country Search** – Search for countries by name.
- 🌐 **Region Filter** – Filter countries by region.
- 🌓 **Theme Switch** – Toggle between dark and light modes.
- 📄 **Country Details** – View detailed information about a selected country.

---

## 🧩 Component Structure

- `NavbarComponent` – Displays the app title and theme switcher.
- `CountriesComponent` – Lists all countries with search and filter controls.
- `CountryComponent` – Shows detailed information about a selected country.
- **Shared Components** – Reusable UI elements such as loaders, cards, etc.

---

## 🧭 Routing Overview

| Route             | Description                              |
|------------------|------------------------------------------|
| `/`              | Displays the list of countries            |
| `/country/:code` | Shows details for a specific country      |

Routing is configured in `app.routes.ts` using **Angular Router**.

---

## 🌐 API Consumption

The app uses the **REST Countries API** to fetch data. All HTTP requests are handled by Angular services:

- `countries.service.ts`
- `country-http.service.ts`

> Caching is implemented for performance efficiency.

---

## 🛠️ NgRx Store Implementation

- **State** – Manages the countries list, selected country, filters, and theme.
- **Actions** – Define events such as loading countries or toggling the theme.
- **Reducers** – Update state in response to actions.
- **Effects** – Handle API calls and side effects.

> NgRx files are located in the `store/` directory.

---

## 🎨 Theme Switching

The theme (dark or light) is:

- Controlled via **NgRx state**.
- Toggled from the `NavbarComponent`.
- Applied globally using Angular theming.
- Persisted across sessions via state management.

---

## 🔁 Git Workflow

- **`main` branch** – Stable, production-ready code.
- **Feature branches** – New features or fixes are developed in isolated branches (e.g. `feature/search`, `fix/navbar-style`).
- **Pull requests** – Used for code reviews and merging into `main`.

---

## 🧪 Tech Stack

- Angular
- TypeScript
- NgRx
- RxJS
- SCSS
- REST API

---

## 📄 License

MIT – feel free to use and modify.
