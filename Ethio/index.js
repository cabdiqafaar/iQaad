import React, {Component} from 'react'
import {View,Text} from 'react-native'
import firebase from 'firebase'
import { Container,Button,Header,Footer,FooterTab,Left,Icon} from 'native-base'
import Home from './components/home'
import Login from './components/Login'
import Loader from './components/loader'
export default class Ethio extends Component {
	 state = {
		logedIn: false
	}

	// 	componentWillMount(){
	// 	firebase.initializeApp({
	// 	apiKey: "AIzaSyDmqcNLcweVQadbR-gcaPPj5bGd3_EUFss",
	//     authDomain: "iqaad-30bf8.firebaseapp.com",
	//     databaseURL: "https://iqaad-30bf8.firebaseio.com",
	//     projectId: "iqaad-30bf8",
	//     storageBucket: "",
	//     messagingSenderId: "649650175618"
 //  });
	// firebase.auth().onAuthStateChanged((user) => {
	// 	if(user){
	// 		this.setState({logedIn: true})
	// 	} else {
	// 		this.setState({user: false})
	// 		}
	// 	})
	// }


	renderIntialView(){
		//const navigate = this.props.navigation;
		switch (this.state.logedIn) {
			case true:
				return <Home />;
				case false:
				 return <Login />;			
			default:
				return <Loader />
				break;
		}
	}

	render() {
		return(
		<View style={{minHeight: 1000}}>
		<Text></Text>
		<Header style={{backgroundColor: '#3DD611', height: 120, marginTop: -30}}>
		<Left>
		<Button transparent>
		<Icon ios='ios-menu' android="md-menu" style={{color: '#fff'}} />
		</Button>
		</Left>	
		<Text style={{flex: 1, alignContent: 'center', alignItems: 'center', margin: 20,
		 fontSize: 30, marginLeft: -40, color: '#fff',marginTop: 40}}> iQaad</Text>
		</Header>
		{this.renderIntialView()}

		 	<Text>jjjjjjj</Text>
		 	<View>
		 	<Footer>
		 	<Text>.....</Text>
		 	<FooterTab />
		 	</Footer>
		 	</View>
		 	</View>
			)
	}
}