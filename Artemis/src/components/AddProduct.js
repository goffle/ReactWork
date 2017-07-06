import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Field, reduxForm, reset } from 'redux-form';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import { postProduct } from '../actions/index';

//https://docs.google.com/spreadsheets/d/1LcbHGAXO9AG3RWUIXa_c5IsHayn019ILCye2ndiYZD4/edit?usp=drive_web

class AddProduct extends Component {
    onSubmit(props) {
        this.props.postProduct(props);
        this.props.dispatch(reset('AddProductForm'));
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="div">
                    <h3>Add a new product</h3>
                    <Field label="CustomerId" name="CustomerId" component={renderNameTextField} type="text" />
                    <Field label="Image" name="Image" component={renderNameTextField} type="text" />
                    <Field label="Category" name="Category" component={renderNameTextField} type="text" />
                    <Field label="Metadata" name="Metadata" component={renderNameTextField} type="text" />
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
    const fields = ['CustomerId', 'Image', 'Category', 'Metadata'];
    fields.forEach((field) => {
        if (values[field] === undefined) {
            errors[field] = 'Required';
        }
    });
    return errors
}

export default connect(null, { postProduct })(
    reduxForm({
        form: 'AddProductForm',
        validate
    })(AddProduct));

