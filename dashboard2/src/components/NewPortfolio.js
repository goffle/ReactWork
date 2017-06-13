//posts_new.js file

import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label>{label}</label>
        <input {...input} className="form-control" type={type} />
        {touched && (error && <div className="text-help">{error}</div>)}
    </div>
)
class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    onSubmit(props) {
        this.props.createPost(props).then(() => { this.context.router.push('/'); });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <Field label="Title" name="title" type="text" component={renderField} />
                <Field label="Categories" name="categories" type="text" component={renderField} />
                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" className="form-control" component="textarea" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }
}
function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Title cannot be empty';
    }
    return errors;
}


export default connect(null, { createPost })(reduxForm({
    form: 'PostsNewForm',
    validate
})(PostsNew));