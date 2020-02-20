
import React from 'react';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
	return	{
		dialogsPage: state.dialogsPage, 
	}
}
let mapDispatchToProps = (dispatch) => {
 return {
 	snedMessage:  (newMessageText) => {
 		dispatch(addMessageActionCreator(newMessageText));
 	},
  }
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps), 
	withAuthRedirect
)(Dialogs);