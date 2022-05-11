function Footer() {
  return (
    <>
      <nav className="footer">
        <footer className="section-footer section-padding">
          <div className="container">
            <div className="grids">
              {/* Certificate */}
              <div className="grid md-25">
                <div className="footer_logo">
                  <img src="https://www.netkasystem.com/wp-content/uploads/2019/09/logo-netka-font-white-e1586508498983.png" />
                </div>
                <div className="footer_cert mt-5">
                  <h6 className="footer_cert-title">OUR CERTIFICATION</h6>
                  <img src="https://netkasystem.com/wp-content/uploads/2019/09/cmmi-2021-netka.png" /><br/><br/>
                  <img src="https://netkasystem.com/wp-content/uploads/2019/09/pink-01.png"width="175"/>
                </div>
              </div>
              {/* Address */}
              <div className="grid md-25">
                <div className="footer_address">
                  <h6 className="footer_address-title">Netka System Co.,Ltd</h6>
                  <p>
                    1 Soi Ramkhamhaeng 166 Yaek 2 Ramkhamhaeng Rd. Khwang Minburi,
                    Khet Minburi, Bangkok Thailand
                  </p>
                </div>
                {/* Contact */}
                <div className="footer_contact">
                  <p className="footer_contact-tel">
                    662-978-6805, 662-517-4993-4
                  </p>
                  <p className="footer_contact-email">contact@netkasystem.com</p>
                </div>
                {/* Working Time */}
                <div className="footer_working_time mt-5">
                  <h6 className="footer_working_time-title">WORKING HOURS</h6>
                  <p>Monday - Friday</p>
                  <p>From 9:00 - 18:00 hrs.</p>
                </div>
              </div>
              {/* Navigation */}
              <div className="grid md-25">
                <h6 className="footer_nav_title">NAVIGATION</h6>
                <div className="footer_nav_link d-flex jc-space-between">
                  <div className="footer_link_item md-50">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_link_item md-50">
                    <ul>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Products */}
                <h6 className="footer_product_title mt-5">PRODUCTS</h6>
                <div className="footer_nav_link d-flex jc-space-between">
                  <div className="footer_link_item md-50">
                    <ul>
                      <li>
                        <a href="#">Netka AIOps</a>
                      </li>
                      <li>
                        <a href="#"> NetkaView Logger NetkaView Network Manager X</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_link_item md-50">
                    <ul>
                      <li>
                        <a href="#">NetkaView Logger</a>
                      </li>
                      <li>
                        <a href="#">NetkaQuartz Service Desk</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Form - Subscribe  */}
              <div className="grid md-25">
                  <form className="form">
                    <label>Email</label>
                    <input type="text" />
                    <input type="submit" value="SUBSCRIBE"/>
                    <p>Get latest updates and offers.</p>
                  </form>
              </div>
            </div>
          </div>
        </footer>

        <section className="section-copyright text-center">
          <p>Copyright &copy; 2022 Tech Origin Co., Ltd.</p>
        </section>
      </nav>
      
      <div className="icon-bar">
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
      </div>
    </>
  );
}

export default Footer;