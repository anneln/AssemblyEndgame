# Assembly: Endgame 🎮

A Scrimba exercise I rebuilt from scratch — a hangman-style game where every wrong guess "eliminates" a programming language.

## 🕹️ Features

- Guess a word letter by letter using a virtual keyboard
- Each mistake eliminates a programming language
- Full word reveal on defeat
- Confetti animation on victory 🎉

## 🛠️ Tech Stack

- React (hooks: `useState`)
- `clsx` — conditional CSS class handling
- `react-confetti` — victory animation

## 📚 What I Learned

- State management with `useState` and deriving values from state
- Complex conditional rendering (nested ternaries)
- Dynamic list generation with `.map()`
- Conditional CSS classes with `clsx`
- Handling user events
- Integrating a third-party library (`react-confetti`)
- React best practices: avoiding side effects during render
- Layout stability (avoiding layout shift)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
