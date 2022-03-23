import React from 'react';
import Card from '../common/Card';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <p>{item.text}</p>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
    </Card>
  );
};

export default FeedbackItem;
