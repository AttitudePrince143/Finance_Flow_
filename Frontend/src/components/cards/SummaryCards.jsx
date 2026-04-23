function SummaryCards({ income, expenses, balance }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-gray-500">Balance</h3>
        <p className="text-xl font-bold">₹{balance}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-gray-500">Income</h3>
        <p className="text-xl font-bold text-green-600">₹{income}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-gray-500">Expenses</h3>
        <p className="text-xl font-bold text-red-600">₹{expenses}</p>
      </div>

    </div>
  );
}

export default SummaryCards;