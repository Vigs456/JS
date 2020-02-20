
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
	};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
				let newMessage = action.newMessageText;
				let	idNum = {...state.messages};
				return {
					...state,
					messages: [...state.messages, {id: 6, message: newMessage}],
				};
		default: 
			return state;	
	}
}


export const addMessageActionCreator = (newMessageText) => ({
		type: ADD_MESSAGE, newMessageText
});
export default dialogsReducer;