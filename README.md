# 🚀 React HashRouter Boilerplate

This project is a minimal React boilerplate configured with React Router’s `HashRouter`, ideal for quick prototyping or small projects where routing is needed without server configuration.

## 🧱 What’s included?

- **HashRouter Setup**  
  Uses `HashRouter` instead of `BrowserRouter`, making it ideal for static hosting platforms like GitHub Pages.

- **Basic Layout**  
  A simple structure with a reusable `Header` and `Footer` component, already wired into the main layout.

- **Starter Styling**  
  Includes an `App.css` file with some basic styles to get you started. Feel free to build on this or replace it entirely.

## 📦 Why use this?

Clone or fork this repo to skip the boilerplate setup and dive right into building your app. It gives you a small but helpful head start—especially if you're working with `HashRouter` and a basic page structure.

## 🧠 Takeaways

- State is managed in `App.jsx`.
- Routes are also defined in `App.jsx` instead of `main.jsx`.  
  This allows all routes to have access to the shared state and logic in `App.jsx`.
- In `main.jsx`, we use `HashRouter` instead of the default `BrowserRouter`:  
  This is necessary due to the way GitHub Pages handles routing. For example, if you refresh a route like `/edit/`, GitHub Pages will look for a file or folder named `edit`, which doesn’t exist.  
  Since this is a single-page application (SPA) with only an `index.html`, we use `HashRouter`, which prepends a `#` to the route. This ensures that all requests are correctly handled by the `index.html` file without needing server configuration.
