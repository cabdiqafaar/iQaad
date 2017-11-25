import React, {Component} from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Container,View,Text} from 'native-base'
import MapView from 'react-native-maps'
//import orderIqaad from '../order_iqaad'
import SearchBox from '../searchBox'
import SearchResults from '../searchResults'
import Fare from '../fare'
const { width, height } = Dimensions.get("window")
export  const MapContainer = (
          {
            region,getInputData,
            toggleSearchResult,
            getAddressPredictions,
            resultTypes,
            predictions,
            getSelectedAddress,
            selectedAddress,
            fare
          }
		) => {
  return(
    <Container style={{height: height, width: width}}>
      <View>
      
        <MapView
          style={{height: height, width: width}}
          provider={MapView.PROVIDER_GOOGLE}
          region={region}
		    >
          <MapView.Marker 
           coordinate={region}
           pinColor="green" 
           />
        </MapView>

        <SearchBox 
          getInputData={getInputData} 
          toggleSearchResult={toggleSearchResult}
          getAddressPredictions={getAddressPredictions}
          selectedAddress={selectedAddress}
          fare={fare}
        />
        { 
          (resultTypes.pickUp || resultTypes.dropOff) &&
          <SearchResults predictions={predictions} 
            getSelectedAddress={getSelectedAddress}
          />
        }
       
      </View>

    </Container>

  )
}

export default MapContainer
