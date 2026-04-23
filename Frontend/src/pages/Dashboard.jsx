import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummaryCards from "../components/cards/SummaryCards";
import TransactionTable from "../components/transactions/TransactionTable";
import BalanceChart from "../components/charts/BalanceChart";
import CategoryChart from "../components/charts/CategoryChart";
import Insights from "../components/insights/Insights";

import { calculateTotals, getInsights } from "../utils/helpers";

function Dashboard() {
  const [role, setRole] = useState("viewer");

  const [data, setData] = useState([]);

  
  
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  const fetchTransactions = async () => {
  try {
    setLoading(true);
    setError(null); // reset previous error

    const res = await fetch("http://localhost:5000/transactions");
    const data = await res.json();
    setData(data);

  } catch (err) {
    setError("Failed to load data");   // ✅ FIX HERE
    console.error(err);

  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchTransactions();
}, []);

// ✅ Category system
  const [categories, setCategories] = useState([
    "Food",
    "Shopping",
    "Salary",
    "Freelance",
  ]);
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  // ✅ Form state
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState("expense");

  // ✅ Calculations
  const { income, expenses, balance } = calculateTotals(data);
  const { highestCategory, maxAmount } = getInsights(data);

  // ✅ Delete
 const handleDelete = async (id) => {
  try {
    await fetch(`http://localhost:5000/transactions/${id}`, {
      method: "DELETE",
    });

    await fetchTransactions(); // ✅ always sync with DB
  } catch (err) {
    console.error("Delete failed:", err);
  }
};

  // ✅ Add
  const handleAdd = async () => {
  if (!newCategory || !newAmount) return;

  try {
    setError(null);

    if (isCustomCategory && !categories.includes(newCategory)) {
      setCategories((prev) => [...prev, newCategory]);
    }

    const newTransaction = {
      category: newCategory,
      amount: Number(newAmount),
      type: newType,
      date: new Date().toISOString().split("T")[0],
    };

    await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });

    await fetchTransactions();

    setNewCategory("");
    setNewAmount("");
    setNewType("expense");
    setIsCustomCategory(false);

  } catch (err) {
    setError("Add failed");   // ✅ important
    console.error(err);
  }
};

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-4 overflow-auto">
        <Header role={role} setRole={setRole} />

        <div className="mt-4">
          {/* Summary */}
          <SummaryCards
            income={income}
            expenses={expenses}
            balance={balance}
          />

          {/* Admin Form */}
          {role === "admin" && (
            <div className="mt-6 bg-white p-4 shadow rounded">
              <h2 className="font-semibold mb-2">Add Transaction</h2>

              <div className="flex flex-col md:flex-row gap-2">
                {/* Category Dropdown */}
                <select
                  value={isCustomCategory ? "other" : newCategory}
                  onChange={(e) => {
                    if (e.target.value === "other") {
                      setIsCustomCategory(true);
                      setNewCategory("");
                    } else {
                      setIsCustomCategory(false);
                      setNewCategory(e.target.value);
                    }
                  }}
                  className="border p-2 w-full md:w-auto"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>

                {/* Custom Category Input */}
                {isCustomCategory && (
                  <input
                    type="text"
                    placeholder="Enter new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="border p-2 w-full md:w-auto"
                  />
                )}

                {/* Amount */}
                <input
                  type="number"
                  placeholder="Amount"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="border p-2 w-full md:w-auto"
                />

                {/* Type */}
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="border p-2 w-full md:w-auto"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>

                {/* Add Button */}
                <button
                  onClick={handleAdd}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <BalanceChart transactions={data} />
            <CategoryChart transactions={data} />
          </div>

          {/* Insights */}
          <div className="mt-6">
            <Insights
              highestCategory={highestCategory}
              maxAmount={maxAmount}
            />
          </div>

          {/* Table */}
          <div className="mt-6">
            <TransactionTable
              transactions={data}
              role={role}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;