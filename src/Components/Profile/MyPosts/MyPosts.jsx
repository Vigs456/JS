
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Texarea} from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return  <form onSubmit={props.handleSubmit} >
               <div>
                  <Field  component={Texarea} name='newPostText' placeholder={'Post Message'} validate={[required, maxLength10]} />
               </div>
               <div>
                     <button>Add post</button>
               </div>
            </form>
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


const MyPosts = (props) => {
  let postsElements = 
        [...props.posts]
            .reverse()
            .map (p => <Post message={p.message} likeCount={p.likeCount} key={p.id} comments= {p.comments} /> );

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
       props.addPost(values.newPostText);
  }

	return <div className={s.postsBlock}>
                <div>
                     <h2>My posts</h2>
                     <AddNewPostFormRedux onSubmit={onAddPost} />
                </div>
                <div className={s.posts}>
                     { postsElements }
                </div>
            </div>
}



export default MyPosts;