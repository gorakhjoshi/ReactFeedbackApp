import React from 'react';

const FeedbackItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
