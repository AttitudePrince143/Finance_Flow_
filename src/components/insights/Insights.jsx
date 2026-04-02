function Insights({ highestCategory, maxAmount }) {
  return (
    <div className="bg-white p-4 shadow rounded mt-4">
      <h2 className="font-semibold mb-3">Insights</h2>

      <p>
        Highest Spending Category:{" "}
        <span className="font-bold">{highestCategory}</span>
      </p>

      <p>
        Amount Spent:{" "}
        <span className="font-bold">₹{maxAmount}</span>
      </p>
    </div>
  );
}

export default Insights;