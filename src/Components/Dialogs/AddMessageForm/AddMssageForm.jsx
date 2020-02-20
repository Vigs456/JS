
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Texarea} from '../../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../../utils/validators/validators';

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field component={Texarea} name="newMessageText" placeholder={"Enter your message"}
					validate={[required, maxLength30]}/>
			</div>
		    <div><button>Send message</button></div>
		</form>
	)
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);