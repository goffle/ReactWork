import React, { Component } from 'react'

//import logo from '../../images/logo1.png'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import css from '../../style/TitleBar.css'

class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: true };
    }

    /* getChildContext() {
         return { muiTheme: getMuiTheme(baseTheme) };
     }*/

    handleToggle() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    handleClose() { this.setState({ drawerOpen: false }); }

    render() {


        const styles = {
            appBar: {
                backgroundColor: 'black',
                height: '70px',
                top: '0px'
            },
            img: {
                position: 'absolute',
                left: '50%',
                marginLeft: '-127px',
                marginTop: '10px',
                height: '50px'
            },
            drawer: {
                width: '200px',
                marginTop: '70px',
                backgroundColor: '#010101',
                marginLeft: '0px',
                padding: '0px'
            },
            mainMenu: {
                color: '#3e3f3f',
                display: 'inline-block',
                marginRight: '40px',
                fontSize: '20px',
                align: 'left',
            },
        };

        //const img = <img style={styles.img} src='https://unsplash.it/50/50'/>
        return (
            <header className="header">
                <AppBar style={styles.appBar} /*title={img}*/ onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                <Drawer containerStyle={styles.drawer}
                    overlayStyle={styles.drawer}
                    docked={false}
                    open={this.state.drawerOpen}
                    onRequestChange={(open) => this.setState({ open })}>

                    <Subheader inset={false}><span style={{ width: '100%' }}><div style={styles.mainMenu}>MAIN MENU</div><div style={{ display: 'inline-block' }}><i className="fa fa-long-arrow-left fa-lg" style={{ color: '#4498c0' }} onTouchTap={this.handleClose.bind(this)} aria-hidden="true"></i></div></span></Subheader>
                    <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><div className={css.link} to="/exports"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;DataPack Library</div></MenuItem>
                    <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}>Trends</MenuItem>
                    <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}>Ranks</MenuItem>
                </Drawer>
            </header>
        )
    }
}

TitleBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default TitleBar
