import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class NewPortfolio extends Component {

    render() {
        return (
            <div className="new-portfolio-div">
                <TextField hintText="Name of your portoflio"  fullWidth={true}/>
                <br />
                <TextField hintText="Description of your portfolio" multiLine={true} rows={4} rowsMax={4}  fullWidth={true}/>
                <br /><br /><br /><br />
                <RaisedButton label="Validate" primary={true} />
            </div>
        )
    }
}
