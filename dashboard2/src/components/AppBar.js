import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: true };
    }

    render() {
        const styles = {
            Bar: {
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
            }
        };

        const img = <img style={styles.img} src='https://unsplash.it/50/50' />
        return (
            <header className="header">
                <AppBar style={styles.Bar} title={img}  />
            </header>
        )
    }
}

Bar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Bar;
