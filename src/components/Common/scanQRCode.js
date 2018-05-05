import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import Paper from 'material-ui/Paper';
import {renderTextField} from '../MaterialUiComponents/materialUiComponent'
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
class ScanQrCode extends Component
{
    handleSubmit=()=>
    {
        this.props.onScanQR(this.props.formValues.QrCode)
    }

    render()
    {
        return(
            <div>
            <div>
            <Field 
            component={renderTextField} 
            style={{marginLeft:'9%',width:'90%'}}
            name="QrCode"
            label="Enter The QR Code"
            />
            </div>
             <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>
             <RaisedButton primary={true} label="submit" onClick={this.handleSubmit} />
             </div>
             </div>
        )
    }
}

const QRCodeField = reduxForm(
    {
        form:'QRCodeField'
    }
)(ScanQrCode);

const mapStateToProps=(state)=>
{
    let formValues = {}
    if(state.form&&state.form.QRCodeField&&state.form.QRCodeField.values)
    {
     formValues=state.form.QRCodeField.values
    }
  return{
      formValues
  }
}

export default connect(mapStateToProps,{})(QRCodeField)
