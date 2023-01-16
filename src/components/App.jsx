import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { NotificationMessage } from './NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedBack = () => {
    return good + bad + neutral;
  };

  const handleState = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedBack()
      ? ((100 * good) / countTotalFeedBack()).toFixed(1)
      : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleState} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedBack() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedBack}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
