
import React from 'react';
import Header from './Header.jsx'
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

	render () {
		return <Header {...this.props} />
	}
}

const mapSatToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});


export default connect(mapSatToProps, {logout}) (HeaderContainer);