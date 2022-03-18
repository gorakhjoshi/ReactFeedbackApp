import PropTypes from 'prop-types';

function Header({ text, bgColor }) {
  const style = {
    backgroundColor: bgColor,
  };

  return (
    <div style={style}>
      <h2>{text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: 'I am a header default prop!',
  bgColor: 'hsl(80deg 100% 50%)',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
