
import React from 'react';
import profileReducer, {addPostActionCreator} from './profile-reducer';


let state = {
	posts: [
	     {id: 1, message: 'Hi, how are you', likeCount: 56, comments: 4},
	     {id: 2, message: 'It is my first post', likeCount: 113, comments: 1},
	     {id: 3, message: 'Do you like my decoration?', likeCount: 69, comments: 0},
	     {id: 4, message: 'It is my post width my friends', likeCount: 71, comments: 17},
	],
};

/*test('length posts of should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator('Hayyy samuraj')
	// 2. action
 	let newState = profileReducer(state, action)
 	// 3. expectation
 	expect(newState.posts.length).toBe(5);
});*/

test('length', () => {
	// 1. test data
	let action = delete(1)
	// 2. action
 	let newState = profileReducer(state, action)
 	// 3. expectation
 	expect(newState.posts.length).toBe(4);
});
