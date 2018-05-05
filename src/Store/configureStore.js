import {createStore,combineReducers,applyMiddleware} from 'redux';
import placesReducer from './Reducers/places';
import formReducer from './Reducers/reduxForm';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    places:placesReducer,
    form:formReducer
})

const configureStore = ()=>
{
    return createStore(
        rootReducer,
    applyMiddleware(thunk));
}

export default configureStore;