import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function NewsPage(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(41);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-06">
        <div className="container">
          <p className="d-flex ai-center text-sm color-white">
            Home <ChevronRight size="15" className="ml-2 mr-2" /> News
          </p>
          <h3 className="fw-800 mt-2 color-white">News</h3>
          <div className="ss-sep-01 bg-white mt-4"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2>Product Update</h2>
          <div className="ss-sep-01 bg-p mt-4"></div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
              '/assets/img/bg/25.png',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2>Event</h2>
          <div className="ss-sep-01 bg-p mt-4"></div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
              '/assets/img/bg/26.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2>CSR</h2>
          <div className="ss-sep-01 bg-p mt-4"></div>
          <div className="grids pt-1">
            {[
               '/assets/img/bg/27.jpg',
               '/assets/img/bg/27.jpg',
               '/assets/img/bg/27.jpg',
               '/assets/img/bg/27.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(NewsPage);
