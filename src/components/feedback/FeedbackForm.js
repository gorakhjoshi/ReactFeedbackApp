import { useState } from 'react';
import Card from '../common/Card';
import Button from './../common/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  function handleInputText(e) {
    console.log(e);
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h3>Please type your feedback below.</h3>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write your review'
            onChange={handleInputText}
          />
          <Button type='submit' version='primary'>
            Send
          </Button>
        </div>
        {text}
      </form>
    </Card>
  );
};

export default FeedbackForm;
