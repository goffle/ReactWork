import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from '../../style/Application.css'


import Companies from '../containers/Companies'
import Menu from './Menu'


class Portfolio extends Component {

    render() {
        return (
            <div className='content'> 
                <Menu /> 
                <Companies />            
            </div>
        )
    }
}


export default Portfolio