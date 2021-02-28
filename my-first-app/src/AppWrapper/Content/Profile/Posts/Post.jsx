import PostStyle from './Post.module.css'
import React from 'react';

const Post = (props) => {
    return (
        <div className={PostStyle.post}>
            <div className={PostStyle.text}>{props.text}</div>
            <div className={PostStyle.img}><img className={PostStyle.img} alt='' src={props.img}/></div>
        </div>
    )
}

export default Post;
