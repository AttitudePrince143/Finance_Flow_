export const calculateTotals = (transactions) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    income,
    expenses,
    balance: income - expenses,
  };
};

export const getInsights = (transactions) => {
  const expenses = transactions.filter(t => t.type === "expense");

  const categoryMap = {};

  expenses.forEach(t => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  let highestCategory = "";
  let maxAmount = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > maxAmount) {
      maxAmount = categoryMap[category];
      highestCategory = category;
    }
  }

  return {
    highestCategory,
    maxAmount,
  };
};