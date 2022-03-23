import PropTypes from 'prop-types';

const Card = ({ children, isThereColor }) => {
  return (
    <div
      className='card'
      style={{
        backgroundColor: isThereColor ? 'rgba(0,0,0,0.4)' : 'white',
        color: isThereColor ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  isThereColor: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isThereColor: PropTypes.bool,
};

export default Card;
