export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};
