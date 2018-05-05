import {ADD_ITEM,SCAN_QR,SELECT_PLACE,DESELECT_PLACE} from './actionTypes.js';
export const addItem =(item)=>
{
return {
    type:ADD_ITEM,
    item:item

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