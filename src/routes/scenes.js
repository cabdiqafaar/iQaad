import React from 'react'
import {Actions, Scene} from 'react-native-router-flux'
import HomeContainer from './Home/containers/HomeContainer'
import Register from '../components/Register'
import Login from '../components/Login'
const scenes = Actions.create(
	<Scene key="root" hideNavBar>
		<Scene key="home" component={HomeContainer}  initial />
		<Scene key="login" component = {Login} title="login"  />
		<Scene key="register" component = {Register} title="register"  />
	</Scene>
	)

export default scenes