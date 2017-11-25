import firebase from 'firebase'
import React,{Component} from 'react'
//import Loader from './loader'
import { Dimensions } from 'react-native'
import {View,Text,Button,Badge,Content} from 'native-base'
var { width, height } = Dimensions.get("window")

const BookCar = (onPressaction)=> {
	return(
          <Button full bordered success onPress={() => alert('booking made thank you!')}
            style={{marginLeft: 45, marginRight: 20, marginTop: 200, backgroundColor: 'blue',color: '#fff'}}>
            <Text style={{color: '#000',width: '80%', fontSize: 20, textAlign: 'center'}}>Dalbo iQaad</Text>
          </Button>
    )
}

export default BookCar