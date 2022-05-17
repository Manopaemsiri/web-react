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
            name: 'Demo 01', activeIndex: 11, goTo: '/services'
          }, {
            name: 'Demo 02', activeIndex: 12, goTo: '/services'
          }, {
            name: 'Demo 03', activeIndex: 13, goTo: '/services'
          }, {
            name: 'Demo 04', activeIndex: 14, goTo: '/services'
          },{
            name: 'Demo 05', activeIndex: 15, goTo: '/services'
          },
        ]
      }, {
        name: 'PRODUCTS',
        goTo: '/products',
        activeIndexes: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        children: [
          {
            name: 'Products 01', activeIndex: 21, goTo: '/products'
          }, {
            name: 'Products 02', activeIndex: 22, goTo: '/products02'
          }, {
            name: 'Products 03', activeIndex: 23, goTo: '/products03'
          }, {
            name: 'Demo 04', activeIndex: 24, goTo: '/demo'
          },{
            name: 'Demo 05', activeIndex: 25, goTo: '/demo'
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
        goTo: '/company',
        activeIndexes: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        children: [
          {
            name: 'About Us', activeIndex: 51, goTo: '/about'
          }, {
            name: 'Contact Us', activeIndex: 52, goTo: '/contact'
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