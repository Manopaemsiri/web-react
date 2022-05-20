import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import $ from 'jquery';


function Header(props) {
	const [offsetY, setOffsetY] = useState(0);
  
  const location = useLocation();
	const [currentPath, setCurrentPath] = useState('/');
  
	const [menu, setMenu] = useState([]);

  const [isSidenavActive, setIsSidenavActive] = useState(false);
  const onToggleSidenav = (e) => {
    e.preventDefault();
    if(isSidenavActive){
      $('html').removeClass('sidenav-opened');
      setIsSidenavActive(false);
    }else{
      $('html').addClass('sidenav-opened');
      setIsSidenavActive(true);
    }
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
      $('html').removeClass('sidenav-opened');
      setIsSidenavActive(false);
    }
  }, [location]);
  
	useEffect(() => {
    setMenu([
      {
        name: 'HOME',
        goTo: '/',
        activeIndexes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }, {
        name: 'SERVICES',
        goTo: '/services',
        activeIndexes: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        children: [
          {
            name: 'Web App Development', activeIndex: 12, goTo: '/service/web-app-development'
          }, {
            name: 'Mobile App Development', activeIndex: 13, goTo: '/service/mobile-app-development'
          }, {
            name: 'IOT & Smart Farming', activeIndex: 14, goTo: '/service/iot-and-smart-farming'
          }, {
            name: 'AI & Machine Learning', activeIndex: 15, goTo: '/service/ai-and-machine-learning'
          }, {
            name: 'Data Analytics & Visualization', activeIndex: 16, goTo: '/service/data-analytics-and-visualization'
          }, {
            name: 'Product & Brand Identity', activeIndex: 17, goTo: '/service/product-and-brand-identity'
          }, {
            name: 'Technology Research', activeIndex: 18, goTo: '/service/technology-research'
          }, {
            name: 'Decentralized App (DApp)', activeIndex: 19, goTo: '/service/decentralized-app'
          },{
            name: 'IT Consultant', activeIndex: 20, goTo: '/service/it-consultant'
          }, 
        ]
      }, {
        name: 'PRODUCTS',
        goTo: '/products',
        activeIndexes: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        children: [
          {
            name: 'Tech Origin ERP', activeIndex: 22, goTo: '/product/tech-origin-erp'
          }, {
            name: 'Management Software', activeIndex: 23, goTo: '/product/management-software'
          }, 
        ]
      }, {
        name: 'TESTIMONIALS',
        goTo: '/testimonials',
        activeIndexes: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      }, {
        name: 'NEWS',
        goTo: '/news',
        activeIndexes: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
      }, {
        name: 'COMPANY',
        activeIndexes: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        children: [
          {
            name: 'About Us', activeIndex: 52, goTo: '/company/about'
          }, {
            name: 'Contact Us', activeIndex: 53, goTo: '/company/contact'
          }, {
            name: 'Our Team', activeIndex: 54, goTo: '/company/team'
          }, {
            name: 'Join Us', activeIndex: 55, goTo: '/company/join-us'
          }
        ]
      },
    ]);
  }, []);
  /* eslint-enable */

  return (
    <>
      <div className="topnav-spacer"></div>
      <nav className={`topnav ${offsetY > 50? 'sticky': ''}`}>
        <div className="container">
          <div className="topnav-wrapper">

            <div className="block-left">
              <Link className="logo" to="/">
                <img className="hide-xs" src="/assets/img/logo.png" alt="App Logo" />
                <img className="show-xs" src="/assets/img/logo-alone.png" alt="App Logo" />
              </Link>
              <div className="menu-container">
                {menu.map((d, i) => (
                  <div 
                    key={`menu_${i}`} 
                    className={`menu ${d.activeIndexes.indexOf(props.activeIndex) > -1? 'active': ''}`} 
                  >
                    {d.goTo? (
                      <Link to={d.goTo}>{d.name}</Link>
                    ): (
                      <div>{d.name}</div>
                    )}
                    {d.children && d.children.length? (
                      <div className="dropdown">
                        <div className="submenu-container">
                          {d.children.map((k, j) => (
                            <div 
                              key={`submenu_${i}_${j}`} 
                              className={`submenu ws-nowrap ${k.activeIndex === props.activeIndex? 'active': ''}`} 
                            >
                              <Link to={k.goTo}>{k.name}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ): (<></>)}
                  </div>
                ))}
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

      <nav className={`sidenav ${isSidenavActive? 'active': ''}`}>
        <div className="wrapper">
          <div className="sidenav-toggle" onClick={onToggleSidenav}>
            <div className={`hamburger ${isSidenavActive? 'active': ''}`}>
              <div></div><div></div><div></div>
            </div>
          </div>
          <div className="scroll-wrapper">
            <div className="menu-container">
              {menu.map((d, i) => (
                <div 
                  key={`menu_${i}`} 
                  className={`menu ${d.activeIndexes.indexOf(props.activeIndex) > -1? 'active': ''}`} 
                >
                  {d.goTo? (
                    <Link to={d.goTo}>{d.name}</Link>
                  ): (
                    <div>{d.name}</div>
                  )}
                  {d.children && d.children.length? (
                    <div className="dropdown">
                      <div className="submenu-container">
                        {d.children.map((k, j) => (
                          <div 
                            key={`submenu_${i}_${j}`} 
                            className={`submenu ${k.activeIndex === props.activeIndex? 'active': ''}`} 
                          >
                            <Link to={k.goTo}>{k.name}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ): (<></>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="sidenav-filter" onClick={onToggleSidenav}></div>
    </>
  );
}

const mapStateToProps = (state) => ({
  activeIndex: state.general.topnavActiveIndex
});

export default connect(mapStateToProps, {
  
})(Header);