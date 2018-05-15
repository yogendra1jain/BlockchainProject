import React, { Component } from 'react';
import {connect} from 'react-redux';
import BillPage from './BillPage/billPage.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Factory from './Factory/factory.js';
import Shipping from './Shipping/shipping';
import ThirdPartyLogistic from './ThirdPartyLogistic/thirdPartyLogistic';
import Retailer from './Retailer/retailer';
import Consumer from './Consumer/consumer';


 class App extends Component {
  render() {
  	console.log(this.props)
    return (
      <div>
         <Tabs>
    <Tab
      icon={<MapsPersonPin />}
      label="Factory"
    >
    <div>
      <Factory/>
    </div>
    </Tab>
    <Tab
      icon={<MapsPersonPin />}
      label="Shipping"
    >
    <div>
    <Shipping/>
    </div>
    </Tab>
    <Tab
      icon={<MapsPersonPin />}
      label="3PL"
      >
      <div>
    <ThirdPartyLogistic/>
    </div>
    </Tab>
     <Tab
      icon={<MapsPersonPin />}
      label="Retailer">
      <div>
    <Retailer/>
    </div>
    </Tab>
     <Tab
      icon={<MapsPersonPin />}
      label="Consumer">
      <Consumer/>
    </Tab>
  </Tabs>
  

      </div>
    );
  }
}
function mapStateToProps(state){
return {}
}
export default connect(mapStateToProps,{})(App)
