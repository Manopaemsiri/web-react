import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Services_Page,
  Frontend_HomePage,
  Products_Page,
  Products_Page02,
  Products_Page03,
  News_Page,
  CompanyAbout_Page,
  CompanyContact_Page,
  Testimonials_Page
} from './views/frontend';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontend_HomePage} />
        <Route exact path="/services" component={Services_Page} />
        <Route exact path="/products" component={Products_Page} />
        <Route exact path="/products02" component={Products_Page02}></Route>
        <Route exact path="/products03" component={Products_Page03}></Route>
        <Route exact path="/news" component={News_Page} />
        <Route exact path="/about" component={CompanyAbout_Page}></Route>
        <Route exact path="/contact" component={CompanyContact_Page}></Route>
        <Route exact path="/testimonials" component={Testimonials_Page}></Route>
        <Route path="*" component={Frontend_HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
