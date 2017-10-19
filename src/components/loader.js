import React from 'react'
import {Text, View, ActivityIndicator} from 'react-native'

 const Loader = ({size}) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<ActivityIndicator size={size || 'small'} />
		</View>)
}

export default Loader