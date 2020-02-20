
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
      <div className={s.item}>
            <img src="https://i.pinimg.com/originals/13/04/f2/1304f2e4626bdbe0070fef0b9756408d.jpg" alt=""/>
            {props.message}
            <div>
              <span>Like</span> {props.likeCount}
              <span> Comments</span> {props.comments}
            </div>
      </div>
   )         
}

export default Post;