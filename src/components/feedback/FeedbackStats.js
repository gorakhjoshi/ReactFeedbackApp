import React from 'react';
import { PropTypes } from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  const average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h3> Average Rating: {average}</h3>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
