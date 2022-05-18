import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import SpecialImage from "../../components/SpecialImage";

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
          <h2 className="text-center color-s">Log Management</h2>
          <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
          <h3 className="mt-4 text-center">
            Powerful Event Log Analysis & SIEM Tools
          </h3>
          <h6 className="text-center mt-3">NetkaView Logger</h6>
          <div className="ss-text-wrapper text-center">
            <p className="mt-4">
              NLG is an appliance designed to receive and analyze all kind of IT
              logs including network log, system log, application log, security
              log and log files.
            </p>
          </div>
          <div className="grids mt-6 pt-6">
            <div className="grid md-50 sm-100">
              <div className="ss-img">
                <div className="img-bg">
                  <img src="/assets/img/bg/31.jpg" className="img" />
                </div>
              </div>
              <p className="mt-3">
                NetkaView Logger (NLG) is designed to receive and analyze all
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
            <div className="grid md-50 sm-100">
              <div className="pl-6">
                <h3>Product Highlights</h3>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h3 className="text-center color-s">Why NLG - See Our Use Cases</h3>
          <div className="ss-sep-01 ss-sep-center bg-p mt-4"></div>
          <div className="ss-text-wrapper text-center">
            <p className="mt-4">
              NLG is able to provide more insight into IT network performance
              and connectivity. Below are example of use case scenarios to see
              how our NLG can solve your network issues and improve your
              business performance and productivity.
            </p>
          </div>
          <div className="grids">
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

      {/* Parallax Scrolling Effect */}
      <section
        className="section-pro-02 section-padding d-flex ai-center jc-center"
        style={{ backgroundImage: `url('/assets/img/bg/23.jpg')` }}
      >
        <h1 className="color-white text-center">
          Netka AIOps Director <br />
          The Ultimate AIOps Solution
        </h1>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h3>Solution Deployment</h3>
            <div className="ss-sep-01 bg-p mt-5 ss-sep-center"></div>
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
                  <div className="ss-sep-01 bg-p mt-6"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      Packet Analyzer Mode
                    </Link>
                    <p className="mt-2">
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

      <section className="section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h3>Technologies And Innovation</h3>
            <div className="ss-sep-01 ss-sep-center bg-p mt-6"></div>
            <p className="mt-3">
              NLG is logger, packet analyzer, flow analyzer and event management
              tools including event suppression, event correlation, event action
              and alerting.
            </p>
          </div>
          <div className="grids mt-6">
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
            </div>
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
            </div>
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
            </div>
          </div>
          <div className="grids mt-4">
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
            </div>
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
            </div>
            <div className="grid md-1-3">
              <h6>Customizable BI Dashboard</h6>
              <p className="mt-2">
                Provides flexibility and useful customization with Business
                Intelligence tool to support user defined dashboards for big
                data analytics.
              </p>
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
})(ProductsPage02);
