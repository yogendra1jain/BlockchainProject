import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import Paper from 'material-ui/Paper'
import {renderTextField} from '../MaterialUiComponents/materialUiComponent'
import RaisedButton from 'material-ui/RaisedButton';
import {addItemToNetwork} from '../../Store/Actions/index';
import {connect} from 'react-redux';
import validate from './validate';
import web3 from '../../web3';
import factory from '../../factory';
var QRCode = require('qrcode.react');




class Factory extends Component
{
    constructor(props)
    {
        super(props);
    this.state = {imagesshow:false,errMessage:'',
    txnSuccesfull:'NI'};
    }
     factorySubmit=async ()=>
    {
     this.setState({imagesshow:true,errMessage:''})
     try{
     const accounts =   await  web3.eth.getAccounts()
       const txreceipt = await factory.methods.createNewProduct(
         parseInt(this.props.formValues.productID), 
         this.props.formValues.productName, 
         this.props.formValues.status, 
         this.props.formValues.location, 
         this.props.formValues.processingPlant, 
         parseInt(this.props.formValues.qrCode), 
         this.props.formValues.description).send({
       from: accounts[0]
       });
       this.setState({txnSuccesfull:'T'});
       let intervalID =  setInterval(()=>{
       this.setState({txnSuccesfull:'NI'});
       clearInterval(intervalID);
       },3000)
     
    }
    catch(err)
    {
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
    console.log(this.props,"dfdfdf")

        return(
            
           <div>
               <div style={{marginLeft:'24%',marginRight:'24%'}}>
           <Paper style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'3%',marginBottom:'3%'}}>
            <div>
            <Field
            name="productID"
            label="Product ID"
            style={{marginLeft:'9%'}}
             component={renderTextField}/>
             <Field
            name="productName"
            label="Product Name"
            style={{marginLeft:'6%'}}
             component={renderTextField}/>
             </div>
             <div>
             <Field
            name="status"
            style={{marginLeft:'9%'}}
            label="Status"
             component={renderTextField}/>
             <Field
            name="location"
            style={{marginLeft:'6%'}}
            label="Location"
             component={renderTextField}/>
             </div>
             <div>
             <Field
             style={{marginLeft:'9%'}}
            name="processingPlant"
            label="Processing Plant"
             component={renderTextField}/>
            <div >
             <Field
            name="qrCode"
            label="QR Code"
            style={{marginLeft:'9%'}}
             component={renderTextField}/>
             {this.props.formValues&&this.props.formValues.qrCode?<QRCode size={36} value={this.props.formValues.qrCode}/>:null}
             </div>
             </div> 
             <Field
             style={{marginLeft:'9%',marginBottom:'3%'}}
            name="description"
            label="Description"
             component={renderTextField}/>
             <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>
             { !this.state.imagesshow?<RaisedButton 
              primary={true}
               label="submit"
                onClick={this.factorySubmit}
                disabled={this.props.invalid}/>:<div><img height="65" width="65" src={require('../../images/sendingdata.gif')}/><p style={{margin:0}}>posting your data to blockchain....</p></div>}
{this.state.txnSuccesfull=='T'?<img height="80" width="80" src={require('../../images/done.gif')}/>:<div>{this.state.txnSuccesfull=='F'?<img height="80" width="80" src={require('../../images/done.gif')}/>:null} </div>}
              </div>
             </Paper>
          
             </div>
             </div>
            
        )
    }
}

const FactoryForm =  reduxForm(
    {
        form:'FactoryForm',
        validate
    }
)(Factory)

const mapStateToProps=(state)=>
{
    const data = {
        productID:'111',
        
        productName:'patnjali shapoo',
        
        status:'shipped',
        
        location:'haridwar plant',
        
        processingPlant:'surat',
        
        qrCode:'111',
        
        description:'shampoo for silky hair'
        }
    let formValues = {}
    console.log(state)
    if(state.form&&state.form.FactoryForm&&state.form.FactoryForm.values)
    {
     formValues=state.form.FactoryForm.values
    }
  return{   
      formValues:formValues,
//initialValues:data
  }
}
const mapDispatchToProps = dispatch =>
{
  return {
    onAddItem:(item)=>dispatch(addItemToNetwork(item))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FactoryForm)