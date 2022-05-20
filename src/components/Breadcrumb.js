import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';


function Breadcrumb(props) {
  return (
    <section 
      className={`section-06 ${!props.bgImage? 'bg-p': ''}`} 
      style={{ backgroundImage: props.bgImage
        ? `url('${props.bgImage}')`: 'none' }} 
    >
      <div className="container">
        <div className="d-flex ai-center fw-wrap p text-sm color-white">
          <Link to="/" className="d-flex h-color-p mr-2 mb-1">Home</Link> 
          {props.structure.map((d, i) => (
            <Fragment key={`structure_${i}`}>
              {d.goTo? (
                <Link to={d.goTo} className="d-flex ai-center h-color-p mr-2 mb-1">
                  <ChevronRight size="15" className="mr-2" /> {d.title}
                </Link>
              ): (
                <div className="d-flex ai-center mr-2 mb-1">
                  <ChevronRight size="15" className="mr-2" /> {d.title}
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <h2 className="fw-500 mt-4 color-white">{props.title}</h2>
        <div className="ss-sep-01 bg-white mt-3"></div>
      </div>
    </section>
  );
}

Breadcrumb.defaultProps = {
	bgImage: '',
  structure: []
};
Breadcrumb.propTypes = {
  bgImage: PropTypes.string,
  structure: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default Breadcrumb;