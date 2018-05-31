import React, {Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
	render() {
		return(
			<div>Profile Goes Here</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
};

export default connect(mapStateToProps)(Profile);