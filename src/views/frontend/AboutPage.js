import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { ChevronRight } from "react-feather";
import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function CompanyAbout(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(51);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-06">
        <div className="container">
          <p className="d-flex ai-center text-sm color-white">
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
