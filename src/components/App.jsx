import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleInc = status => {
    this.setState(prevState => ({
      [status]: prevState[status] + 1,
      total: prevState.total + 1,
      positivePercentage: this.getPercentage(
        prevState.total + 1,
        status === 'good' ? prevState.good + 1 : prevState.good
      ),
    }));
  };

  getPercentage = (total, good) => {
    if (total > 0 && good === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div
        style={{
          padding: 30,
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Please leave a feedback">
          <FeedbackOptions onClick={this.handleInc} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework
//     </div>
//   );
// };
