
import React from 'react';
import s from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({input, meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={s.formControl + ' ' + (hasError ? s.error : '')} >
			<div>
				{children}
			</div>
			<div>
				{ hasError && <span>{error}</span> }
			</div>
		</div>
	)
}

export const Texarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createFild = (component, name, placeholder, validators, type, text = '', props = {}) => {
	return <div>
				<Field component={component} 
					name={name} 
					placeholder={placeholder} 
					validate={validators} 
					type={type}
					{...props}/>{text}
			</div>
}
