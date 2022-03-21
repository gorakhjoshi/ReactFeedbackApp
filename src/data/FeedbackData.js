import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4());

console.log();

const FeedbackData = [
  {
    id: uuidv4(),
    rating: 10,
    text: 'I am of rating 8',
  },
  {
    id: uuidv4(),
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid dolores dolor obcaecati totam! Maiores cumque beatae vero minus perferendis?',
  },
  {
    id: uuidv4(),
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid dolores dolor obcaecati totam! Maiores cumque beatae vero minus perferendis?',
  },
];

export default FeedbackData;
