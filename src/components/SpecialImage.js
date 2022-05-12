import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function SpecialImage(props) {
  return props.goTo? (
    <Link to={props.goTo} className={`ss-img ${props.classer}`}>
      <div className="img-bg" style={{ backgroundImage: `url('${props.image}')` }}></div>
    </Link>
  ): (
    <div className={`ss-img ${props.classer}`}>
      <div className="img-bg" style={{ backgroundImage: `url('${props.image}')` }}></div>
    </div>
  );
}

SpecialImage.defaultProps = {
	classer: '',
  goTo: ''
};
SpecialImage.propTypes = {
  image: PropTypes.string.isRequired,
  classer: PropTypes.string,
  goTo: PropTypes.string
};

export default SpecialImage;
