import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function CompanyAbout(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(21);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-news-01 d-flex ai-center">
        <div className="container">
          <p className="d-flex ai-center text-small color-white">
            Home <ChevronRight size="15" className="ml-2 mr-2" /> About Us
          </p>
          <h3 className="fw-800 mt-2 color-white">About Us</h3>
          <div className="ss-sep-01 bg-white mt-4"></div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(CompanyAbout);
