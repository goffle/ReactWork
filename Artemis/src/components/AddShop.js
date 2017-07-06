import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import { postShop } from '../actions/index';

//https://docs.google.com/spreadsheets/d/1LcbHGAXO9AG3RWUIXa_c5IsHayn019ILCye2ndiYZD4/edit?usp=drive_web

class AddShop extends Component {
    onSubmit(props) {
        this.props.postShop(props);
        this.props.dispatch(reset('AddShopForm'));
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="div">
                    <h3>Add a new shop</h3>
                    <Field label="Name" name="Name" component={renderNameTextField} type="text" />
                    <Field label="Email" name="Email" component={renderNameTextField} type="text" />
                    <Field label="Phone" name="Phone" component={renderNameTextField} type="text" />
                    <Field label="Location" name="Location" component={renderNameTextField} type="text" />
                    <Field label="Categories" name="Categories" component={renderNameTextField} type="text" />
                    <Field label="Address" name="Address" component={renderNameTextField} type="text" />
                    <Field label="PostalCode" name="PostalCode" component={renderNameTextField} type="text" />
                    <br /><br /><br />
                    <div>
                        <RaisedButton type="submit" className="btn" primary={true} label="Save" />
                        <RaisedButton type="submit" className="btn" secondary={true} label="Cancel" href="/portfolio" />
                    </div>
                </div>
            </form>
        )
    }
}

const renderNameTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        fullWidth={true}
    />
)


const validate = values => {
    const errors = {}
    const fields = ['Name', 'Email', 'Phone', 'Location', 'Categories', 'Address', 'PostalCode'];
    fields.forEach((field) => {
        if (values[field] === undefined) {
            errors[field] = 'Required';
        }
    });
    return errors;
}

export default connect(null, { postShop })(
    reduxForm({
        form: 'AddShopForm',
        validate
    })(AddShop));

