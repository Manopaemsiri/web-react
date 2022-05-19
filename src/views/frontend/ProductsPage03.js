import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import SpecialImage from "../../components/SpecialImage";

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

import TextTitle from "../../components/TextTitle";
import SubTitle from "../../components/SubTitle";

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
        className="section-pro-03 section-padding d-flex ai-center jc-center"
        style={{ backgroundImage: `url('/assets/img/bg/17.jpg')` }}
      >
        <div
          className="bg-filter"
          style={{ background: "rgba(0,0,0,0)" }}
        ></div>
        <div className="container">
          <h1 className="color-white fw-800 text-center">
            Netka AIOps Director <br />
            The Ultimate AIOps Solution
          </h1>
        </div>
      </section>

      <section className="section-pro-04 section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h2>Network Analysis</h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
            <h4 className="mt-4">Network Tools and Network Monitoring Tool</h4>
            <h6>NNMX IT Infrastructure Management and Network Monitoring</h6>
            <p className="mt-4">
              NNMX is an intelligent IT infrastructure management which is a
              part of Netka’s IT operations management solution to provide the
              innovative managing multi-vendor IP network, Security, Server,
              Application, Virtual machine, WLAN, CCTV, IP Surveillance, IoT
              sensor, and etc.
            </p>
          </div>
          <div className="grids mt-6">
            <div className="grid md-20">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p>Server & Application</p>
              </div>
            </div>
            <div className="grid md-20">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p>Server & Application</p>
              </div>
            </div>
            <div className="grid md-20">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p>Server & Application</p>
              </div>
            </div>
            <div className="grid md-20">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p>Server & Application</p>
              </div>
            </div>
            <div className="grid md-20">
              <div className="text-center">
                <img src="/assets/img/bg/35.png" width="80" />
                <p>Server & Application</p>
              </div>
            </div>
          </div>

          {/*
          <div className="d-flex ai-center jc-center mt-6 pt-6">
            <img src="/assets/img/bg/40.png" width="500" />
          </div>
           */}
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
          <SubTitle subTitle="Why NNMX - See Our Use Cases"/>
            <p className="mt-4">
              NNMX is able to provide more insight into IT network performance
              and connectivity. Below are example of use case scenarios to see
              how our NNMX can solve your network issues and improve your
              business performance and productivity.
            </p>
          </div>
          <div className="grids">
            {[
              "/assets/img/bg/32.jpg",
              "/assets/img/bg/32.jpg",
              "/assets/img/bg/32.jpg",
              "/assets/img/bg/32.jpg",
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <p>
                      One of the important physical security is used by most
                      everyone, whether it is a private installatio
                    </p>
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
        className="section-pro-02 section-padding d-flex ai-center jc-center"
        style={{ backgroundImage: `url('/assets/img/bg/23.jpg')` }}
      >
        <div className="ss-text-wrapper text-center">
        <SubTitle subTitle="Intelligent IT Infrastructure Management Solutions" colorClasser={'color-white'}/>

          <p>
            NNMX provides Fault, Configuration, Accounting, Performance and
            Security management (FCAPS) that is aligned with ITU-T M.3040 (TMN)
            which is a standard ISO network management framework.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
          <SubTitle subTitle="Technologies And Innovations" isCentered={true}/>
            <p className="mt-4">
              NNMX is a major change of NetkaView Network Manager (NNM) with new
              technologies, those make the NNMX more intelligent ever,
              combination with new GUI design, easily to use, various types of
              feature that can address your needs.
            </p>
          </div>
          <div className="grids mt-6">
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/46.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
                  </p>

                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Scale infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/47.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
                  </p>

                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Scale infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/48.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
                  </p>

                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Scale infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grids mt-6">
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/49.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
                  </p>

                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Scale infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/50.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
                  </p>

                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Scale infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="grids">
                <div className="grid md-20">
                  <img src="/assets/img/bg/51.png" />
                </div>
                <div className="grid md-80 pl-3">
                  <h6>Multi-X Management</h6>
                  <div className="mt-4"></div>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Vendor
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" />{" "}
                    Multi-Networking technologies
                  </p>
                  <p>
                    <ChevronRight size="15" className="mr-2 chevron" /> Multi-OS
                    platform
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
      </section>

      <section className="section-padding bg-s">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h2 className="color-white">Network Monitoring Hardware</h2>
            <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
            <p className="mt-4">
              NNMX Appliance is a hardware-based platform for small to medium
              size IT infrastructure. The solution provides comprehensive
              enterprise functionalities to manage multi-vendor IP networking
              and security devices, servers, applications, etc.
            </p>
          </div>
          <div className="grids mt-6 pt-6">
            <div className="grid md-50">
              <img src="/assets/img/bg/40.png" className="img" />
            </div>
            <div className="grid md-50 m-0">
              <div className="pl-3">
                <h3 className="color-white">Discover Music</h3>
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
          <div className="ss-text-wrapper">
            <h3>Get Connected</h3>
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
