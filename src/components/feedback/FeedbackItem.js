import React from 'react';
import Card from '../common/Card';

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <p>{item.text}</p>
    </Card>
  );
};

export default FeedbackItem;
