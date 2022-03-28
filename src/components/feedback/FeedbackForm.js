import { useState } from 'react';
import Card from '../common/Card';
import Button from './../common/Button';

const FeedbackForm = () => {
  console.log('Running');
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function handleInputText(e) {
    setText(e.target.value);

    if (e.target.value === '' || e.target.value.trim().length <= 5) {
      setDisabled(true);
      setMessage('Text should be greater than 5 character');
    } else {
      setDisabled(false);
      setMessage('');
    }
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
          <Button type='submit' version='primary' isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
