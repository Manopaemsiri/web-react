import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {
	const [offsetY, setOffsetY] = useState(0);
  
  /* eslint-disable */
	useEffect(() => {
		setOffsetY(window.pageYOffset);
		const handleScroll = () => {
			setOffsetY(window.pageYOffset);
		}
		window.addEventListener('scroll', handleScroll);
		return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /* eslint-enable */

  return (
    <>
      <nav className={`topnav ${offsetY > 50? 'sticky': ''}`}>
        <div className="container">
          <div className="topnav-wrapper">

            <div className="block-left">
              <Link className="logo" to="/">
                <img src="/assets/img/logo.png" alt="App Logo" />
              </Link>
              <div className="menu-container">
                <div className="menu">
                  <Link to="/">HOME</Link>
                </div>

                <div className="menu">
                  <Link to="/solutions">SOLUTIONS</Link>
                  <div className="dropdown">
                    <div className="submenu-container">
                      <div className="submenu">
                        <Link to="/">Section 1</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 2</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 3</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 4</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu">
                  <Link to="/products">PRODUCTS</Link>
                  <div className="dropdown">
                    <div className="submenu-container">
                      <div className="submenu">
                        <Link to="/">Section 1</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 2</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 3</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 4</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu">
                  <Link to="/testimonials">TESTIMONIALS</Link>
                  <div className="dropdown">
                    <div className="submenu-container">
                      <div className="submenu">
                        <Link to="/">Section 1</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 2</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 3</Link>
                      </div>
                      <div className="submenu">
                        <Link to="/">Section 4</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu">
                  <Link to="/supports">SUPPORTS</Link>
                </div>
                <div className="menu">
                  <Link to="/news">NEWS</Link>
                </div>
                <div className="menu">
                  <Link to="/company">COMPANY</Link>
                </div>
              </div>
            </div>

            <div className="block-right">
              RIGHT SIDE
            </div>

          </div>
        </div>
      </nav>
      <div className="topnav-spacer"></div>
    </>
  );
}

export default Header;