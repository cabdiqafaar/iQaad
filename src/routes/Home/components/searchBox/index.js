import React from 'react'
import {
	Text,View,
	Header,Content,
	Button,StyleSheet,
	Container,
	InputGroup,Input,
	Alert
} from 'native-base'
import RNGooglePlaces from 'react-native-google-places'
import { Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

var { width, height } = Dimensions.get("window")


export const SearchBox = ({getInputData,toggleSearchResult,getAddressPredictions,getSelectedAddress}) => {

  const {selectedPickUp,selectedDropOff} = getSelectedAddress || {}

  function handleInput(key,val){
    getInputData({key,value:val})
  }
  // const  orderTaxi = () => {
  //   let pickUp = this.props.inputData.pickUp
  //   let dropOff = this.props.inputData.dropOff
  //   console.log('pickup: '+ pickup + 'Drop Off: '+ dropOff)
  // }

  //  function  openSearchModal() {
  //   RNGooglePlaces.openAutocompleteModal()
  //   .then((place) => {
  //   console.log(place);
  //   // place represents user's selection from the
  //   // suggestions and it is a simplified Google Place object.
  //   })
  //   .catch(error => console.log(error.message));  // error is a Javascript Error object
  // }

  return (
    <View style={{padding: 20,width: width, top: 0, position: 'absolute',height: 200}}>

      <View style={{backgroundColor:'transparent',marginBottom: 3, width: '80%'}}>
        <Text>Halkee Lagaa Qaadayaa</Text>
        <InputGroup style={{width: width}}>	
          <Icon name="search"	size={40} color="#F76114" />
          <Input onFocus={() => toggleSearchResult("pickUp")}
            placeholder="Halkan Kuqor" style={{marginTop: 10,
            borderRadius: 7,opacity: 0.9, backgroundColor: '#fff'}}
            onChangeText={getInputData.bind(this, "PickUP")}
            value={selectedPickUp && selectedPickUp.name}
          />
        </InputGroup>

      </View>
      <View style={{backgroundColor:'transparent',width: width}}>
        <Text>Halkee Lagugeynayaa</Text>
        <InputGroup style={{width: width}}>
          <Icon name="search"	size={40} color="#F76114"/>	
          <Input onFocus={() => toggleSearchResult("dropOff")}
            placeholder="Halkan Kuqor" style={{marginTop: 10,
            borderRadius: 7,opacity: 0.9, backgroundColor: '#fff',}}
            onChangeText={handleInput.bind(this, "dropOff")} 
            value={selectedDropOff && selectedDropOff.name}
          />
        </InputGroup>
      </View>
			
      <View style={{backgroundColor: 'transparent'}}>
        <Button block 
          style={{marginTop: 30,
          backgroundColor: 'transparent',
          borderColor: '#000',borderWidth: 2,
          width: '100%',marginRight: 20}}
          onMouseEnter={() => orderTaxi.bind(this)}>
          <Text style={{color: '#000'}}>Dalbo iQaad</Text>
        </Button>
     </View>
    </View>
  )
}

export default SearchBox
