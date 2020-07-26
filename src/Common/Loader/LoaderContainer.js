import { connect } from "react-redux";
import LoaderComponent from './LoaderComponent';

const mapStateToProps = (store, props) => ({
	loader: store.getIn(['common', 'loader']),
});

export default connect(
	mapStateToProps,
	null
)(LoaderComponent);