import Home from "./components/Section01";
import Quote from "./components/Section02";
import Itom from "./components/Section03";
import ItomUsecase from "./components/Section04";
import Aiops from "./components/Section05";
import NetworkManage from "./components/Section06";
import News from "./components/Section07";
import Solution from "./components/Section09";
import Itservice from "./components/Section08";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Socialbar from "./components/Socialbar";

import "./assets/css/style.css";
import "./assets/css/grid.css";
import "./assets/css/custom.css";



function App() {
  return (
    <>
      <Home />
      <Quote />
      <Itom />
      <ItomUsecase />
      <Aiops />
      <NetworkManage />
      <News />
      <Itservice />
      <Solution />
      <Footer />
      <Copyright />
      <Socialbar />
    </>
  );
}

export default App;
