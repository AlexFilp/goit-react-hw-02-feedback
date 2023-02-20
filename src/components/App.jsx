import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleInc = status => {
    this.setState(prevState => ({
      [status]: prevState[status] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    if (total > 0 && good === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const percentage = this.countPositiveFeedbackPercentage(total, good);
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
            positivePercentage={percentage}
          />
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
