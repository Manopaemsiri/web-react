import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';

import { connect } from 'react-redux';
import { setTopnavActiveIndex } from '../../actions/general.actions';


function HomePage(props) {

  /* eslint-disable */
	useEffect(() => { props.setTopnavActiveIndex(1); }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-01">
        <div className="slide-container">
          <div className="slides">
            <div className="slide">
              <div
                className="wrapper"
                style={{ backgroundImage: `url('/assets/img/bg/05.jpg')` }}
              >
                <div className="container">
                  <div className="text-wrapper">
                    <h5 className="fw-700 color-s">
                      NetkaView Network Manager
                    </h5>
                    <h2 className="fw-600 color-p xs-no-br mt-5">
                      The perfect ITSM Solutions, Now <br />
                      with ITIL Certification
                    </h2>
                    <div className="ss-sep-01 bg-s mt-3"></div>
                    <h6 className="fw-700 mt-4">
                      IT service desk solution to help <br /> youdeliver the
                      best IT support to <br /> customers
                    </h6>
                  </div>
                  <div className="btns pt-4">
                    <Link to="/" className="btn btn-action btn-p">
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-02 bg-p">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid lg-75 md-70 sm-100 mt-0">
              <div className="text-wrapper">
                <h5 className="fw-400 color-white">
                  AIOPS ITOM ITIL ITSM IoT BI
                </h5>
              </div>
            </div>
            <div className="grid lg-25 md-30 sm-100 mt-0">
              <div className="btn-wrapper">
                <Link to="/" className="btn btn-action btn-s">
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h2 className="fw-600 color-s">ITOM</h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
            <p className="lg color-gray mt-5">
              IT operations management (ITOM) is the administrative area involving
              technology infrastructure components and the requirements of
              individual applications, services, storage, networking and
              connectivity elements within an organization.
            </p>
            <div className="mt-6 pt-1">
              <Link to="/" className="btn btn-action btn-p">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h2 className="fw-600 color-s">ITOM Use Case</h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
            <p className="lg color-gray mt-5">
              Netka’s ITOM use cases. How to apply Netka’s products and solution
              in your industry
            </p>
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/02.jpg',
              '/assets/img/bg/03.jpg',
              '/assets/img/bg/04.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-1-3 md-50 sm-50">
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

      <section className="section-03 section-padding bg-s">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid lg-50 sm-100 mt-0">
              <div className="ss-text-wrapper xs text-center">
                <h2 className="fw-600 color-white">AIOps</h2>
                <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
                <p className="lg color-white op-80 mt-5">
                  AIOps, or Artificial Intelligence for IT Operations, is the next
                  generation of IT operations analytics.
                </p>
                <div className="mt-6 pt-1">
                  <Link to="/" className="btn btn-action btn-p">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid lg-50 sm-100 mt-0">
              <div className="img-wrapper">
                <SpecialImage image="/assets/img/bg/07.jpg" classer="no-hover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-03 reverse section-padding">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid lg-50 sm-100 mt-0">
              <div className="ss-text-wrapper xs text-center">
                <h2 className="fw-600">Network Management</h2>
                <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
                <p className="lg color-gray mt-5">
                  The purpose of IT infrastructure management (ITIM) is to provide
                  managing, operation and control of the installed IT
                  infrastructure which generally involve hardware: servers &
                  storage, software, application and networking in both physical
                  and virtual environments.Operations, is the next
                  generation of IT operations analytics.
                </p>
                <div className="mt-6 pt-1">
                  <Link to="/" className="btn btn-action btn-p">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid lg-50 sm-100 mt-0">
              <div className="img-wrapper">
                <SpecialImage image="/assets/img/bg/08.jpg" classer="no-hover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h2 className="fw-600">Netka's Network Management News</h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
            <p className="lg color-gray mt-5">
              Netka News, the activities of Netka System, what we do to our
              customers and public
            </p>
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/14.jpg',
              '/assets/img/bg/13.jpg',
              '/assets/img/bg/12.jpg',
              '/assets/img/bg/10.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-25 md-50 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <div className="mt-3">
                    <Link className="p lg fw-600 h-color-p" to={`/content/${i}`}>
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
          <div className="ss-text-wrapper text-center">
            <h2 className="fw-600 color-s">
              Netka 's Network Management Testimonials
            </h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/09.jpg',
              '/assets/img/bg/02.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-50 md-50 sm-50">
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

      <section 
        className="section-09 section-padding" 
        style={{ backgroundImage: `url('/assets/img/bg/06.jpg')` }}
      >
        <div className="bg-filter" style={{ background: 'rgba(0,0,0,0)' }}></div>
        <div className="container pos-relative">
          <div className="ss-text-wrapper lg text-center color-white">
            <h2 className="fw-600">
              Netka 's ITOM Solutions, Who we are
            </h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-2"></div>
            <p className="lg op-70 mt-5">
              Netka, an expertized Independent Software Vendor (ISV),
              exceptionally in developing software for network management. Our
              trustworthy is accredited from many world-class aviation
              airports, includes the advanced ISP for their working
              applications.
            </p>
            <p className="lg op-70 mt-4">
              Netka’s software have extended over IT Operations Management
              (ITOM) : IT Infrastructure Management (ITIM) – covers for
              servers, storage, networking, network linking and network
              connecting devices. Netka’s software incorporate application and
              service varieties by working consistently on the centralized
              management basis. Besides, Netka also provide IT Service
              Management (ITSM) which is certified by the ITIL.
            </p>
            <div className="mt-6 pt-1">
              <Link to="/" className="btn btn-action btn-p">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex
})(HomePage);