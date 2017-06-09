import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from './reducers';

import Application from './components/Application'

//import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Components
//import App from './components/app';
//import TileBar from './components/TileBar';
//import PortfolioList from './containers/portfolio_list'
//import CompanyList from './containers/company_list'



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Application />
    </div>
  </Provider>
  , document.querySelector('.container'));
/*
Application.propTypes = {
    children: PropTypes.object.isRequired,
    bbox:     React.PropTypes.arrayOf(React.PropTypes.number),
};
*/


/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <TileBar />
        <Switch>
          <Route path="/portfolio" component={CompanyList} />
          <Route path="/" component={PortfolioList} />
        </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
  */