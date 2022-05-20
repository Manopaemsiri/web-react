import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Frontend_HomePage,
  Frontend_ServicesPage, Frontend_ServicePage,
  Frontend_ProductPage, Frontend_ProductsPage,
  Frontend_TestimonialPage, Frontend_TestimonialsPage,
  Frontend_NewsPage,

  Products_Page02,
  Products_Page03,
  News_Page,
  CompanyAbout_Page,
  CompanyContact_Page,
} from './views/frontend';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontend_HomePage} />

        <Route exact path="/services" component={Frontend_ServicesPage} />
        <Route exact path="/service/:dataUrl" component={Frontend_ServicePage} />

        <Route exact path="/product" component={Frontend_ProductPage} />
        <Route exact path="/products/:dataUrl" component={Frontend_ProductsPage} />

        <Route exact path="/testimonials" component={Frontend_TestimonialPage} />
        <Route exact path="/testimonials/:dataUrl" component={Frontend_TestimonialsPage} />

        <Route exact path="/news" component={Frontend_NewsPage} />

        <Route exact path="/products02" component={Products_Page02} />
        <Route exact path="/products03" component={Products_Page03} />
        <Route exact path="/about" component={CompanyAbout_Page} />
        <Route exact path="/contact" component={CompanyContact_Page} />
       
        <Route path="*" component={Frontend_HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
