/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component} from 'react'
 import { AppRegistry, StyleSheet} from 'react-native'
 import Root from './src/main'
 import Ethio from './Ethio'
 import {View,Text} from 'react-native'
 import Login from './src/components/Login'
 import Register from './src/components/Register'
 import Loader from './src/components/loader'
 import HeaderComponent from './src/headerComponent'
 import FooterComponent from './src/footerComponent'
 import firebase from 'firebase'
export default class iQaad extends Component{
	 state = {logedIn: false}

	componentWillMount(){
		firebase.initializeApp({
		apiKey: "AIzaSyDmqcNLcweVQadbR-gcaPPj5bGd3_EUFss",
	    authDomain: "iqaad-30bf8.firebaseapp.com",
	    databaseURL: "https://iqaad-30bf8.firebaseio.com",
	    projectId: "iqaad-30bf8",
	    storageBucket: "",
	    messagingSenderId: "649650175618"
  });
	firebase.auth().onAuthStateChanged((user) => {
		if(user){
			this.setState({logedIn: true})
		} else {
			this.setState({logedIn: false})
			}
		})
	}
		renderIntialView(){
			switch (this.state.logedIn) {
				case true:
					return <Root {...this.props} />
				case false:
				 	return <Login />;		
				default:
					return <Loader />
				break;
		}
	}

  render() {
    return (

    	<View>
    	<HeaderComponent />
      {this.renderIntialView()}
      <FooterComponent />
      </View>
      //<Ethio />
    );
  }
}

AppRegistry.registerComponent('iQaad', () => iQaad);