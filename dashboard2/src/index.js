import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'


import reducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import PortfolioList from './containers/portfolio_list'
import CompanyList from './containers/company_list'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <App />
          <Switch>
            <Route path="/portfolio" component={CompanyList} />
            <Route path="/" component={PortfolioList} />

          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
