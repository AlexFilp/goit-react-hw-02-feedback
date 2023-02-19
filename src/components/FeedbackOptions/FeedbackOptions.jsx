export const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={() => onClick('good')}>
        Good
      </button>
      <button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick('bad')}>
        Bad
      </button>
    </>
  );
};
