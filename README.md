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
