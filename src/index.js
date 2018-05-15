import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers';
import {BrowserRouter,Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import configureStore from '../src/Store/configureStore';
require("babel-core/register");
require("babel-polyfill");

const store = configureStore();
const muiTheme = getMuiTheme({
  palette: {
     primary1Color: 'black',
    primary2Color: cyan500,
    primary3Color: cyan500,
  }
});





ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider muiTheme = {getMuiTheme(muiTheme)}>
    <BrowserRouter>
    <div>
    <Route path="/app"  component={App}/>
    </div>
    </BrowserRouter>
      </MuiThemeProvider>
	</Provider>
  , document.querySelector('.container'));
