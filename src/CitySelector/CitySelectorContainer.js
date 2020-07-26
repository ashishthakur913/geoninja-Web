import { connect } from "react-redux";
import { setCity, setLoaderVisibility } from "../actions/AppActions";
import CitySelectorComponent from './CitySelectorComponent';

const mapStateToProps = (store, props) => ({
	city: store.getIn(['city']),
});

const mapDispatchToProps = (dispatch, props) => ({
	setCity	: (city) => dispatch(setCity(city)),
	setLoaderVisibility	: (visibility) => dispatch(setLoaderVisibility(visibility)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CitySelectorComponent);