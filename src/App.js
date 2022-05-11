import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { 
  Demo_HomePage,
  Frontend_HomePage
} from './views/frontend';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontend_HomePage} />
        <Route exact path="/demo" component={Demo_HomePage} />
        <Route path="*" component={Frontend_HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
