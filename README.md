# month-2-final-tasks
# 📚 Final Projects — README

> A collection of 4 frontend projects built with **HTML**, **CSS**, and **JavaScript**.
> Each project is fully self-contained with its own folder.

---

## 📁 Project Structure

```
/
├── todo-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── expense-tracker/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── quiz-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── ecommerce-page/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 🚀 How to Run Any Project

No installation or build tools required.

1. Open the project folder (e.g. `todo-app/`)
2. Double-click `index.html` — it opens directly in your browser
3. All three files (`index.html`, `style.css`, `script.js`) must stay in the **same folder**

> ✅ Works in Chrome, Firefox, Edge, Safari — no server needed.

---

---

## ✅ Project 1 — To-Do List App

**Folder:** `todo-app/`

### Description
A clean task management app that lets you add, complete, and delete tasks with filtering support.

### Features
- Add tasks by typing and pressing **Enter** or clicking **+ Add**
- Mark tasks as **complete** using the checkbox
- **Filter** tasks by: All · Active · Completed
- **Delete** individual tasks with the ✕ button
- **Clear Completed** button removes all finished tasks at once
- Live counter showing remaining active tasks
- XSS-safe input handling

### Tech Highlights
| File | Responsibility |
|------|---------------|
| `index.html` | App layout — input row, filter buttons, task list, footer |
| `style.css` | Dark theme with yellow accent (`#e8ff47`), Bebas Neue + DM Sans fonts, fade-in animations |
| `script.js` | Task array state, add/toggle/delete/filter logic, DOM rendering |

### How to Use
1. Type a task name in the input box
2. Press **Enter** or click **+ Add**
3. Click the checkbox to mark done
4. Use the filter buttons to view subsets
5. Click **Clear Completed** to remove finished tasks

---

---

## 💸 Project 2 — Expense Tracker

**Folder:** `expense-tracker/`

### Description
A personal finance tracker that records income and expenses, calculates your balance in real time, and logs transaction history.

### Features
- Add transactions with a **description**, **amount**, **type** (Income / Expense), and **category**
- Live summary cards showing **Net Balance**, **Total Income**, **Total Expense**
- Color-coded transaction history (green = income, red = expense)
- Categories: 🍕 Food · 🚗 Transport · 🛍 Shopping · 💊 Health · 🎬 Entertainment · 💼 Salary · 📦 Other
- Delete individual transactions
- **Clear All** button with confirmation
- Negative balance shown in red, positive in green

### Tech Highlights
| File | Responsibility |
|------|---------------|
| `index.html` | Summary cards, form grid (4 inputs), transaction list |
| `style.css` | Light warm beige theme, Syne + Outfit fonts, slide-in animations, left border color coding |
| `script.js` | Transactions array, income/expense totals calculation, add/delete/render logic |

### How to Use
1. Fill in the **Description** (e.g. "Salary")
2. Enter the **Amount**
3. Select **Income** or **Expense**
4. Choose a **Category**
5. Click **+ Add Transaction**
6. Click ✕ on any item to remove it

---

---

## 🧠 Project 3 — Quiz App (QuizVerse)

**Folder:** `quiz-app/`

### Description
A full-featured interactive quiz game with 8 categories, customizable question count, shuffled questions, score tracking, and quiz history — wrapped in a 3D sci-fi design.

### Features
- **8 Categories** with 20 questions each:
  - 💻 Technology
  - 🔬 Science
  - 📐 Mathematics
  - 🏛️ History
  - 🌍 Geography
  - 📖 English
  - 🌐 General Knowledge
  - ⚽ Sports
- Choose **5 / 10 / 15 / 20** questions per quiz
- Questions and answer options **shuffled** every time
- Instant correct/wrong feedback with color highlighting
- Animated **SVG score ring** on result screen
- Score, accuracy %, correct/wrong stat pills on result
- **Quiz History** log — stores all past attempts with date, score, category
- Clear history button
- Real-time **3D mouse tilt** effect on the app card
- Floating animated background orbs + perspective grid

### Tech Highlights
| File | Responsibility |
|------|---------------|
| `index.html` | 4 screens: Home, Quiz, Result, History |
| `style.css` | Dark sci-fi theme, Orbitron + Exo 2 fonts, CSS 3D perspective transforms, glowing orbs, SVG ring, card entrance animations |
| `script.js` | Full question bank (160 questions), category/count selection, shuffling, scoring, history log, mouse 3D tilt tracking |

### How to Use
1. Select a **category** card
2. Choose how many **questions** (5–20)
3. Click **Launch Quiz**
4. Click an answer option — it shows correct/wrong instantly
5. Press **Next →** to advance
6. View your **result** with score ring and stats
7. Click **Play Again** (same category, new random questions) or **Home**
8. From Home, click **📊 View History** to see all past quizzes

### Screen Flow
```
Home Screen
  ↓ Launch Quiz
Quiz Screen (Q1 → Q2 → ... → Qn)
  ↓ Finish
Result Screen
  ↓ Play Again or Home
Home Screen ←→ History Screen
```

---

---

## 🛍️ Project 4 — Simple E-Commerce Product Page

**Folder:** `ecommerce-page/`

### Description
A polished single-product page for a sneaker store featuring color selection, size picker, quantity control, cart functionality, and wishlist toggle.

### Features
- **Color selector** — 4 color swatches (Cream, Midnight, Sage, Blush) that change the product image background and emoji
- **Thumbnail strip** — clicking thumbnails also changes the color
- **Size selector** — US sizes 7–12 with active state highlighting
- **Quantity control** — decrease/increase buttons (min 1, max 10)
- **Add to Cart** — validates size selection, increments cart counter in navbar, shows toast notification
- **Wishlist toggle** — ♡ / ♥ toggle with visual feedback
- Animated **toast notification** for cart actions
- Sticky navigation bar with live cart count badge
- Hover animations on product image (scale + rotate)
- Discount badge and crossed-out original price
- Features list (free shipping, returns, warranty)

### Tech Highlights
| File | Responsibility |
|------|---------------|
| `index.html` | Navbar, product gallery (main image + thumbnails), product info panel with all selectors |
| `style.css` | Warm cream light theme, Playfair Display + Jost fonts, CSS transitions, sticky nav, animated toast |
| `script.js` | Color/size/quantity state, cart count logic, wishlist toggle, toast queue, XSS-safe rendering |

### How to Use
1. Click a **color swatch** to change the product color
2. Select a **shoe size** (required before adding to cart)
3. Adjust the **quantity** using − / + buttons
4. Click **Add to Cart** — a toast notification confirms the action
5. Click **♡ Wishlist** to save the product
6. The cart count in the navbar updates with each addition

---

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, responsive layout, 3D transforms |
| Vanilla JavaScript (ES6+) | All app logic — no frameworks or libraries |
| Google Fonts | Custom typography per project |
| CSS Custom Properties | Theme variables for consistent color schemes |

---

## 📋 Project Requirements Checklist

| Requirement | To-Do | Expense | Quiz | E-Commerce |
|-------------|-------|---------|------|------------|
| Clean UI | ✅ | ✅ | ✅ | ✅ |
| Proper JS Logic | ✅ | ✅ | ✅ | ✅ |
| Comments in Code | ✅ | ✅ | ✅ | ✅ |
| Separate CSS file | ✅ | ✅ | ✅ | ✅ |
| Separate JS file | ✅ | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ | ✅ |

---

## 👨‍💻 Notes for Developers

- All projects use **Vanilla JS only** — no jQuery, React, Vue, or any framework
- No `npm install` or build step required — open and run directly
- Each project's `script.js` is fully commented to explain every function and logic block
- Input sanitization (`escapeHTML`) is applied in projects that render user input to the DOM
- All projects are **mobile responsive** using CSS Grid, Flexbox, and media queries

---

*Built as Final Project submissions — HTML · CSS · JavaScript*
