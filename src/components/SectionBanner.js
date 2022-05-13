import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'react-feather';


function SectionBanner(props) {

  const NextArrow = (input) => {
    const { className, style, onClick } = input; 
    return (
      <div className="arrows">
        <div className="container">
          <div className="arrow arrow-next" onClick={onClick}>
            <ChevronRight size={38} />
          </div>
        </div>
      </div>
    );
  }
  const PrevArrow = (input) => {
    const { className, style, onClick } = input; 
    return (
      <div className="arrows">
        <div className="container">
          <div className="arrow arrow-prev" onClick={onClick}>
            <ChevronLeft size={38} />
          </div>
        </div>
      </div>
    );
  }

  const sliderSettings = {
    dots: false, arrows: true, infinite: true, speed: 600, autoplaySpeed: 3000,
    slidesToShow: 1, slidesToScroll: 1, initialSlide: 0, fade: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="section-01">
      <Slider {...sliderSettings}>
        {[0, 1, 2].map(d => (
          <div key={`banner_${d}`} className="slide">
            <div
              className="wrapper"
              style={{ backgroundImage: `url('/assets/img/bg/05.jpg')` }}
            >
              <div className="container">
                <div className="text-wrapper">
                  <h5 className="fw-700 color-s">
                    NetkaView Network Manager
                  </h5>
                  <h2 className="fw-600 color-p xs-no-br mt-5">
                    The perfect ITSM Solutions, Now <br />
                    with ITIL Certification
                  </h2>
                  <div className="ss-sep-01 bg-s mt-3"></div>
                  <h6 className="fw-700 mt-4">
                    IT service desk solution to help <br /> youdeliver the
                    best IT support to <br /> customers
                  </h6>
                </div>
                <div className="btns pt-4">
                  <Link to="/" className="btn btn-action btn-p">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SectionBanner;