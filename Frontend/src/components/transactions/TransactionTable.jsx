import { useState } from "react";

function TransactionTable({ transactions,role , onDelete }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Filter
  let filtered = filter === "all"
    ? transactions
    : transactions.filter((t) => t.type === filter);

  // Search
  filtered = filtered.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount; // descending
    } else {
      return new Date(b.date) - new Date(a.date); // latest first
    }
  });

  return (
    <div className="bg-white p-4 shadow rounded mt-4">
      <h2 className="text-lg font-semibold mb-3">Transactions</h2>

      {/* Controls */}
      <div className="flex gap-3 mb-4 flex-wrap">
        
        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
             {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
  {filtered.length > 0 ? (
    filtered.map((t) => (
      <tr key={t._id} className="border-b">
        <td>{t.date}</td>
        <td>{t.category}</td>
        <td className="capitalize">{t.type}</td>

        <td
          className={
            t.type === "income"
              ? "text-green-600"
              : "text-red-600"
          }
        >
          ₹{t.amount}
        </td>

        {role === "admin" && (
          <td>
            <button
              onClick={() => onDelete(t._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </td>
        )}
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan={role === "admin" ? 5 : 4}
        className="text-center py-4 text-gray-500"
      >
        No transactions found
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
}

export default TransactionTable;