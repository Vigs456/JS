
import {usersAPI, profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'; 
const SET_STATUS = 'SET_STATUS'; 

let initialState = {
		posts: [
		     {id: 1, message: 'Hi, how are you', likeCount: 56, comments: 4},
		     {id: 2, message: 'It is my first post', likeCount: 113, comments: 1},
		     {id: 3, message: 'Do you like my decoration?', likeCount: 69, comments: 0},
		     {id: 4, message: 'It is my post width my friends', likeCount: 71, comments: 17},
		],
		profile: null,
		status: '',  
	};


const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likeCount: 0,
				comments: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case SET_USERS_PROFILE: {
			return {
				...state,
				profile: action.profile,
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		default:
			return state;	
	}	
}



export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
		dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
		dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
		}
}

export default profileReducer;