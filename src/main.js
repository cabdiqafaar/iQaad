import React, { Component } from 'react'

import createStore from './store/createStore'

import { Container,Button,View,Text,Header} from 'native-base'

import AppContainer from '../src/AppContainer'

import Home from '../src/routes/Home/components/home'

import initialState from '../src/routes/Home/modules/actionConstants'

export default class Root extends Component {
	renderApp() {
		const initialState = window.__INITIAL_STATE__;
		const store = createStore(initialState);
	
		return(
			<AppContainer store={store}/>

			)		
	}

	render(){
		return this.renderApp()
	}

}
