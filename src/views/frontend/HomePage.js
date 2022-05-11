import { Link } from "react-router-dom";

function HomePage() {
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
              <div className="text-container">
                <h5 className="fw-400 color-white">
                  AIOPS ITOM ITIL ITSM IoT BI
                </h5>
              </div>
            </div>
            <div className="grid lg-25 md-30 sm-100 mt-0">
              <div className="btn-container">
                <Link to="/" className="btn btn-action btn-s">
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-03 section-padding">
        <div className="container">
          <h2 className="fw-600 color-s text-center">ITOM</h2>
          <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
          <p className="text-center mt-5">
            IT operations management (ITOM) is the administrative area involving
            technology infrastructure components and the requirements of
            individual applications, services, storage, networking and
            connectivity elements within an organization.
          </p>
          <div className="text-center mt-6">
            <Link to="/" className="btn btn-action btn-p">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      <section className="section-04 section-padding">
        <div className="container">
          <h2 className="text-center color-s">ITOM Use Case</h2>
          <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
          <p className="text-center mt-5">
            Netka’s ITOM use cases. How to apply Netka’s products and solution
            in your industry
          </p>
          <div className="grids">
            <div className="grid md-1-3 sm-100">
              <img src="/assets/img/bg/02.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h5 className="fw-600 mt-4">
                MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
              </h5>
              <p className="mt-2">March 24, 2020</p>
            </div>
            <div className="grid md-1-3 sm-100">
              <img src="/assets/img/bg/03.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h5 className="fw-600 mt-4">
                ENHANCE YOUR CCTV/IP <br />
                SURVEILLANCE SYSTEM
              </h5>
              <p className="mt-2">March 24, 2020</p>
            </div>
            <div className="grid md-1-3 sm-100">
              <img src="/assets/img/bg/04.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h5 className="fw-600 mt-4">
                AUTOMATE AND MONITOR <br />
                YOUR IT OPERATIONS
              </h5>
              <p className="mt-2">March 24, 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-05 section-padding bg-p">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid md-50 sm-100">
              <h2 className="section-05_title fw-700 text-center">AIOps</h2>
              <p className="text-center mt-5">
                AIOps, or Artificial Intelligence for IT Operations, is the next
                generation of IT operations analytics.
              </p>
              <div className="text-center mt-6">
                <Link to="/" className="btn btn-action btn-s">
                  VIEW MORE
                </Link>
              </div>
            </div>
            <div className="grid md-50 sm-100">
              <img src="/assets/img/bg/07.jpg" className="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-06 section-padding">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid md-50 sm-100">
              <img src="/assets/img/bg/08.jpg" className="img" />
            </div>
            <div className="grid md-50 sm-100">
              <h2 className="text-center">Network Management</h2>
              <p className="text-center mt-5">
                The purpose of IT infrastructure management (ITIM) is to provide
                managing, operation and control of the installed IT
                infrastructure which generally involve hardware: servers &
                storage, software, application and networking in both physical
                and virtual environments.
              </p>
              <div className="text-center mt-6">
                <Link to="/" className="btn btn-action btn-p">
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-07 section-padding">
        <div className="container">
          <div className="text-center">
            <h3>Netka 's Network Management News</h3>
            <div className="ss-sep-01 ss-sep-center bg-p mt-6"></div>
            <p className="mt-5 mb-2">
              Netka News, the activities of Netka System, what we do to our
              customers and public
            </p>
          </div>
          <div className="grids">
            <div className="grid md-25 sm-100">
              <img src="/assets/img/bg/14.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">
                <Link to="/">ENHANCE YOUR CCTV/IP SURVEILLANCE SYSTEM</Link>
              </h4>
              <p>March 24, 2020</p>
            </div>
            <div className="grid md-25 sm-100">
              <img src="/assets/img/bg/13.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">
                <Link to="/">ENHANCE YOUR CCTV/IP SURVEILLANCE SYSTEM</Link>
              </h4>
              <p>March 24, 2020</p>
            </div>
            <div className="grid md-25 sm-100">
              <img src="/assets/img/bg/12.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">
                <Link to="/">ENHANCE YOUR CCTV/IP SURVEILLANCE SYSTEM</Link>
              </h4>
              <p>March 24, 2020</p>
            </div>
            <div className="grid md-25 sm-100">
              <img src="/assets/img/bg/10.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">
                <Link to="/">ENHANCE YOUR CCTV/IP SURVEILLANCE SYSTEM</Link>
              </h4>
              <p>March 24, 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-08 section-padding">
        <div className="container">
          <h3 className="text-center color-s">Netka 's Network Management & IT Service management Testimonials</h3>
          <div className="ss-sep-01 ss-sep-center bg-p mt-6"></div>
          <div className="grids mt-4">
            <div className="grid md-50 sm-100">
              <img src="/assets/img/bg/09.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">AMARIN BOOK CENTER REVEALS NETKAQUARTZ SERVICE DESK IS WORKING BEYOND THEIR EXPECTATIONS</h4>
              <p>March 24, 2020</p>
            </div>
            <div className="grid md-50 sm-100">
              <img src="/assets/img/bg/02.jpg" className="img" />
              <div className="ss-sep-01 bg-p mt-6"></div>
              <h4 className="fw-600 mt-4">KSC USES NNM MOBILE APP TO PREPARE FOR CHANGING BUSINESS LANDSCAPE</h4>
              <p>March 24, 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-09 section-padding d-flex ai-center">
        <div className="container">
              <h2 className="color-white text-center">Netka 's ITOM Solutions, Who we are</h2>
              <div className="ss-sep-01 ss-sep-center bg-p mt-6"></div>
              <p className="text-center mt-5">
                Netka, an expertized Independent Software Vendor (ISV),
                exceptionally in developing software for network management. Our
                trustworthy is accredited from many world-class aviation
                airports, includes the advanced ISP for their working
                applications.
              </p>
              <p className="text-center mt-5">
                Netka’s software have extended over IT Operations Management
                (ITOM) : IT Infrastructure Management (ITIM) – covers for
                servers, storage, networking, network linking and network
                connecting devices. Netka’s software incorporate application and
                service varieties by working consistently on the centralized
                management basis. Besides, Netka also provide IT Service
                Management (ITSM) which is certified by the ITIL.
              </p>
              <div className="text-center mt-5">
                <Link to="/" className="btn btn-action btn-p">
                  GET A QUOTE
                </Link>
              </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
