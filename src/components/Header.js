import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
	const [offsetY, setOffsetY] = useState(0);
  
  const location = useLocation();
	const [currentPath, setCurrentPath] = useState('/');

  const [isSidenavActive, setIsSidenavActive] = useState(false);
  const onToggleSidenav = (e) => {
    e.preventDefault();
    setIsSidenavActive(!isSidenavActive);
  };
  
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
	useEffect(() => {
    if(currentPath !== location.pathname){
      window.scrollTo(0, 0);
      setCurrentPath(location.pathname);
    }
  }, [location]);
  /* eslint-enable */

  return (
    <>
      <nav className={`topnav ${offsetY > 50? 'sticky': ''}`}>
        <div className="container">
          <div className="topnav-wrapper">

            <div className="block-left">
              <Link className="logo" to="/">
                <img className="hide-xs" src="/assets/img/logo.png" alt="App Logo" />
                <img className="show-xs" src="/assets/img/logo-alone.png" alt="App Logo" />
              </Link>
              <div className="menu-container">
                <div className="menu">
                  <Link to="/">HOME</Link>
                </div>

                <div className="menu">
                  <Link to="/services">SERVICES</Link>
                  <div className="dropdown">
                    <div className="submenu-container">
                      <div className="submenu">
                        <Link to="/demo">Demo Page</Link>
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
                        <Link to="/products">Section 1</Link>
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
                  <Link to="/news">NEWS</Link>
                </div>
                <div className="menu">
                  <Link to="/company">COMPANY</Link>
                </div>
              </div>
            </div>

            <div className="block-right">
              <Link to="/" className="btn btn-action btn-xs btn-p">
                CONTACT US
              </Link>
              <div className="sidenav-toggle" onClick={onToggleSidenav}>
                <div className={`hamburger ${isSidenavActive? 'active': ''}`}>
                  <div></div><div></div><div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <div className="topnav-spacer"></div>

      <nav className={`sidenav ${isSidenavActive? 'active': ''}`}>
        <div className="wrapper">

        </div>
      </nav>
      <div className="sidenav-filter" onClick={onToggleSidenav}></div>
    </>
  );
}

export default Header;