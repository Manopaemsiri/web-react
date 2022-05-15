import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Services_HomePage,
  Frontend_HomePage,
  Products_HomePage,
  News_HomePage
} from './views/frontend';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontend_HomePage} />
        <Route exact path="/services" component={Services_HomePage} />
        <Route exact path="/products" component={Products_HomePage} />
        <Route exact path="/news" component={News_HomePage} />
        <Route path="*" component={Frontend_HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
