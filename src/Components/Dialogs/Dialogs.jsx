
import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './Dialogitem/Dialogitem.jsx';
import {Redirect} from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMssageForm';

const Dialogs = (props) => {
	let newMessageElement = React.createRef();

	let state = props.dialogsPage;

	let dialogsElements = state.dialogsData.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />)	
  	let messagesElements = state.messages.map( (m) => <Message message={m.message} key={m.id}/> )
  	let newMessageText = state.newMessageText;

  	let addNewMessage = (values) => {
  		props.snedMessage(values.newMessageText);
  	}

  	if (!props.isAuth) return <Redirect to={'/login'} />;

	return 	<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{ dialogsElements }
				</div>
				<div className={s.messages}>
					<AddMessageForm onSubmit={addNewMessage}/>
					<div>{ messagesElements }</div>
				</div>
				
			</div>		
}

export default Dialogs;