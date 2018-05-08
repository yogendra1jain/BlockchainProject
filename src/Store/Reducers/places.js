import {ADD_ITEM,SCAN_QR,SELECT_PLACE,DESELECT_PLACE} from '../Actions/actionTypes';
import factory from '../../factory';
import web3 from '../../web3'
const initialState = {
    places:[],
    selectedPlaces:null
}

const placeReducer = (state=initialState,action)=>
{
switch (action.type){
 
    //Logic to Add a Item
   case ADD_ITEM:
   console.log(action,"action");
   console.log(txreceipt);
   return {...state}


    //logic to send QR code
     case SCAN_QR:
     //logic to retrieve qr code will come here
     console.log(action,"action qr code")
     return {...state}


//Logic to selecting the place
    case SELECT_PLACE:
   return  {...state,
    selectedPlace:state.places.find((place)=>
    {
      if(place.key=action.placeKey)
      return true
    })}


//Logic to deslecting the place
    case DESELECT_PLACE:
    return {
        ...state,
        selectedPlace:null
    }

    //Default returning the initial state
    default:
        return state
}
}

export default placeReducer;