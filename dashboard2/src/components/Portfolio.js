import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Directory from '../containers/Directory'
import Home from '../containers/Home'

import Menu from './Menu'



class Portfolio extends Component {

    render() {
        return (
            <div className='content'>
                <Menu />
                <Route path={`${this.props.match.path}/directory`} component={Directory} />
                <Route path={`${this.props.match.path}/`} component={Home} />
            </div>
        )
    }
}


export default Portfolio