# Full Stack API Template (VueJs + NodeJs)

Welcome to the **Full Stack API Template**! This is a modular, responsive Vue application designed for clubs or teams to manage content like team info, players, coaches, and parents portals.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Project Setup

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173` by default.

---

## Project Structure

```
src/
  components/         # Reusable UI components (NavBar, Footer, Cards, etc.)
  pages/              # Route views (LandingPage, Team, Players, etc.)
  router/             # Vue Router setup (index.js)
  App.vue             # Main app container
  main.js             # App bootstrap
```

---

## Adding to the App

### Adding a Page

1. Create a new `.vue` file in the `src/pages/` folder:

```bash
src/pages/About.vue
```

2. Add basic content:

```vue
<template>
  <h2>About Page</h2>
</template>
```

3. Register the route in `src/router/index.js`:

````js
import About from '../pages/About.vue'

const routes = [
  { path: '/about', component: About },
]\```

### Adding a Component
1. Create a new component in `src/components/`:
```bash
src/components/MyCard.vue
````

2. Import it and use in a page or another component:

```vue
<script setup>
import MyCard from "../components/MyCard.vue";
</script>
```

### Updating Navigation

To link new pages, edit `NavBar.vue`:

```vue
<RouterLink to="/about">About</RouterLink>
```

---

## Testing the App

Currently, no testing framework is included. Suggestions:

- **Unit Testing:** [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/)
- **E2E Testing:** [Cypress](https://www.cypress.io/)

### Add Vitest

```bash
npm install -D vitest vue-test-utils
```

Example test setup can be added later as needed.

---

## Building it Out

To expand this into a production-ready app:

### Suggested Enhancements

- [x] Authentication (e.g. Coaches/Parents login)
- [x] Global State Management with [Pinia](https://pinia.vuejs.org/)
- [x] API integration with [Axios](https://axios-http.com/)
- [x] Form validation with [Vuelidate](https://vuelidate.js.org/) or [vee-validate](https://vee-validate.logaretm.com/)
- [x] Use a CSS framework like Bootstrap or Bulma (already discussed)
- [x] Add transitions and animations
- [x] Add responsive and accessibility improvements

### Improvemnt Suggestions

You can organize your code further:

```
src/
  assets/             # Images, icons, styles
  store/              # Global state (Pinia)
  composables/        # Reusable logic (like useUsers.js)
```

---

## Questions or Help

If you're unsure how to proceed, look at the Vue docs:

- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vue Router Docs](https://router.vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/introduction.html)

---

Happy building! 🛠️
