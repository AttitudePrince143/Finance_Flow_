import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function BalanceChart({ transactions }) {
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = sorted.map((t, index) => {
    const balance = sorted
      .slice(0, index + 1)
      .reduce((sum, item) => {
        return item.type === "income"
          ? sum + item.amount
          : sum - item.amount;
      }, 0);

    return {
      date: t.date,
      balance,
    };
  });

  return (
    <div className="bg-white p-4 shadow rounded mt-4">
      <h2 className="mb-3 font-semibold">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceChart;