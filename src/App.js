
import 'bootstrap';
import './App.scss';

import { connect } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../src/redux'
import HomePage from '../src/components/Home/HomePage';
import Home from "./Home"
import ProductDetail from './components/products/productDetail';
import ProductinCategory from './components/category/ProductinCategory';


function App() {
  return (
    <div>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={( HomePage )} />
            <Route path="/products/:id" exact component={( ProductDetail )} />
            <Route path="/products/category/:name" exact component={( ProductinCategory )} />


          </Switch>
        </BrowserRouter>
       

      </Router>
      
    </div>

  );
}

const mapStateToProps = state => {
  return {
 
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( App );

