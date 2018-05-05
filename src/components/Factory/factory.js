import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import Paper from 'material-ui/Paper'
import {renderTextField} from '../MaterialUiComponents/materialUiComponent'
import RaisedButton from 'material-ui/RaisedButton';
import {addItem} from '../../Store/Actions/index';
import {connect} from 'react-redux';
import validate from './validate';

class Factory extends Component
{
    factorySubmit=()=>
    {
        this.props.onAddItem(this.props.formValues)
    }
    render()
    {
        return(
            
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
             <Field
            name="qrCode"
            label="QR Code"
            style={{marginLeft:'6%'}}
             component={renderTextField}/>
             </div> 
             <Field
             style={{marginLeft:'9%',marginBottom:'3%'}}
            name="description"
            label="Description"
             component={renderTextField}/>
             <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>
              <RaisedButton 
              primary={true}
               label="submit"
                onClick={this.factorySubmit}
                disabled={this.props.invalid}/>
              </div>
             </Paper>
            
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
    let formValues = {}
    if(state.form&&state.form.FactoryForm&&state.form.FactoryForm.values)
    {
     formValues=state.form.FactoryForm.values
    }
  return{
      formValues
  }
}
const mapDispatchToProps = dispatch =>
{
  return {
    onAddItem:(item)=>dispatch(addItem(item))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FactoryForm)