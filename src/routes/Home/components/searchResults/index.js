import React from 'react'
import {
	Text,View,
	Header,Content,
	Button,StyleSheet,
	Container,
	InputGroup,Input,
	List,ListItem,Left,Body
} from 'native-base'

import { Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

var width = Dimensions.get("window").width

export const SearchResults = ({predictions,getSelectedAddress}) => {

	function handleSelectedAddress(placeID) {
		getSelectedAddress(placeID)
	}
  return (
    <View style={{margin: 10, padding: 20,width: width,
      top: 220, position: 'absolute',height: 1000,}}>
      
      <List
        dataArray={predictions}
        renderRow={(item) =>
        <View>
          <ListItem onPress={() => handleSelectedAddress(item.placeID)} button avata>
            <Left 
              style={{flexWrap: 'wrap',alignItems: 'flex-start',
              borderLeftColor: '#7D7D7D'}}
            >
              <Icon name="location-on" size={25}
                style={{fontSize: 20,color:'#7D7D7D'}}
              />
            </Left>
		    <Body>
              <Text style={{fontWeight: 'bold', left:10,color: '#7D7D7D'}}>
                {item.primaryText}
              </Text>
              <Text style={{fontWeight: 'bold', left:10,color: '#7D7D7D'}}>
                {item.secondaryText}
              </Text>
		    </Body>
		  </ListItem>
		
		</View>

		}

		/>
		</View>


		)
}

export default SearchResults