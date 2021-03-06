import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {renderTextField} from '../MaterialUiComponents/materialUiComponent'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import ScanQRCode from '../Common/scanQRCode.js';
  import ViewBlockChainData from '../Common/blockChainData'
  import {scanQR} from '../../Store/Actions/index';
  import factory from '../../factory';
  import web3 from '../../web3';
class Shipping extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
        datacame:false,
        product:null,
        txnSuccesfull:'NI'
    }
    }
    async componentDidMount() {
    
        const product = await factory.methods.getProduct().call();
        this.setState({datacame:true,product:product});

    }
    handleSubmit=async ()=>{
        this.setState({imagesshow:true});    
        try {
            debugger;
            const accounts = await web3.eth.getAccounts();
            await factory.methods.newShipment( 
         this.props.formValues.Status,  
        this.props.formValues.LastProcessingPoint,
        this.props.formValues.ShippmentSequence).send({
            from: accounts[0]
            });
            this.setState({txnSuccesfull:'T'});
            let intervalID =  setInterval(()=>{
            this.setState({txnSuccesfull:'NI'});
            clearInterval(intervalID);
            },3000)
    
            } catch (err) {
                this.setState({errMessage:err.message,txnSuccesfull:'F'});
                let intervalID =  setInterval(()=>{
                    this.setState({txnSuccesfull:'NI'});
                    clearInterval(intervalID);
                    },3000)
            }
            this.setState({imagesshow:false});
    }
    render()
    {
        return(
            <div>
           
            <div style={{marginLeft:'24%',marginRight:'24%'}}>
           <Paper style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'3%',marginBottom:'3%'}}>
            <ScanQRCode/>
             </Paper>
             {this.state.datacame?<Paper style={{marginTop:'10px'}}>
             <ViewBlockChainData data={this.state.product}/>
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
             <Field 
            component={renderTextField} 
            style={{marginLeft:'9%',width:'90%'}}
            name="ShippmentSequence"
            label="Shippment Sequence"
            />
            <div style={{
                marginLeft:'33%',
                marginTop:'3%',
                marginBottom:'3%'
        }}>
             { !this.state.imagesshow?<RaisedButton 
              primary={true}
               label="submit"
                onClick={this.handleSubmit}
                disabled={this.props.invalid}/>:<div><img height="65" width="65" src={require('../../images/sendingdata.gif')}/><p style={{margin:0}}>posting your data to blockchain....</p></div>}
{this.state.txnSuccesfull=='T'?<img height="80" width="80" src={require('../../images/done.gif')}/>:<div>{this.state.txnSuccesfull=='F'?<img height="80" width="80" src={require('../../images/done.gif')}/>:null} </div>}
            </div>
            </div>
             </Paper>:null}
             </div>
            </div>
        )
    }
}

const shippingForm = reduxForm(
    {
        form:'ShippingForm'
    }
)(Shipping);

const mapStateToProps=(state)=>
{
    let formValues = {}
    if(state.form&&state.form.ShippingForm&&state.form.ShippingForm.values)
    {
     formValues=state.form.ShippingForm.values
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
export default connect(mapStateToProps,mapDispatchToProps)(shippingForm)


