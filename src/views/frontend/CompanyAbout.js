import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import SpecialImage from "../../components/SpecialImage";
import { Clock } from "react-feather";
import { Link } from "react-router-dom";
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
      <section className="section-news-01 d-flex ai-center">
        <div className="container">
          <p className="d-flex ai-center text-small color-white">
            Home <ChevronRight size="15" className="ml-2 mr-2" /> About Us
          </p>
          <h3 className="fw-800 mt-2 color-white">About Us</h3>
          <div className="ss-sep-01 bg-white mt-4"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grids">
            <div className="grid md-50">
              <div className="text-wrapper">
                <h3>About Netka</h3>
                <div className="ss-sep-01 bg-p mt-3"></div>
                <p className="mt-3">
                  We strives to build creative solutions for IT Operation
                  management solutions which represent IT infrastructure
                  management (ITIM) and IT service management (ITSM) that
                  empower our customers to run their businesses smoothly and
                  generate more revenue streams
                </p>
              </div>
            </div>
            <div className="grid md-50">
              <div className="ss-img">
                <div className="img-bg">
                  <img src="/assets/img/bg/52.jpg" className="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
           <div className="grids">
             <div className="grid md-50">
                <h3>Our Story</h3>
                <div className="ss-sep-01"></div>
                
             </div>
             <div className="grid md-50">

             </div>
           </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(CompanyAbout);
