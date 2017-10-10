import React, {Component} from 'react'
import {
  Text, View, Header, Content, Button,
  Container, Footer, FooterTab
} from 'native-base'

import MapContainer from "./mapContainer"
import HeaderComponent from '../../../headerComponent'
import Fare from './fare'
export default class Home extends Component {

  componentDidMount() {
       this.props.getCurrentLocation()
  }
  
  render() {
    const region = {
        latitude: 37.785834,
        longitude: -122.406417,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
     } 
  	return(
      <Container>
        { this.props.region.longitude && 
          <MapContainer region={this.props.region} 
              getInputData={this.props.getInputData}
              toggleSearchResult={this.props.toggleSearchResult}
              getAddressPredictions={this.props.getAddressPredictions}
              resultTypes={this.props.resultTypes}
              getSelectedAddress={this.props.getSelectedAddress}
              selectedAddress={this.props.selectedAddress}
              distanceMatrix={this.props.distanceMatrix}
              style={{height: 300,width: '97%'}}
          />

        }
        {
          this.props.fare && 
          <Fare fare={this.props.fare} />
        }

     </Container>
    
    )

  }

}

