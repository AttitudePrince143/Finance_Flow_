# 💰 Finance Dashboard UI

A clean and responsive finance dashboard built using React to track transactions, analyze spending, and visualize financial data.

## 🔗 Live Demo
https://finance-dashboard-weld-zeta.vercel.app/

## 📂 GitHub Repository
https://github.com/AttitudePrince143/finance_dashboard

---

## 🚀 Features

- 📊 Dashboard overview (Balance, Income, Expenses)
- 📈 Balance trend chart (time-based visualization)
- 🧾 Transactions table with:
  - Filter (All / Income / Expense)
  - Search by category
  - Sort (Date / Amount)
- 🔐 Role-based UI:
  - Viewer → view only
  - Admin → add & delete transactions
- ➕ Add Transaction:
  - Predefined categories
  - Custom category ("Other" option)
- 📊 Spending breakdown chart (category-based)
- 💡 Insights:
  - Highest spending category
- 💾 Data persistence using localStorage
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- Recharts (for charts)

---

## 🧠 Approach

- Used component-based architecture for scalability
- Managed state using React hooks (useState, useEffect)
- Implemented dynamic filtering, sorting, and searching
- Designed role-based UI behavior without backend (simulated RBAC)
- Used localStorage for persistence to mimic real-world behavior

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/AttitudePrince143/finance_dashboard.git
cd finance_dashboard
npm install
npm run dev