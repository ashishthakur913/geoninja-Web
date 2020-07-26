import { connect } from "react-redux";
import { setLoaderVisibility } from "../actions/AppActions";
import MapComponent from './MapComponent';

const mapStateToProps = (store, props) => ({
	city: store.getIn(['city']),
});

const mapDispatchToProps = (dispatch, props) => ({
	setLoaderVisibility	: (visibility) => dispatch(setLoaderVisibility(visibility)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MapComponent);