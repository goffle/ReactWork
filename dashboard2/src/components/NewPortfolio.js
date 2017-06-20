//posts_new.js file

import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { postPortfolio } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';


const renderNameTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        fullWidth={true}
    />
)

const renderDescriptionTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    

    return (
    <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        rows={3}
        fullWidth={true}

    />
)}


class PostsNew extends Component {

    onSubmit(props) {
        console.log("hey", props)
        this.props.postPortfolio(props).then(() => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="new-portfolio-div">
                    <h3>Create A New Portfolio</h3>
                    <Field label="Name" name="Name" component={renderNameTextField} type="text"/>
                    <br />
                    <Field label="Description" name="Description" component={renderDescriptionTextField} type="text"/>
                    <br />
                    <div>
                        <RaisedButton backgroundColor="#ffffff00" type="submit" className="new-portfolio-btn" primary={true} label="Save" />
                        <RaisedButton type="submit" className="new-portfolio-btn" secondary={true} label="Cancel" linkButton={true} href="/"/>
                    </div>
                </div>
            </form>
        );
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = ['Name', 'Description']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    /*
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }*/
    console.log(errors);
    return errors
}




export default connect(null, { postPortfolio })(
    reduxForm({
        form: 'PostsNewForm',
        validate
    })(PostsNew));