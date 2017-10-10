import firebase from 'firebase'
import React,{Component} from 'react'
//import Loader from './loader'
import {View,Text,Button} from 'native-base'

export default class OrderIqaad extends Component {

		// state = {
		// 	pickUpLocation: '',
		// 	destination1: '',
		// 	destination2: '',
		// 	pickUpTime: '',
		// 	customerId: '' 
		// }
		submit() {
			alert('hello')
		}

	render() {
		return(
			<View>
			
			<Button onPress={() => this.submit()}><Text>Dalbo iQaad</Text></Button>
			</View>
		)
	}
}