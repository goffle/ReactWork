import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, Field } from 'redux-form'

//http://www.material-ui.com/#/components/text-field
//http://redux-form.com/6.5.0/examples/material-ui/


const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'desccription' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}




class NewPortfolio extends Component {
   
    handleFormSubmit({ name, description }) {
        console.log(name, description);
    }

    render() {
        const { handleSubmit, fields: { name, description } } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="new-portfolio-div">
                    <TextField {...name}
                        hintText="Name of your portoflio"
                        name="name"
                        fullWidth={true} />
                    <br />
                    <TextField {...description}
                        hintText="Description of your portfolio"
                        name="description"
                        multiLine={true}
                        rows={4}
                        rowsMax={4}
                        fullWidth={true} />
                    <br /><br /><br /><br />
                    <RaisedButton
                        type="submit"
                        label="Validate"
                        primary={true} />
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'NewPortfolio',
    validate,
})(NewPortfolio)