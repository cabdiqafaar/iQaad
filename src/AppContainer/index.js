import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {StyleSheet, Dimensions} from 'react-native'

import { Router } from 'react-native-router-flux'

import {Provider} from 'react-redux'
const { width, height } = Dimensions.get("window")
import { Container,Button,View,Text,Header} from 'native-base'

import scenes from '../routes/scenes'

class AppContainer extends Component {
  render() {	
    return (
      <Container style={{width: width}}>
        <Provider store={this.props.store}>
          <Router scenes={scenes}/>
        </Provider>
      </Container>
    )
  }
}

export default AppContainer
