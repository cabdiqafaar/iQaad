import { connect } from 'react-redux'
import Home from '../components/home'
import { 
		getCurrentLocation,
		getInputData,
		toggleSearchResult,
		getAddressPredictions,
		getSelectedAddress,
		distanceMatrix,
		fare
		 } from '../modules/home'

 const  mapStateToProps = (state) => ({
	region: state.home.region,
	inputData: state.home.inputData || {},
	resultTypes: state.home.resultTypes,
	predictions: state.home.predictions || [],
	distanceMatrix: state.home.distanceMatrix,
	fare: state.home.fare

})

const mapActionCreators = {
		 getCurrentLocation,
		 getInputData,
		 toggleSearchResult,
		 getAddressPredictions,
		 getSelectedAddress,
		 distanceMatrix,
		 fare
	}

export default connect(mapStateToProps,mapActionCreators)(Home);

