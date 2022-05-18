import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="section-padding bg-s">
          <div className="container">
            <div className="grids jc-space-between">

              <div className="grid xl-25 lg-30 sm-100 mt-0">
                <Link className="logo" to="/">
                  <img src="/assets/img/logo.png" />
                </Link>
                <p className="fw-300 mt-4">
                  1 Soi Ramkhamhaeng 166 Yaek 2 <br />
                  Ramkhamhaeng Rd., Minburi <br />
                  Bangkok 10510 Thailand
                </p>
                <p className="fw-300 mt-2">
                  Phone. 662-978-6805
                </p>
                <p className="fw-300 mt-2">
                  Email. contact@techorigin.co.th
                </p>
              </div>

              <div className="grid lg-50 sm-100 mt-0">
                <div className="menu-container">
                  <div className="grids">
                    <div className="grid sm-1-3 mt-0">
                      <p className="lg fw-500 menu-title">NAVIGATION</p>
                      <div className="grids pt-1">
                        {[
                          { name: 'Home', goTo: '' },
                          { name: 'Services', goTo: '' },
                          { name: 'Products', goTo: '' },
                          { name: 'Testimonials', goTo: '' },
                          { name: 'News', goTo: '' },
                          { name: 'Company', goTo: '' },
                        ].map((d, i) => (
                          <div key={`fmenu_0_${i}`} className="grid sm-100 xs-50 mt-2">
                            <Link to={d.goTo} className="p sm fw-500 h-color-p">
                              {d.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm-1-3 mt-0">
                      <p className="lg fw-500 menu-title">SERVICES</p>
                      <div className="grids pt-1">
                        {[
                          { name: 'Service 01', goTo: '' },
                          { name: 'Service 02', goTo: '' },
                          { name: 'Service 03', goTo: '' },
                          { name: 'Service 04', goTo: '' },
                          { name: 'Service 05', goTo: '' },
                          { name: 'Service 06', goTo: '' },
                        ].map((d, i) => (
                          <div key={`fmenu_1_${i}`} className="grid sm-100 xs-50 mt-2">
                            <Link to={d.goTo} className="p sm fw-500 h-color-p">
                              {d.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm-1-3 mt-0">
                      <p className="lg fw-500 menu-title">PRODUCTS</p>
                      <div className="grids pt-1">
                        {[
                          { name: 'Product 01', goTo: '' },
                          { name: 'Product 02', goTo: '' },
                          { name: 'Product 03', goTo: '' },
                          { name: 'Product 04', goTo: '' },
                          { name: 'Product 05', goTo: '' },
                          { name: 'Product 06', goTo: '' },
                        ].map((d, i) => (
                          <div key={`fmenu_2_${i}`} className="grid sm-100 xs-50 mt-2">
                            <Link to={d.goTo} className="p sm fw-500 h-color-p">
                              {d.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid xl-25 lg-20 md-40 sm-60 xs-90 mt-0">
                <form className="form">
                  <div className="form-control">
                    <input 
                      type="email" className="text-center" required={true} 
                      placeholder="Your Email" 
                    />
                  </div>
                  <div className="mt-1">
                    <button type="submit" className="btn btn-action btn-xs btn-p-inverse w-full">
                      SUBSCRIBE
                    </button>
                  </div>
                  <p className="fw-300 mt-2">
                    Get our latest updates.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center bg-white pt-6 pb-6">
          <div className="container">
            <p className="color-dark">
              Copyright &copy; 2022 Tech Origin Co., Ltd.
              <br className="all-hide xs-show" />
              All rights reserved.
            </p>
          </div>
        </div>
      </nav>

   
     {/* <div className="icon-bar">
        <a href="#" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="google">
          <i className="fa fa-google"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube"></i>
        </a>
  </div> */}
    </>
  );
}

export default Footer;
