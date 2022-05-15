import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="footer bg-s">
        <footer className="section-footer section-padding">
          <div className="container">
            <div className="grids">
              <div className="grid md-25">
                <div className="footer-logo">
                  <img
                    src="https://techorigin.co.th/public/_uploads/08082020201318812300.png"
                     width="170"
                  />
                </div>
                <div className="footer-cert mt-5">
                  <h4 className="color-gray">OUR CERTIFICATION</h4>
                  <br/>
                  <img src="https://netkasystem.com/wp-content/uploads/2019/09/cmmi-2021-netka.png" /><br /><br />
                  <img src="https://netkasystem.com/wp-content/uploads/2019/09/pink-01.png"width="175"/>
                </div>
              </div>
              <div className="grid md-25">
                <h4 className="color-gray">Netka System Co.,Ltd</h4>
                <p className="mt-4">
                  1 Soi Ramkhamhaeng 166 Yaek 2 Ramkhamhaeng Rd. Khwang Minburi,
                  Khet Minburi, Bangkok Thailand
                </p>
                <p>662-978-6805, 662-517-4993-4</p>
                <p>contact@netkasystem.com</p>
                <h4 className="color-gray mt-4">WORKING HOURS</h4>
                <p className="mt-4">Monday - Friday</p>
                <p>From 9:00 - 18:00 hrs.</p>
              </div>
              <div className="grid md-25">
                <h4 className="color-gray">NAVIGATION</h4>
                <div className="footer_nav_link d-flex jc-space-between">
                  <div className="md-50">
                    <ul className="p-0">
                      <li>
                        <Link to="">Home</Link>
                      </li>
                      <li>
                        <Link to="">Support</Link>
                      </li>
                      <li>
                        <Link to="">About Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="md-50">
                    <ul>
                      <li>
                        <Link to="/">Testimonial</Link>
                      </li>
                      <li>
                        <Link to="">News</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="color-gray">PRODUCTS</h4>
                <div className="footer_nav_link d-flex jc-space-between">
                  <div className="footer_link_item md-50">
                    <ul className="p-0">
                      <li>
                        <Link to="/">Netka AIOps</Link>
                      </li>
                      <li>
                        <Link to="/">NetkaView Logger NetkaView Network Manager X</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="md-50">
                    <ul>
                      <li>
                        <Link to="/">NetkaView Logger</Link>
                      </li>
                      <li>
                        <Link to="/">NetkaQuartz Service Desk</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid md-25">
                <form className="form">
                  <label>Email</label><br/>
                  <input type="text" />
                  <input type="submit" value="SUBSCRIBE" />
                  <p>Get latest updates and offers.</p>
                </form>
              </div>
            </div>
          </div>
        </footer>

        <section className="section-copyright text-center bg-white">
          <p>Copyright &copy; 2022 Tech Origin Co., Ltd.</p>
        </section>
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
