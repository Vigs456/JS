
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';
import {createFild} from '../common/FormsControls/FormsControls'


const LoginForm = ({handleSubmit, error}) => {
	return 	(

		<form onSubmit={handleSubmit} >
				{createFild(Input, 'email', 'Login', [required])}
				{createFild(Input, 'password', 'Passsword', [required], 'password')}
				{createFild(Input, 'rememberMe', 'checkbox',[], 'checkbox', 'remember me')}
			{error && <div className={s.formSumaryError}>
							{error}
						</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
		)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) 

const Login = ({login, isAuth}) => {
	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe)
	}

	if (isAuth) {
		return <Redirect to={'/profile'} />
	}

	return 	<div>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);