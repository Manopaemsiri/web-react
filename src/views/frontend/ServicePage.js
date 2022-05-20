import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { Link } from "react-router-dom";

import SpecialImage from "../../components/SpecialImage";
import TextTitle from "../../components/TextTitle";
import SubTitle from "../../components/SubTitle";

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";


function ServicePage(props) {
  const dataUrl = props.match.params.dataUrl? props.match.params.dataUrl: null;

  /* eslint-disable */
  useEffect(() => {
    onMounted(1);
    props.setTopnavActiveIndex(11);
  }, []);
  /* eslint-enable */

  return (
    <>
      <section
        className="section-05 bg-sm bg-fixed section-padding"
        style={{ backgroundImage: `url('/assets/img/bg/17.jpg')` }}
      >
        <div className="container">
          <div className="ss-text-wrapper text-center">
            <h1 className="color-white fw-700 lh-sm xs-no-br">
              {dataUrl}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-03 section-padding">
        <div className="container">
          <TextTitle title="Netka AIOps Director" />
          <div className="ss-text-wrapper sm text-center">
            <h4 className="mt-3">What Is Netka AIOps Director</h4>
            <p className="color-gray lh-md">
              Netka AIOps Director or N-AIOps is AIOps Platform which provides
              data ingestion data analytics by using AI technologies and
              intelligently drive automation
            </p>
          </div>
          <div className="grids ai-center mt-6 pt-6">
            <div className="grid lg-50 sm-100 xs-100 mt-0">
              <div className="ss-text-wrapper xs color-gray text-left ml-0">
                <SubTitle subTitle="Overview" />
                <p className="mt-2 lh-md">
                  Netka AIOps Director or N-AIOps is AIOps Platform which
                  provides data ingestion, data analytics by using AI
                  technologies and intelligently drive automation. N-AIOps have
                  workflow designer which is tool for creating automation
                  process that can flexibly design workflow with complex
                  conditions. N-AIOps is platform which require data from IT
                  management systems e.g. ITIM, ITSM, NPMD, SIEM, APM, DEM for
                  cross-domain analysis and drive automation. N-AIOps supports
                  data for processing as follow:
                </p>
                <ol>
                  <li>Log data e.g. Syslog, SNMP Trap, Windows event</li>
                  <li>Telemetry data e.g. metrics, traces</li>
                  <li>
                    Network data e.g. packet analysis data, flow analysis data,
                    topology, inventory
                  </li>
                  <li>ITSM data e.g. incidents, changes, problems, Cis</li>
                  <li>
                    IoT data or sensor values g. temperature, humidity, AC/DC
                    voltage, current, watt, relay, contact, access door’s status
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid lg-50 sm-100 xs-100 mt-0">
              <div className="img-wrapper">
              <img src="/assets/img/bg/65.png" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <TextTitle title="Netka AIOps Director, The Ultimate AIOps Solution" />
          <div className="mt-6 pt-2">
            <img src="/assets/img/bg/18.jpg" className="img" />
          </div>
          <div className="ss-text-wrapper lg ml-0 color-gray">
            <p className="mt-6 lh-md">
              N-AIOps can work with 3rd party application which send data with
              Syslog, SNMP Trap or JSON format and work seamlessly with Netka
              products including
            </p>
            <p className="mt-4 lh-md">
              Netka AIOps Director or N-AIOps is AIOps Platform which provides
              data ingestion, data analytics by using AI technologies and
              intelligently drive automation. N-AIOps have workflow designer which
              is tool for creating automation process that can flexibly design
              workflow with complex conditions. N-AIOps is platform which require
              data from IT management systems e.g. ITIM, ITSM, NPMD, SIEM, APM,
              DEM for cross-domain analysis and drive automation. N-AIOps supports
              data for processing as follow:
            </p>
            <p className="mt-4 lh-md">
              Netka AIOps Director or N-AIOps is AIOps Platform which provides
              data ingestion, data analytics by using AI technologies and
              intelligently drive automation. N-AIOps have workflow designer which
              is tool for creating automation process that can flexibly design
              workflow with complex conditions. N-AIOps is platform which require
              data from IT management systems e.g. ITIM, ITSM, NPMD, SIEM, APM,
              DEM for cross-domain analysis and drive automation. N-AIOps supports
              data for processing as follow:
            </p>
            <SubTitle subTitle="The Netka AIOps’s Life Cycle" isCentered={false} />
            <p className="mt-4 lh-md">
              When N-AIOps works with NNM, NSD, NLG, NIoT, this will be “The
              ultimate AIOps Solution” which provides cross-domain analysis for IT
              Infrastructure Management, IT Service Management, Network
              Performance Monitoring and Diagnostics, Security Information and
              Event Management, Application Performance Monitoring and Digital
              Experience Monitoring. The Netka AIOps’s life cycle consists of 5A
              as follow:
            </p>
            <p className="mt-4 lh-md">
              When N-AIOps works with NNM, NSD, NLG, NIoT, this will be “The
              ultimate AIOps Solution” which provides cross-domain analysis for IT
              Infrastructure Management, IT Service Management, Network
              Performance Monitoring and Diagnostics, Security Information and
              Event Management, Application Performance Monitoring and Digital
              Experience Monitoring. The Netka AIOps’s life cycle consists of 5A
              as follow:
            </p>
            <p className="mt-4 lh-md">
              When N-AIOps works with NNM, NSD, NLG, NIoT, this will be “The
              ultimate AIOps Solution” which provides cross-domain analysis for IT
              Infrastructure Management, IT Service Management, Network
              Performance Monitoring and Diagnostics, Security Information and
              Event Management, Application Performance Monitoring and Digital
              Experience Monitoring. The Netka AIOps’s life cycle consists of 5A
              as follow:
            </p>
          </div>

        </div>
      </section>

      <section
        className="section-05 bg-fixed bg-sm section-padding"
        style={{ backgroundImage: `url('/assets/img/bg/23.jpg')` }}
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

      <section className="section-03 section-padding">
        <div className="container">
          <div className="grids ai-center">
            <div className="grid lg-50 sm-100 xs-100">
            <div className="img-wrapper">
                <SpecialImage
                  image="/assets/img/bg/24.png"
                  classer="no-hover"
                />
              </div>
            </div>

            <div className="grid lg-50 sm-100 xs-100 mt-0">
              <div className="ss-text-wrapper sm ml-0">
                <SubTitle subTitle="Sample Use Cases Of N-AIOps" />
                <p className="mt-2 color-gray lh-md">
                  N-AIOps can start workflow and run playbook into CIs when
                  incoming log matched predefined rule. Also, N-AIOps can detect
                  anomaly and finding root cause from cross-domain analysis. For
                  example, when user have bad experience from using an application
                  because of slowness and disconnections. This kind of problem
                  requires cross-domain analysis based on variety of data e.g.
                  traffic utilization, cpu utilization, memory utilization, disk
                  usage, network quality (latency, jitter, packet loss),
                  hop-by-hop latency, end-to-end latency, trace/span data.
                </p>
                <div className="btns pt-4">
                  <Link to="/" className="btn btn-action btn-p">
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-11 bg-s section-padding">
        <div className="container">
          <div className="ss-text-wrapper text-center color-gray">
            <SubTitle subTitle="The Netka AIOps’s Life Cycle" isCentered={true} colorClasser={'color-white'} />
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
})(ServicePage);
