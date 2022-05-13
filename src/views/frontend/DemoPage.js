import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setTopnavActiveIndex } from '../../actions/general.actions';


function DemoPage(props) {

  /* eslint-disable */
	useEffect(() => { props.setTopnavActiveIndex(11); }, []);
  /* eslint-enable */

  return (
    <>
      <section className="section-demo-02 section-padding">
        <div className="container">
          <div className="grids">
            {/* left content */}
            <div className="grid md-70 sm-100 pr-6">
              <div className="left-content">
                <div className="text-container">
                  <h2>AIOps</h2>
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <p className="mt-6">
                    Artificial Intelligence for IT Operations (AIOps) describes
                    the combination of big data and machine learning (ML) to
                    automate IT operation processes, including event
                    correlation, anomaly detection and root cause analysis.
                  </p>
                </div>
                <div className="text-container mt-6">
                  <h2>What is AIOps?</h2>
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                </div>
                <div className="text-container mt-6">
                  <h2>AIOps</h2>
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                  <br />
                  <img src="/assets/img/bg/15.jpg" className="img" />

                  <p className="mt-6">
                    <div className="fw-800 d-inline">
                      Artificial Intelligence or AIOps{" "}
                    </div>
                    enhance existing monitoring systems, service management and
                    task automation. AIOps is covering 3 main areas which are:
                  </p>
                  <ol className="p-0 pl-5">
                    <li>
                      <p>
                        <span className="fw-800 p">Observe (Monitoring)</span>
                        The AIOps processes both, real-time and historical data,
                        e.g. events, metrics, traces and topology from other IT
                        systems. Based on this data historical analysis, anomaly
                        detection, performance analysis and correlation &
                        contextualization can be observed.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-800 p">Engage (ITSM)</span> The
                        AIOps receives incidents, dependencies and changes
                        related data to introduce task automation, change risk
                        analysis, SD agent performance analysis and knowledge
                        management.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-800 p">Act (Automation)</span>The
                        AIOps platform analyzes and run playbook processes:
                        “Self-Diagnostic” for analyzing, “Self-Healing” for
                        issue solving, “Self-Recovery” for recovering and
                        “Self-Prevention” for preventing future problems in an
                        automatic manner . Especially recurring tasks can be
                        automated to reduce incident, reduce down time, reduce
                        error and increase SLA.
                      </p>
                    </li>
                  </ol>
                  <div className="text-container mt-6">
                    <h2>AIOps for Automation</h2>
                    <div className="ss-sep-01 bg-p mt-4"></div>
                    <p className="mt-6">
                      AIOps stand for Artificial Intelligence for IT Operations,
                      which is using Artificial Intelligence (AI) technology to
                      operate an IT operation. The word “AIOps” was established
                      by Gartner which is the global well-known organization.
                      They discuss about AIOps platform that using Artificial
                      Intelligence & ML technology to manage all the big data
                      generated by IT system and also explain that AIOps is
                      improving IT operation performances.
                    </p>
                    <p className="mt-6">
                      AIOps stand for Artificial Intelligence for IT Operations,
                      which is using Artificial Intelligence (AI) technology to
                      operate an IT operation. The word “AIOps” was established
                      by Gartner which is the global well-known organization.
                      They discuss about AIOps platform that using Artificial
                      Intelligence & ML technology to manage all the big data
                      generated by IT system and also explain that AIOps is
                      improving IT operation performances.
                    </p>
                  </div>
                  <br />
                  <div className="vimeo-container mt-6">
                  
                  </div>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances. Artificial Intelligence
                    for IT Operations, which is using Artificial.
                  </p>
                  <p className="mt-6">
                    AIOps stand for Artificial Intelligence for IT Operations,
                    which is using Artificial Intelligence (AI) technology to
                    operate an IT operation. The word “AIOps” was established by
                    Gartner which is the global well-known organization. They
                    discuss about AIOps platform that using Artificial
                    Intelligence & ML technology to manage all the big data
                    generated by IT system and also explain that AIOps is
                    improving IT operation performances.
                  </p>
                </div>
              </div>
            </div>
            {/* right content */}
            <div className="grid md-30 sm-100">
              <div className="right-content">
                <ul className="bg-p p-5 color-white bx-shadow">
                  <li>
                    <Link to="/" className="p color-white">What is AIOps?</Link>
                  </li>
                  <li>
                    <Link to="/" className="p color-white">
                      What does AIOps relate with IT Operations?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p color-white">AIOps Benefits</Link>
                  </li>
                  <li>
                    <Link to="/" className="p color-white">AIOps for Monitoring</Link>
                  </li>
                  <li>
                    <Link to="/" className="p color-white">AIOps for ITSM</Link>
                  </li>
                  <li>
                    <Link to="/" className="p color-white">AIOps for Automation</Link>
                  </li>
                </ul>

                <div className="bg-s color-white p-5 bx-shadow">
                  <h4>LOREM IPSUM</h4>
                  <div className="contact-container mt-4">
                    <p>Call Us</p>
                    <p>097 305 2239</p>
                  </div>
                  <div className="contact-container mt-4">
                    <p>Facebook</p>
                    <p>
                      <a href="https://www.facebook.com/TechOriginTH">
                        Tech Origin Co., Ltd.
                      </a>
                    </p>
                  </div>
                  <div className="contact-container mt-4">
                    <p>Email</p>
                    <p>sarun.seepun@gmail.com</p>
                  </div>
                </div>

                <div className="bg-p color-white p-5 mt-5 bx-shadow">
                  <h4>HOW CAN WE HELP YOU ?</h4>
                  <p className="color-white mt-5">
                    Contact us at the Netka System to you or submit a business
                    inquiry online.
                  </p>
                  <div className="btns pt-4 text-center">
                    <Link to="/" className="btn btn-action btn-s">
                      CONTACT
                    </Link>
                  </div>
                </div>

                <div className="quotation box-shadow p-5 mt-5">
                  <p>
                    the company would continue to focus on expanding its current
                    customer base for its core services while investing more –
                    particularly in the expansion of the data centers – to
                    prepare for growing customer demand for digital content
                    consumption and other opportunities
                  </p>
                  <div className="ss-sep-01 bg-p mt-4"></div>
                  <div className="quotation-profile mt-4 d-flex">
                    <img src="https://www.netkasystem.com/wp-content/uploads/2020/03/proen-50x50.jpg"></img>
                    <div className="pl-4">
                       <p className="color-dark fw-600">Mr.Sarun Seepun</p>
                       <p>Chief Executive Officer</p>
                    </div>
                  </div>
                </div>
              </div>
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
})(DemoPage);