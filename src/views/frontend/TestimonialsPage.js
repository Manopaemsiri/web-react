import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import SpecialImage from "../../components/SpecialImage";
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Breadcrumb';

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function TestimonialsPage(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(1);
    props.setTopnavActiveIndex(31);
  }, []);
  /* eslint-enable */

  return (
    <>

      <Breadcrumb
        bgImage="/assets/img/bg/23.jpg"
        structure={[
          { title: 'Testimonials', goTo: null },
        ]}
        title="Testimonials"
      />

      <section className="section-padding">
        <div className="container">
          <div className="grids">
            <div className="grid lg-70 md-60 sm-100 mt-0 p-0">
              <div className="panel-left">
                {[
                  {
                    title: 'AMARIN BOOK CENTER REVEALS NETKAQUARTZ SERVICE DESK IS WORKING BEYOND THEIR EXPECTATIONS',activeIndex: 32, goTo: '/testimonial/testimonial-content-01',
                    bgImage: '/assets/img/bg/72.jpg'
                  }, {
                    title: 'AMARIN BOOK CENTER REVEALS NETKAQUARTZ SERVICE DESK IS WORKING BEYOND THEIR EXPECTATIONS',activeIndex: 33, goTo: '/testimonial/testimonial-content-02',
                    bgImage: '/assets/img/bg/71.jpg'
                  }, {
                    title: 'AMARIN BOOK CENTER REVEALS NETKAQUARTZ SERVICE DESK IS WORKING BEYOND THEIR EXPECTATIONS',activeIndex: 34, goTo: '/testimonial/testimonial-content-03',
                    bgImage: '/assets/img/bg/73.jpg'
                  }, {
                    title: 'AMARIN BOOK CENTER REVEALS NETKAQUARTZ SERVICE DESK IS WORKING BEYOND THEIR EXPECTATIONS',activeIndex: 35, goTo: '/testimonial/testimonial-content-04',
                    bgImage: '/assets/img/bg/74.jpg'
                  },
                ].map((d, i) => (
                  <div key={`card_${i}`} >
                    <div className="">
                      <SpecialImage image={d.bgImage} goTo={d.goTo} classer={'no-hover'} />
                      <div className="mt-4">
                        <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                          {d.title}
                        </Link>
                        <div className="ss-sep-01 bg-p mt-3"></div>
                        <div className="btns mb-6 pb-6">
                          <Link to={d.goTo} className="btn btn-action btn-p">
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className="grid lg-30 md-40 sm-100 m-0">
              <div className="panel-right">
                <ul className="bg-p p-5 color-white box-shadow">
                  <li>
                    <Link to="/" className="p ">
                      What is AIOps?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p">
                      What does AIOps relate with IT Operations?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p">
                      AIOps Benefits
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p">
                      AIOps for Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p">
                      AIOps for ITSM
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="p">
                      AIOps for Automation
                    </Link>
                  </li>
                </ul>

                <div className="bg-s color-white p-5 mt-4 box-shadow">
                  <h4>LOREM IPSUM</h4>
                  <div className="mt-4">
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

                <div className="bg-p color-white p-5 mt-5 box-shadow">
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
                    customer base for its core services while investing more
                    particularly in the expansion of the data centers to prepare
                    for growing customer demand for digital content consumption
                    and other opportunities
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(TestimonialsPage);
