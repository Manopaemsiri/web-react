import { useEffect } from 'react';
import { onMounted } from '../../helpers/frontend';
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

import Breadcrumb from '../../components/Breadcrumb';
import SubTitle from '../../components/SubTitle';
import TextTitle from '../../components/TextTitle';

import { connect } from 'react-redux';
import { setTopnavActiveIndex } from '../../actions/general.actions';


function ServicesPage(props) {

  /* eslint-disable */
  useEffect(() => {
    onMounted(1);
    props.setTopnavActiveIndex(11);
  }, []);
  /* eslint-enable */

  return (
    <>
      <Breadcrumb 
        bgImage="/assets/img/bg/17.jpg" 
        structure={[
          { title: 'Services', goTo: null },
        ]} 
        title="Services"
      />

      <section className="section-padding">
        <div className="container">
          <div className="grids">
            {[
              {
                name: 'Web App Development', activeIndex: 12, goTo: '/service/web-app-development',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'Mobile App Development', activeIndex: 13, goTo: '/service/mobile-app-development',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'IOT & Smart Farming', activeIndex: 14, goTo: '/service/iot-and-smart-farming',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'AI & Machine Learning', activeIndex: 15, goTo: '/service/ai-and-machine-learning',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'Data Analytics & Visualization', activeIndex: 16, goTo: '/service/data-analytics-and-visualization',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'Product & Brand Identity', activeIndex: 17, goTo: '/service/product-and-brand-identity',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'Technology Research', activeIndex: 18, goTo: '/service/technology-research',
                bgImage: '/assets/img/bg/02.jpg'
              }, {
                name: 'Decentralized App (DApp)', activeIndex: 19, goTo: '/service/decentralized-app',
                bgImage: '/assets/img/bg/02.jpg'
              },{
                name: 'IT Consultant', activeIndex: 20, goTo: '/service/it-consultant',
                bgImage: '/assets/img/bg/02.jpg'
              },
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-1-3 md-50 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d.bgImage} goTo={d.goTo} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                      {d.name}
                    </Link>
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
})(ServicesPage);
