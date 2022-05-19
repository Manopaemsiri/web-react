import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import SpecialImage from "../../components/SpecialImage";

import SubTitle from "../../components/SubTitle";
import TextTitle from "../../components/TextTitle";

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function ProductsPage03(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(23);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section
        className="section-05 bg-fixed section-padding"
        style={{ backgroundImage: `url('/assets/img/bg/58.jpg')` }}
      >
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h1 className="color-white fw-700 lh-sm xs-no-br">
              Netka AIOps Director <br />
              The Ultimate AIOps Solution
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <TextTitle title="Network Analysis" />
            <h4 className="mt-4">Network Tools and Network Monitoring Tool</h4>
            <p className="mt-4 color-gray">
              NNMX is an intelligent IT infrastructure management which is a
              part of Netka’s IT operations management solution to provide the
              innovative managing multi-vendor IP network, Security, Server,
              Application, Virtual machine, WLAN, CCTV, IP Surveillance, IoT
              sensor, and etc.
            </p>
          </div>
          <div className="grids mt-6">
            <div className="grid md-20 xs-50">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p className="fw-500">Server & Application</p>
              </div>
            </div>
            <div className="grid md-20 xs-50">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p className="fw-500">Server & Application</p>
              </div>
            </div>
            <div className="grid md-20 xs-50">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p className="fw-500">Server & Application</p>
              </div>
            </div>
            <div className="grid md-20 xs-50">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p className="fw-500">Server & Application</p>
              </div>
            </div>
            <div className="grid md-20 xs-50">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p className="fw-500">Server & Application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <SubTitle
              subTitle="Why NNMX - See Our Use Cases"
              isCentered={true}
            />
            <p className="mt-4 color-gray">
              NNMX is able to provide more insight into IT network performance
              and connectivity. Below are example of use case scenarios to see
              how our NNMX can solve your network issues and improve your
              business performance and productivity.
            </p>
          </div>
          <div className="grids">
            {[
              "/assets/img/bg/53.jpg",
              "/assets/img/bg/53.jpg",
              "/assets/img/bg/53.jpg",
              "/assets/img/bg/53.jpg",
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-25 md-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <div className="ss-text-wrapper">
                      <Link
                        className="h6 fw-600 h-color-p"
                        to={`/content/${i}`}
                      >
                        MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                      </Link>
                      <p className="color-gray mt-2">
                        One of the important physical security is used by most
                        everyone, whether it is a private installatio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-wrapper mt-6 text-center pt-6">
            <Link to="/" className="btn btn-action btn-p">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section-05 bg-fixed bg-sm"
        style={{ backgroundImage: `url('/assets/img/bg/23.jpg')` }}
      >
        <div className="ss-text-wrapper text-center">
          <h1 className="color-white text-center">
            Netka AIOps Director <br />
            The Ultimate AIOps Solution
          </h1>
        </div>
      </section>

      <section className="section-08 section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <SubTitle
              subTitle="Technologies And Innovations"
              isCentered={true}
            />
            <p className="mt-4 color-gray">
              NNMX is a major change of NetkaView Network Manager (NNM) with new
              technologies, those make the NNMX more intelligent ever,
              combination with new GUI design,various types of feature that can
              address your needs.
            </p>
          </div>

          <div className="grids mt-0 pt-6">
            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/46.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/47.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/48.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/49.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/50.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg-1-3 md-50 sm-50 xs-100">
              <div className="grid mt-0">
                <div className="item-card">
                  <div className="icon-wrapper">
                    <img src="/assets/img/bg/51.png" />
                  </div>
                  <div className="text-wrapper color-gray">
                    <h6 className="fw-500 h-color-p color-dark">
                      Multi-X Management
                    </h6>
                    <p className="mt-2">
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Vendor
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Networking technologies
                    </p>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-OS platform
                    </p>

                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multi-Scale infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-10 section-padding bg-s">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <TextTitle
              title="Network Monitoring Hardware"
              colorClasser="color-white"
            />
            <p className="mt-4">
              NNMX Appliance is a hardware-based platform for small to medium
              size IT infrastructure. The solution provides comprehensive
              enterprise functionalities to manage multi-vendor IP networking
              and security devices, servers, applications, etc.
            </p>
          </div>
          <div className="grids ai-center mt-6 pt-6">
            <div className="grid lg-50 sm-100">
              <div className="image-wrapper">
                <img src="/assets/img/bg/40.png" className="img" />
              </div>
            </div>
            <div className="grid lg-50 sm-100 m-0">
              <div className="ss-text-wrapper xs">
                <SubTitle subTitle="Discover Music" colorClasser="color-white"/>
                <p className="mt-3">
                  <ChevronRight size="15" className="mr-2 chevron" /> Plug and
                  Play
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Perfect
                  match for small to medium size
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> IT network
                  infrastructure
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Bundled
                  with smart features and 400+ out-of-the-box reports
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Lower cost
                  of IT operations while enhance administrator’s tasks
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Comes with
                  stable and high performance compact server
                </p>
                <p className="mt-3">
                  <ChevronRight size="15" className="mr-2 chevron" /> Plug and
                  Play
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Perfect
                  match for small to medium size
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> IT network
                  infrastructure
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Bundled
                  with smart features and 400+ out-of-the-box reports
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Lower cost
                  of IT operations while enhance administrator’s tasks
                </p>
                <p>
                  <ChevronRight size="15" className="mr-2 chevron" /> Comes with
                  stable and high performance compact server
                </p>
                <div className="btn-wrapper mt-6 pl-3">
                  <Link to="/" className="btn btn-action btn-p">
                    GET A QUOTE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper color-gray">
            <SubTitle subTitle="Get Connected" />
            <p>Get yourself ready for an awesome experience with NNMX</p>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(ProductsPage03);
