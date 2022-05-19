import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import SpecialImage from "../../components/SpecialImage";

import SubTitle from "../../components/SubTitle";
import TextTitle from "../../components/TextTitle";

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function ProductsPage02(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(22);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section
        className="section-05 bg-fixed section-padding"
        style={{ backgroundImage: `url('/assets/img/bg/55.jpg')` }}
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

      <section className="section-07 section-padding">
        <div className="container">
          <TextTitle title="Log Management" />
          <div className="ss-text-wrapper text-center mt-4">
            <h4>Powerful Event Log Analysis & SIEM</h4>
            <h6 className="mt-3">NetkaView Logger</h6>
            <p className="mt-4 color-gray">
              NLG is an appliance designed to receive and analyze all kind of IT
              logs including network log, system log, application log, security
              log and log files.
            </p>
          </div>

          <div className="grids mt-6 ">
            <div className="grid lg-50 sm-100">
              <div className="img-wrapper">
                <SpecialImage
                  image="/assets/img/bg/31.jpg"
                  classer="no-hover"
                />
              </div>
              <div className="ss-text-wrapper color-gray">
                <p className="mt-3 lh-lg">
                  <span className="fw-700">NetkaView Logger (NLG) </span>is designed to receive and analyze all
                  kind of IT network traffics and logs using packet analysis
                  technology (Deep Packet Inspection: DPI) and is also a
                  centralized log management solution that helps to deal with
                  large amounts of IT device-generated syslog messages. NLG
                  supports log collection, centralized aggregation, long-term
                  retention, log search and reporting. NLG can receive and manage
                  events and logs from various platforms in your IT Infrastructure
                  such as network devices, router, switch, wireless AP, servers,
                  storages, applications, IT security devices, firewall, IPS/IDS,
                  NAC. NLG have many event management tools
                </p>
              </div>
            </div>
            <div className="grid lg-50 sm-100 m-0">
              <div className="ss-text-wrapper xs color-gray">
                <SubTitle subTitle="Product Highlights" />
                <ul>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Centralized Log Repository
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Real-time web based log monitoring and analysis
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Real-time web based packet/flow analysis and data
                      visualization
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Gain
                      visibility & insight into your IT infrastructure
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Fault
                      & Performance Management
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Security Information and Event Management (SIEM)
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Network Performance Monitoring
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Supports agent-based and agentless Log collection
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Customizable Log Parsing
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Customizable BI Dashboard
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Multiple Predefined Reports
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> IT &
                      Computer Act Compliances
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Threat
                      Detection & Security Alert
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Supports alerting via Email and LINE
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Centralized Log Repository
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Real-time web based log monitoring and analysis
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" />{" "}
                      Real-time web based packet/flow analysis and data
                      visualization
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Gain
                      visibility & insight into your IT infrastructure
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Supports alerting via Email and LINE
                    </p>
                  </li>
                  <li>
                    <p>
                      <ChevronRight size="15" className="mr-2 chevron" /> Gain
                      visibility & insight into your IT infrastructure
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper">
          <SubTitle subTitle="Why NLG - See Our Use Cases" isCentered={true} />
          <div className="ss-text-wrapper text-center">
            <p className="mt-4 color-gray">
              NLG is able to provide more insight into IT network performance
              and connectivity. Below are example of use case scenarios to see
              how our NLG can solve your network issues and improve your
              business performance and productivity.
            </p>
          </div>
          </div>
          <div className="grids mt-4">
            {[
              "/assets/img/bg/32.jpg",
              "/assets/img/bg/32.jpg",
              "/assets/img/bg/32.jpg",
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-1-3 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="btn-wrapper mt-6">
                      <Link to="/" className="btn btn-action btn-p">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-05 bg-fixed bg-sm"
        style={{ backgroundImage: `url('/assets/img/bg/23.jpg')` }}
      >
        <h1 className="color-white text-center">
          Netka AIOps Director <br />
          The Ultimate AIOps Solution
        </h1>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center color-gray">
            <SubTitle subTitle="Solution Deployment" isCentered={true} />
            <p className="mt-3">
              Solution Deployment enables you to fully deploy solution
              definitions and installation packages (IPs) to remote locations.
            </p>
          </div>
          <div className="grids">
            {[
              "/assets/img/bg/33.png",
              "/assets/img/bg/33.png",
              "/assets/img/bg/33.png",
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-1-3 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="mt-3">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      Packet Analyzer Mode
                    </Link>
                    <div className="ss-sep-01 bg-p mt-2"></div>
                    <p className="mt-2 color-gray">
                      Receiving the data from IT network by capture traffic via
                      Port mirroring,SPAN, Network Tap, Network Broker
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-11 bg-s section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center color-gray">
            <SubTitle subTitle="Technologies And Innovation" isCentered={true} colorClasser={'color-white'} />
            <p className="mt-3">
              NLG is logger, packet analyzer, flow analyzer and event management
              tools including event suppression, event correlation, event action
              and alerting.
            </p>
          </div>
          <div className="grids mt-6">
            <div className="grid md-1-3">
              <div className="ss-text-wrapper">
                <h6 className="h-color-p fw-600 color-white">Customizable BI Dashboard</h6>
                <p className="mt-2 color-gray">
                  Provides flexibility and useful customization with Business
                  Intelligence tool to support user defined dashboards for big
                  data analytics.
                </p>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="ss-text-wrapper">
                <h6 className="h-color-p fw-600 color-white">Customizable BI Dashboard</h6>
                <p className="mt-2 color-gray">
                  Provides flexibility and useful customization with Business
                  Intelligence tool to support user defined dashboards for big
                  data analytics.
                </p>
              </div>
            </div>
            <div className="grid md-1-3">
              <div className="ss-text-wrapper">
                <h6 className="h-color-p fw-600 color-white">Customizable BI Dashboard</h6>
                <p className="mt-2 color-gray">
                  Provides flexibility and useful customization with Business
                  Intelligence tool to support user defined dashboards for big
                  data analytics.
                </p>
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
})(ProductsPage02);
