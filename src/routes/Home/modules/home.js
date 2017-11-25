import firebase from 'firebase'
import React from 'react'
import update from 'react-addons-update'
import request from '../../../utilities/request'
import { Dimensions } from 'react-native'
import RNGooglePlaces from 'react-native-google-places'
import constants from './actionConstants'
import calculateFare from '../../../utilities/calculateFare'
import firebase from 'fire-base'
const  { 
		GET_CURRENT_LOCATION,
		GET_INPUT,
		TOGGLE_SEARCH_RESULT,
		GET_ADDRESS_PREDICTIONS,
		GET_SELECTED_ADDRESS,
		GET_DISTANCE_MATRIX,
		FARE,
		CHANAGE_DESTINATION,
		CANCEL_ORDER,
    Book_CAR

	} = constants

const { width, height} = Dimensions.get("window")

const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.0922

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export function getCurrentLocation(){
  return(dispatch)=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        dispatch({
          type:GET_CURRENT_LOCATION,
          payload:position
        })
	  },
      (error) => console.log(error.message),
        {
          enableHighAcurracy: true,
          timeout: 2000,
          maximumAge: 1000
        }
		
    ); 
  }
}

function handleGetCurrentLocation(state, action){
  return update(state, {
    region:{
      latitude:{
        $set:action.payload.coords.latitude
      },
      longitude: {
        $set:action.payload.coords.longitude
      },
      latitudeDelta: {
        $set:LATITUDE_DELTA
      },
      longitudeDelta: {
        $set:LONGITUDE_DELTA
      }
    }
  });
}

export  function getInputData(payload){
  return {
    type:GET_INPUT,
      payload
 			
  }
} 

const handleInputData = (state,action) => {
  const {key, value} = action.payload
    return update(state,{
      inputData:{
       [key]:{
      $set:value
      }
    }
  })

}

export function toggleSearchResult(payload){
  return {
    type:TOGGLE_SEARCH_RESULT,
      payload
  }
}

function handleToggleSearchResult(state,action) {
  if(action.payload === "pickUp") {
    return update(state,{
      resultTypes:{
        pickUp:{
          $set: true
        },
        dropOff:{
          $set: false
        }				
    },

        predictions:{}
    })
  } 
  if(action.payload === "dropOff") {
    return update(state,{
      resultTypes:{
        pickUp:{
          $set: false
        },

        dropOff:{
          $set: true
        }

      },
      predictions:{}

    })
  }

}

export  function getAddressPredictions() {
  return(dispatch, store) => {
    let userInput = store().home.resultTypes.pickUp ?
      store().home.inputData.pickUp : 
      store().home.inputData.dropOff;
      RNGooglePlaces.openAutocompleteModal(userInput,{country: "NZ"})

    .then((results) => 	
      dispatch({
        type:GET_ADDRESS_PREDICTIONS,
        payload:results
      })
    )		

    .catch((error) => console.log(error.message))

  }
}

handleGetAddressPredictions = (state, action) => {
  return update(state, {					
    predictions:{
      $set:action.payload
    }
  }) 
}

export function getSelectedAddress(payload) {
  const myNumbers = {
    flag_fall: 3000,
    per_km: 3000,
    extra: [],
    perMinute: 1000,
    waiting_time: 1000,
    booking_charge: 1000
  }

  return (dispatch,store) => {
    RNGooglePlaces.lookUpPlaceByID(payload)
    .then((results) => { 		
      dispatch({
        type:GET_SELECTED_ADDRESS,
        payload:results
      })
    })

    .then((result) =>{
      if(store().home.selectedAddress.selectedPickUp
      	&& store().home.selectedAddress.selectedDropOff){
        request.get("https://maps.googleapis.com/maps/api/distancematrix/json")
        query({
          origin:store().selectedAddress.selectedAddressPickUp.latitude
          + "." + store().selectedAddress.selectedAddressPickUp.longitude,
          destinations:store().selectedAddress.selectedAddressDropOff.latitude
          + "." + store().selectedAddress.selectedAddressDropOff.longitude,
          mode:"driving",
          key:"AIzaSyCAuqBvdhTxT_7vn2iGOL-iZkiNE007GGw"
        })
        .finish((error, res) =>{
          dispatch({
            type: GET_DISTANCE_MATRIX,
            payload:res.body
          })
        })
      }
      setTimeout(function(){
        if(store.pickUp){
          const fare = fareCalculator(
            myNumbers.falag_fall,
            myNumbers.per_km,
            myNumbers.perMinute,
            myNumbers.extra,
            myNumbers.waiting_time,
            myNumbers.booking_charge,
            store().home.distancematrix.rows[0].elements.duration.value,
            store().home.distancematrix.rows[0].elements.distance.value
          )
          dispatch({
            type:GET_FARE,
            payload:fare
          })
        }
      }, 1000)
    })
    .catch((error) => console.log(error.message))

  }

}

handleGetSelectedAddress = (state,action) => {
  let selectedTitle = state.resultTypes.pickUp ?
    "selectedPickUP" : "selectedDropOff"
    return update(state,{
      selectedAddress:{
        [selectedTitle]:{
          $set:action.payload
        }
      },
      resultTypes:{
        pickUp:{
          $set:false
        },
        dropOff:{
          $set:false
        }
      }
    })
}

function handleDistanceMatrix(state,action){
  return update(state,{
    distanceMatrix: {
      $set:action.payload
    }
  })
}

function handleFare(state,action){
  return update(state,{
    fare:{
      $set:action.payload
    }
  })
}

export  function BookCar(){
  return (dispatch, store)=>{
  const payload = {
          order:{
            user:"cabdiqafaar", 
            pickUp:{
              address:store().home.selectedAddress.selectedPickUp.pickUp,
              name:store().home.selectedAddress.selectedPickUp.name,
              latitude:store().home.selectedAddress.selectedPickUp.latitude,
              longitude:store().home.selectedAddress.selectedPickUp.longitude

            },
            dropOff:{
              address:store().home.selectedAddress.selectedDropOff.pickUp,
              name:store().home.selectedAddress.selectedDropOff.name,
              latitude:store().home.selectedAddress.selectedDropOff.latitude,
              longitude:store().home.selectedAddress.selectedDropOff.longitude

            },
            fare:store().home.fare,
            status: 'bending'
          }

      let database = firebase.database();
      let ref = database.ref('bookings');
      let data = order

      if(ref.push(data)){
        alert(data)
      }else {
        alert('some thing went wrong')
      }
      .finish(err,res) =>{
        dispatch({
          type:BookCar,
          payload:action.payload

        })

      }
    }
  
  }
}

function handleBookCar(state, action) {
   update(state,{
    type:BookCar,
    payload:action.payload
   })
}


const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION:handleGetCurrentLocation,
  GET_INPUT:handleInputData,
  TOGGLE_SEARCH_RESULT:handleToggleSearchResult,
  GET_ADDRESS_PREDICTIONS:handleGetAddressPredictions,
  GET_SELECTED_ADDRESS:handleGetSelectedAddress,
  GET_DISTANCE_MATRIX:handleDistanceMatrix,
  FARE:handleFare,
  BookCar:handleBookCar
}

export const initialState = {
  region:{},
  inputData:{},
  resultTypes:{},
  predictions:{},
  selectedAddress:{},
  distanceMatrix:{},
} 

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state,action) : state
}

