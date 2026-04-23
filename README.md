# 💰 FinanceFlow – Full Stack Finance Dashboard

A full-stack MERN finance dashboard to track transactions, analyze spending, and visualize financial data in real-time.

---

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
- 🗑️ Delete transactions (persistent)
- 📊 Spending breakdown chart (category-based)
- 💡 Insights:
  - Highest spending category
- 🌐 Full-stack integration (Frontend ↔ Backend ↔ Database)
- 💾 Data stored in MongoDB Atlas (cloud database)
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

---

## 🧱 Architecture
Frontend (React)
↓
Backend API (Express)
↓
MongoDB Atlas (Database)


---

## 🔌 API Endpoints

- `GET /transactions` → Fetch all transactions  
- `POST /transactions` → Add new transaction  
- `DELETE /transactions/:id` → Delete transaction  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/AttitudePrince143/finance_dashboard.git
cd finance_dashboard
2️⃣ Setup Backend
cd Backend
npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Run backend:

node server.js
3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev
🌍 Deployment
Frontend (Vercel)
Deployed using Vercel
Backend (Render)
Deployed using Render
🧠 Approach
Built using component-based architecture for scalability
Implemented REST API for CRUD operations
Managed global state using React hooks
Used MongoDB Atlas for persistent cloud storage
Ensured real-time UI updates after API operations
Implemented filtering, sorting, and searching logic efficiently
📌 Future Improvements
🔐 Authentication (JWT)
📅 Date range filtering
📊 Advanced analytics
🌙 Dark mode
📤 Export reports (CSV/PDF)
👨‍💻 Author

Syed Adil Syed Jafar
Frontend / MERN Developer


---

# 🚨 IMPORTANT

Before using this:

👉 Make sure:
- backend is actually deployed  
- frontend is using **live API URL (not localhost)**  

---

# 👉 NEXT

If backend not deployed yet → say:

✔ “deploy backend now”

I’ll guide you step-by-step without mistakes.