/*
import dialogsReducer from '../redux/dialogs-reducer.js';
import profileReducer from '../redux/profile-reducer.js';


let store = {
	_state: {
		profilePage: {
			newPostText: 'Learn ReactJs',
			posts: [
		      {id: 1, message: 'Hi, how are you', likeCount: 56, comments: 4},
		      {id: 2, message: 'It is my first post', likeCount: 113, comments: 1},
		      {id: 3, message: 'Do you like my decoration?', likeCount: 69, comments: 0},
		      {id: 4, message: 'It is my post width my friends', likeCount: 71, comments: 17},
			],
		},
		dialogsPage: {
			newMessageText: 'Hello',
			dialogsData: [
				{id: 1, name: 'Anna'},
				{id: 2, name: 'John'},
				{id: 3, name: 'Sarah'},
				{id: 4, name: 'Nicole'},
				{id: 5, name: 'Rebeka'},
				{id: 6, name: 'Tonny'},
			],
			messages: [
			    {id: 1, message: 'Hi'},
			    {id: 2, message: 'Can i help you?'},
			    {id: 3, message: 'Thanke you so much'},
			    {id: 4, message: 'Thanke you so much'},
			    {id: 5, message: 'Thanke you so much'},
		  	],
		},	
	},

	_callSubscriber () {

		console.log('');
	},

	subscribe (observer) {
		this._callSubscriber = observer;
	},

	getState () {
		return this._state;
	},

	dispatch (action) {

		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._callSubscriber(this._state);		 
	}	

}


export default store;*/