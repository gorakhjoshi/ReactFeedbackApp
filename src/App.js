import Header from './components/Header';
import FeedbackList from './components/feedback/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => {
          console.log(item);
          return item.id !== id;
        })
      );
    } else {
      console.log('Nothing deleted!');
    }
  }

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
};

export default App;
