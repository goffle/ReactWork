import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from '../../style/Application.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
//UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from './Menu';

import AddShop from './AddShop';
import AddProduct from './AddProduct';
import AddCustomer from './AddCustomer';
import AddBid from './AddBid';

import WatchData from './WatchData';



class Application extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <Switch>
                            <Route path="/shop" component={AddShop} />
                            <Route path="/product" component={AddProduct} />
                            <Route path="/customer" component={AddCustomer} />
                            <Route path="/bid" component={AddBid} />
                            <Route path="/data" component={WatchData} />
                            <Route path="/" component={AddShop} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default Application