import React from 'react'
import { Header, Left, Right, Body,Button,
			Icon,Footer, Container,Title } from 'native-base'
import {AppRegistry,Text,View,ViewList, StyleSheet} 
from 'react-native'
export const HeaderComponent = () => {
	return (
	
		<Header style={{backgroundColor: '#3DD611',
					 height: 120, marginTop: -30}}>
		<Left>
		<Button transparent>
		<Icon ios='ios-menu' android="md-menu" 
				style={{color: '#fff'}} />
		</Button>
		</Left>	
		<Text style={{flex: 1, alignContent: 'center',
		 alignItems: 'center', margin: 20,
		 fontSize: 30, marginLeft: -40, color: '#fff',
		 marginTop: 40}}> iQaad</Text>
		</Header>

		
				
		)
}

export default HeaderComponent

