import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {StyleSheet} from 'react-native'

import { Router } from 'react-native-router-flux'

import {Provider} from 'react-redux'

import { Container,Button,View,Text,Header} from 'native-base'

import scenes from '../routes/scenes'

class AppContainer extends Component {
  render() {	
    return (
      <Container>
        <Provider store={this.props.store}>
          <Router scenes={scenes}/>
        </Provider>
      </Container>
    )
  }
}

export default AppContainer
