import web3 from '../../web3';
import {ADD_ITEM,SCAN_QR,SELECT_PLACE,DESELECT_PLACE} from './actionTypes.js';
export const addItem =(item)=>
{
return  {
    type:ADD_ITEM,
    item:item

}
}
export const addItemToNetwork = (item)=>
{
    debugger;
    console.log(web3.eth)
    return function(dispatch){
        debugger;
    web3.eth.getAccounts().then((accounts)=>
{
    debugger;
console.log(accounts);
});
//     debugger;
//    const txreceipt = await factory.methods.createNewProduct(
//      item.productID, 
//      item.productName, 
//      item.status, 
//      item.location, 
//      item.processingPlant, 
//      item.qrCode, 
//      item.description).send({
//    from: accounts[0]
//    });
//    debugger;
//    dispatch(addItem(txreceipt));
}
}
export const scanQR =(item)=>
{
return {
    type:SCAN_QR,
    item:item
}
}

export const selectPlace =(key)=>
{
    return{
        type:SELECT_PLACE,
        placeKey:key
    }
}

export const deSelectPlace =()=>
{
    return{
        type:DESELECT_PLACE
    }
}