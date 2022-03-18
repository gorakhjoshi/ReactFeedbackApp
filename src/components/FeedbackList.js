import FeedbackData from '../data/FeedbackData';

function FeedbackList() {
  return (
    <div>
      {FeedbackData.map((item) => (
        <div key={item.id}>
          <div className='card'>
            <h2>{item.rating}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
