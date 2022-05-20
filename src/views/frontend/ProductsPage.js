import { useEffect } from 'react';
import { onMounted } from '../../helpers/frontend';
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

import Breadcrumb from '../../components/Breadcrumb';


import { connect } from 'react-redux';
import { setTopnavActiveIndex } from '../../actions/general.actions';


function ProductsPage(props) {

  /* eslint-disable */
  useEffect(() => {
    onMounted(1);
    props.setTopnavActiveIndex(21);
  }, []);
  /* eslint-enable */

  return (
    <>
      <Breadcrumb 
        bgImage="/assets/img/bg/23.jpg" 
        structure={[
          { title: 'Products', goTo: null },
        ]} 
        title="Products"
      />

      <section className="section-padding">
        <div className="container">
          <div className="grids">
            {[
          {
            name: 'Tech Origin ERP', activeIndex: 22, goTo: '/product/tech-origin-erp',
            bgImage: '/assets/img/bg/65.png'
          }, {
            name: 'Management Software', activeIndex: 23, goTo: '/product/management-software',
            bgImage: '/assets/img/bg/53.jpg'
          }, 
        ].map((d, i) => (
              <div key={`card_${i}`} className="grid lg-2 md-50 sm-50">
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
})(ProductsPage);
