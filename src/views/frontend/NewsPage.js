import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import SpecialImage from '../../components/SpecialImage';
import { Clock } from 'react-feather';
import { Link } from "react-router-dom";

import TextTitle from "../../components/TextTitle";
import Breadcrumb from '../../components/Breadcrumb';

import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";

function NewsPage(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(1);
    props.setTopnavActiveIndex(41);
  }, []);
  /* eslint-enable */

  return (
    <>
      <Breadcrumb
        bgImage="/assets/img/bg/23.jpg"
        structure={[
          { title: 'News', goTo: null },
        ]}
        title="News"
      />

      <section className="section-padding">
        <div className="container">
          <TextTitle title="Product Update" isCentered={false} />
          <div className="grids pt-1">
            {[
              {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 32, goTo: '/testimonials/news-content-01',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 33, goTo: '/testimonials/news-content-02',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 34, goTo: '/testimonials/news-content-03',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 35, goTo: '/testimonials/news-content-04',
                bgImage: '/assets/img/bg/25.png'
              },
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d.bgImage} goTo={d.goTo} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                      {d.title}
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="grids pt-1">
            {[
              {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 32, goTo: '/testimonials/news-content-05',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 33, goTo: '/testimonials/news-content-06',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 34, goTo: '/testimonials/news-content-07',
                bgImage: '/assets/img/bg/25.png'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 35, goTo: '/testimonials/news-content-08',
                bgImage: '/assets/img/bg/25.png'
              },
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d.bgImage} goTo={d.goTo} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                      {d.title}
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <TextTitle title="Event" isCentered={false} />
          <div className="grids pt-1">
            {[
              {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 32, goTo: '/testimonials/news-event-01',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 33, goTo: '/testimonials/news-event-02',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 34, goTo: '/testimonials/news-event-03',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 35, goTo: '/testimonials/news-event-04',
                bgImage: '/assets/img/bg/26.jpg'
              },
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d.bgImage} goTo={d.goTo} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                      {d.title}
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grids pt-1">
            {[
              {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 32, goTo: '/testimonials/news-event-05',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 33, goTo: '/testimonials/news-event-06',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 34, goTo: '/testimonials/news-event-07',
                bgImage: '/assets/img/bg/26.jpg'
              }, {
                title: 'MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS', activeIndex: 35, goTo: '/testimonials/news-event-08',
                bgImage: '/assets/img/bg/26.jpg'
              },
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d.bgImage} goTo={d.goTo} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={d.goTo}>
                      {d.title}
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <TextTitle title="CSR" isCentered={false} />
          <div className="grids pt-1">
            {[
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grids pt-1">
            {[
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
              '/assets/img/bg/27.jpg',
            ].map((d, i) => (
              <div key={`card_${i}`} className="grid md-25 sm-50">
                <div className="pt-5">
                  <SpecialImage image={d} goTo={`/content/${i}`} />
                  <div className="ss-sep-01 bg-p mt-5"></div>
                  <div className="mt-4">
                    <Link className="h6 fw-600 h-color-p" to={`/content/${i}`}>
                      MONITOR YOUR BUSINESS SERVERS AND APPLICATIONS
                    </Link>
                    <div className="d-flex ai-center mt-2">
                      <Clock size={20} className="color-p mr-2" />
                      <p className="fw-400">March 24, 2020</p>
                    </div>
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
})(NewsPage);
