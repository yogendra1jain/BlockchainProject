import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {renderTextField} from '../MaterialUiComponents/materialUiComponent'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import shippingObj from '../Shipping/shipingobj';
import {connect} from 'react-redux';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import ScanQRCode from '../Common/scanQRCode.js';
  import ViewBlockChainData from '../Common/blockChainData'
  import {scanQR} from '../../Store/Actions/index'
class ThirdPartyLogistic extends Component
{
    constructor(props)
    {
        super(props);
        this.state={datacame:false}
    }

    handleSubmit=(qrcode)=>
    {
    this.setState({datacame:true});
    this.props.onScanQR(qrcode);
    }
    render()
    {
        return(
            <div>
           
            <div style={{marginLeft:'24%',marginRight:'24%'}}>
           <Paper style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'3%',marginBottom:'3%'}}>
            <ScanQRCode onScanQR={this.handleSubmit}/>
             </Paper>
             {this.state.datacame?<Paper style={{marginTop:'10px'}}>
             <ViewBlockChainData data={shippingObj}/>
            <div style={{marginTop:'10px',display:'flex',flexDirection:'column',marginBottom:'10px'}}>
            <Field 
            component={renderTextField} 
            style={{marginLeft:'9%',width:'90%'}}
            name="Status"
            label="Status"
            />
             <Field 
            component={renderTextField} 
            style={{marginLeft:'9%',width:'90%'}}
            name="LastProcessingPoint"
            label="Last Processing Point    "
            />
            <div style={{
                marginLeft:'33%',
                marginTop:'3%',
                marginBottom:'3%'
        }}>
            <RaisedButton
            primary={true} 
            label="submit"/>
            </div>
            </div>
             </Paper>:null}
             </div>
            </div>
        )
    }
}

const thirdPartyLogisticForm = reduxForm(
    {
        form:'thirdPartyLogisticForm'
    }
)(ThirdPartyLogistic);

const mapStateToProps=(state)=>
{
    let formValues = {}
    if(state.form&&state.form.thirdPartyLogisticForm&&state.form.thirdPartyLogisticForm.values)
    {
     formValues=state.form.thirdPartyLogisticForm.values
    }
  return{
      formValues
  }
}
const mapDispatchToProps = dispatch =>
{
  return {
    onScanQR:(QRCode)=>dispatch(scanQR(QRCode))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(thirdPartyLogisticForm)


