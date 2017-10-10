import React, {Component} from 'react'
import {Provider} from 'react-redux'
import firebase from 'firebase'
import Router,{Scene} from 'react-native-router-flux'
import {AppRegistry,Text,ScrollView,ViewList,TextInput,StyleSheet} from 'react-native'
import {Button,Container,Input,InputGroup,View} from 'native-base'
import {StackNavigator} from 'react-navigation'
import FooterComponent from '../footerComponent'
import HeadeComponent from '../headerComponent'
export default class Register extends Component {
	// 	constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		email: '',
	// 		firstName: '',
	// 		lastName: '',
	// 		country: '',
	// 		city: '',
	// 		mobile: '',
	// 		password: '',
	// 		louding: null,
	// 		errors: []
	// 	}
	// }


	submit(){
		const {email,magaca_aabaha, magacaga,wadanka,magaalada,mobile,password} = this.state;
		const database = firebase.database();
		let ref = database.ref('drivers');
		let data = this.state;
		if(ref.push(data)){
			alert(data)
		}else {
			alert('some thing went wrong')
		}
		
	}

	render() {
		//const navigate = this.props.navigation
		return(
		<ScrollView>
			<Container>
			<View>
			  <InputGroup style={{backgroundColor: '#fff', borderColor: '#F8411A'}}>
			  <Input placeholder='Magacaaga' onChangeText={(firstName) => this.setState({firstName})}>
			  </Input>
			  </InputGroup>
			  <InputGroup style={{backgroundColor: '#fff', borderColor: '#000'}}>
			  <Input placeholder='Magaca aabaha' onChangeText={(lastName) => this.setState({lastName})}>
			  </Input>
			  </InputGroup>

			  <InputGroup style={{backgroundColor: '#fff', borderColor: '#000'}}>
			  <Input placeholder='iimeelk-email kaaga' onChangeText={(email) => this.setState({email})}>
			  </Input>
			  </InputGroup>

			  <InputGroup style={{backgroundColor: '#fff', borderColor: '#000'}}>
			  <Input placeholder='Wadanak aad joogto' onChangeText={(country) => this.setState({country})}>
			  </Input>
			  </InputGroup>
			  <InputGroup style={{backgroundColor: '#fff', borderColor: '#000'}}>
			  <Input placeholder='Magaada aad dagantahay' onChangeText={(city) => this.setState({city})} >
			  </Input>
			  </InputGroup>
			  <InputGroup style={{backgroundColor: '#CAFCD4', borderColor: '#000'}}>
			  <Input placeholder='Taleefanka Gacanta Mobile' onChangeText={(mobile) => this.setState({mobile})} >
			  </Input>
			  </InputGroup>
			  <InputGroup style={{backgroundColor: '#F9F07E', borderColor: '#000'}}>
			  <Input SecureTextEntry='true' placeholder='Furaha Password' onChangeText={(password) => this.setState({password})}>
			  </Input>
			  </InputGroup>

			  <Button  rounded block  style={{marginLeft: 5, marginRight: 5,marginTop: 30}} onPress={() => this.submit()}>
			  <Text style={{fontSize:20}}>Xubin noqo</Text>
			  </Button>
			  </View>
			</Container>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		marginTop: 20,
		padding: 20,
		height: 700,
		backgroundColor: '#1BA512',
	},

	header: {
		flex: 1
	},

	input: {
		color: '#fff',
		fontSize: 20,
		
	},

	button: {
		marginLeft: 10,
		marginRight: 10,
		color: '#fff'
		
	}
})