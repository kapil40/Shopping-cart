import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Cards from './containers/Cards/Cards';
import MyCart from './containers/My-cart/MyCart';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/my-cart" component={MyCart}/>
            <Route path="/" exact component={Cards}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
