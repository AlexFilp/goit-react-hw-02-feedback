import { Container, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <Container>
      <Btn type="button" onClick={() => onClick('good')}>
        Good
      </Btn>
      <Btn type="button" onClick={() => onClick('neutral')}>
        Neutral
      </Btn>
      <Btn type="button" onClick={() => onClick('bad')}>
        Bad
      </Btn>
    </Container>
  );
};
