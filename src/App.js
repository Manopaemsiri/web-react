import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Frontend_HomePage,
  Frontend_ServicesPage, Frontend_ServicePage,
  Frontend_ProductPage, Frontend_ProductsPage,
  Frontend_TestimonialPage, Frontend_TestimonialsPage,
  Frontend_NewsPage, Frontend_NewPage,
  Frontend_AboutPage, Frontend_ContactPage,
} from './views/frontend';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontend_HomePage} />

        <Route exact path="/services" component={Frontend_ServicesPage} />
        <Route exact path="/service/:dataUrl" component={Frontend_ServicePage} />

        <Route exact path="/products" component={Frontend_ProductsPage} />
        <Route exact path="/product/:dataUrl" component={Frontend_ProductPage} />

        <Route exact path="/testimonials" component={Frontend_TestimonialsPage} />
        <Route exact path="/testimonial/:dataUrl" component={Frontend_TestimonialPage} />

        <Route exact path="/news" component={Frontend_NewsPage} />
        <Route exact path="/new/:dataUrl" component={Frontend_NewPage} />

        <Route exact path="/about" component={Frontend_AboutPage} />
        <Route exact path="/contact" component={Frontend_ContactPage} />
        
        <Route path="*" component={Frontend_HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
