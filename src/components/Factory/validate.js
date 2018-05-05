const validate = values => {
    const errors = {}
    if (!values.productID) {
      errors.productID = 'Required'
    }
    if (!values.productName) {
      errors.productName = 'Required'
    }
    if (!values.status) {
      errors.status = 'Required'
    }
    if (!values.location) {
        errors.location = 'Required'
      }
      if(!values.processingPlant)
      {
          errors.processingPlant = "Required"
      }
      if(!values.qrCode)
      {
          errors.qrCode = "Required"
      }
      if(!values.description)
      {
          errors.description = "Required"
      }
    return errors
  }

  export default validate;