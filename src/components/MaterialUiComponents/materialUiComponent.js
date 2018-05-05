import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import {
    DatePicker
  } from 'redux-form-material-ui'
const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
  const renderDateField = DatePicker

  module.exports ={
      renderTextField:renderTextField,
      renderDateField:renderDateField
  }
  