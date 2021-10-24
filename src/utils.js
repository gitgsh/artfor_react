export const formatMoney = price =>
  (Math.round(price * 100) / 100).toLocaleString();

export const getAchievedRate = (achievedAmount, goalAmount) =>
  Math.round((achievedAmount / goalAmount) * 100);

export const getDaysBetweenDate = (openDate, endDate) => {
  const start = new Date(openDate);
  const end = new Date(endDate);

  const dDay = end.getTime() - start.getTime();
  const diff = Math.floor(dDay / (1000 * 60 * 60 * 24));

  return diff;
};
