import React, { Component } from 'react'
import {Footer,View,Text,FooterTab,Button,Container,Header,Content } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const { width, height} = Dimensions.get("window")
export default  FooterComponent = () => {
    const tabs = [
		{
		  title: "Gaadhi Raaxo",
		  subTitle: "Bajaaj qaad",
		  icon: "car"
		},

		{
		 title: "Gaadhi Raaxo",
		 subTitle: "Bajaaj 4 qaad",
		 icon: "car" 
		},

		{
		  title: "Gaadhi Raaxo",
		  subTitle: "Bajaaj qaad",
		  icon: "car" 
		}

		]

	return (

	<Container>
	<Footer style={styles.footerContainer}>
    <FooterTab>
    {
    	tabs.map((obj, index) => {
    		return (
    			<Button key={index}>
    			  <Icon size={15} name={obj.icon}/>
    			  <Text style={{fontSize: 12, color: (obj === 0)? "#F6961B" : "#fff"}}>{obj.title}</Text>
    			</Button>
    	)
    	})

	}
    </FooterTab>
    </Footer>
    </Container>
	)
	}

const styles = StyleSheet.create({
	footerContainer: {
		backgroundColor: '#33FF0C',
		height: 100,
		top: 480,
		width: width
	},
})
