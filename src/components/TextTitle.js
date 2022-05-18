import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function TextTitle(props) {
  return (
    <>
      <h2 className={`
        fw-600 
        ${props.isCentered? 'text-center': ''} 
        ${props.colorClasser}`}>
        {props.title}
      </h2>
      <div className={`
        ss-sep-01 bg-p mt-2 
        ${props.isCentered? 'ss-sep-center': ''}`} 
      ></div>
    </>
  );
}

TextTitle.defaultProps = {
  isCentered: true,
  colorClasser: 'color-s'
};
TextTitle.propTypes = {
  isCentered: PropTypes.bool,
  title: PropTypes.string.isRequired,
  colorClasser: PropTypes.string
};

export default TextTitle;
