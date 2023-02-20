import { List, Item } from './Statistics.styled';

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
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>
            Positive feedback: {positivePercentage}%
            {getEmoji(positivePercentage)}
          </Item>
        </List>
      )}
    </>
  );
};

function getEmoji(percentage) {
  if (percentage >= 80) {
    return '😁';
  } else if (percentage >= 65 && percentage < 80) {
    return '🙂';
  } else if (percentage >= 40 && percentage < 65) {
    return '😐';
  } else if (percentage >= 20 && percentage < 40) {
    return '😞';
  } else if (percentage < 20) {
    return '😭';
  }
}

// function getEmoji(percentage) {
//   switch (percentage) {
//     case percentage >= 80:
//       return '😁';
//     case percentage >= 65 && percentage < 80:
//       return '🙂';
//     case percentage >= 40 && percentage < 65:
//       return '😐';
//     case percentage >= 20 && percentage < 40:
//       return '😞';
//     case percentage < 20:
//       return '😭';
//   }
// }
