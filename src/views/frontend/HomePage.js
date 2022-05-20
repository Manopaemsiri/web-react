import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock } from "react-feather";
import { onMounted } from "../../helpers/frontend";

import SectionBanner from "../../components/SectionBanner";
import SpecialImage from "../../components/SpecialImage";
import TextTitle from "../../components/TextTitle";

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";


function HomePage(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(0);
    props.setTopnavActiveIndex(1);
  }, []);
  /* eslint-enable */

  return (
    <>
      <SectionBanner />

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
            <TextTitle title="ITOM" />
            <p className="lg mt-5 color-gray">
              IT operations management (ITOM) is the administrative area
              involving technology infrastructure components and the
              requirements of individual applications, services, storage,
              networking and connectivity elements within an organization.
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
            <TextTitle title="ITOM Use Case" />
            <p className="lg mt-5 color-gray">
              Netka’s ITOM use cases. How to apply Netka’s products and solution
              in your industry
            </p>
          </div>
          <div className="grids pt-1">
            {[
              "/assets/img/bg/02.jpg",
              "/assets/img/bg/03.jpg",
              "/assets/img/bg/04.jpg",
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
                <TextTitle title="AIOps" colorClasser="color-white" />
                <p className="lg color-white op-80 mt-5">
                  AIOps, or Artificial Intelligence for IT Operations, is the
                  next generation of IT operations analytics.
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
                <SpecialImage
                  image="/assets/img/bg/07.jpg"
                  classer="no-hover"
                />
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
                <TextTitle title="Network Management" />
                <p className="lg mt-5 color-gray">
                  The purpose of IT infrastructure management (ITIM) is to
                  provide managing, operation and control of the installed IT
                  infrastructure which generally involve hardware: servers &
                  storage, software, application and networking in both physical
                  and virtual environments.Operations, is the next generation of
                  IT operations analytics.
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
                <SpecialImage
                  image="/assets/img/bg/08.jpg"
                  classer="no-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <TextTitle title="Netka's Network Management News" />
            <p className="lg mt-5 color-gray">
              Netka News, the activities of Netka System, what we do to our
              customers and public
            </p>
          </div>
          <div className="grids pt-1">
            {[
              "/assets/img/bg/14.jpg",
              "/assets/img/bg/13.jpg",
              "/assets/img/bg/12.jpg",
              "/assets/img/bg/10.jpg",
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-25 md-50 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <div className="mt-3">
                    <Link
                      className="p lg fw-600 h-color-p"
                      to={`/content/${i}`}
                    >
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
            <TextTitle title="Netka 's Network Management Testimonials" />
          </div>
          <div className="grids pt-1">
            {["/assets/img/bg/09.jpg", "/assets/img/bg/02.jpg"].map((d, i) => (
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
        className="section-05 bg-sm bg-fixed section-padding"
        style={{ backgroundImage: `url('/assets/img/bg/06.jpg')` }}
      >
        <div
          className="bg-filter"
          style={{ background: "rgba(0,0,0,0)" }}
        ></div>
        <div className="container">
          <div className="ss-text-wrapper lg text-center color-white">
            <TextTitle
              title="Netka 's ITOM Solutions, Who we are"
              colorClasser="color-white"
            />
            <p className="lg op-70 mt-5">
              Netka, an expertized Independent Software Vendor (ISV),
              exceptionally in developing software for network management. Our
              trustworthy is accredited from many world-class aviation airports,
              includes the advanced ISP for their working applications.
            </p>
            <p className="lg op-70 mt-4">
              Netka’s software have extended over IT Operations Management
              (ITOM) : IT Infrastructure Management (ITIM) – covers for servers,
              storage, networking, network linking and network connecting
              devices. Netka’s software incorporate application and service
              varieties by working consistently on the centralized management
              basis. Besides, Netka also provide IT Service Management (ITSM)
              which is certified by the ITIL.
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(HomePage);
