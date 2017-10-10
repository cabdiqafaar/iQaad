import React, {Component} from 'react'
import {Provider} from 'react-redux'
import firebase from 'firebase'
import Router,{Scene} from 'react-native-router-flux'
import Loader from './loader'
import AppContainer from '../AppContainer'
import {
	AppRegistry,
	Text,
	ViewList,
	StyleSheet,
	Dimensions,
	Container	
} from 'react-native'
import {Button,Input,InputGroup, Icon,View,Content} from 'native-base'
import {StackNavigator} from 'react-navigation'
import HeaderComponent from '../headerComponent'
//import Home from './home'
import Register from './Register'
import FooterComponent from '../footerComponent'
//import store from '../store/createStore'
export default class Login extends Component {

constructor(props) {
	super(props)
	this.state = {
		email: '',
		password: '',
		error: '',
		louding: null
	}
}


	renderLoader() {
		if(this.state.loading) {
			return <Loader size='large'/>
		} else {
			return  <Button onPress={() => this.submit()}  
		  				style={{marginTop: 50}} block ><Text>Login</Text>
					</Button>
		}
	}

	submit() {
		const {email, password} = this.state
		this.setState({error:'', loading: true})
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(this.onAuthSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email,password)
			.then(this.onAuthSuccess.bind(this))
			.then(this.onAuthFail.bind(this))
		})		
	}

	onAuthSuccess(){
		this.setState({
			email:'',
			password: '',
			error: '',
			loading: true
		})
	}

	onAuthFail(){
		this.setState(
			{
				error: 'Waanka xunahay fadlan markale kuceli',
				 loading: false
			})
	}

render() {
//const {louding} = this.state
//const {auth} = this.props.stores
//const navigate = this.props.navigation
return(
 <View>
<Text style={{marginBottom: 20,backgroundColor:'#ADBEFF',color: '#fff', fontSize: 20}}>
Fadalan Halkan kagal ama xubin noqo!
</Text>
	<InputGroup style={{marginTop: 10}} >
		<Icon name='person' style={{color: '#1200D2'}}/>
		<Input placeholder='Naa naysta ama talefanka...' 
		style={{backgroundColor: '#fff',margin: 10}} 
	 	onChangeText={email => this.setState({email})}
	  	//value={() => this.state.email}
    />
	</InputGroup>

 	<InputGroup>
 		<Icon name='lock' style={{color: '#1200D2'}} />
 		<Input secureTextEntry={true} placeholder='Furaha ama Password...' 
 		style={{backgroundColor: '#fff', margin: 10}} inlineLabel='Naanaytsa'
		onChangeText={password => this.setState({password})} 
		/>
 	</InputGroup>
	 <Text style={{color: 'red', padding: 20,
	 marginBottom: 15, backgroundColor: '#fff', fontSize: 20}}>{this.state.error}</Text>
		<View>
			{this.renderLoader()} 

		</View> 
   	</View>

		
		)
	}
}

const styles = StyleSheet.create({

	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#4B4F51'
	},
	header: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3DD611',
		padding: 15,
		margin: 5,
		fontSize: 20,


	},
	backGround: {
		flex: 1,
		height: null,
		width: null
		
	},
	foreGround: {
		flex: 1,
		marginTop: Dimensions.get('window').height/1.75, 
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 20,
		paddingBottom: 90,
		bottom: 0
	}
})