import PostsStyle from './Posts.module.css'
import Post from './Post.jsx'
import React from 'react';
import { Formik, Form, Field } from 'formik';


const Posts = (props) => {
    let posts = []
    let id = 0
    for (let post of props.posts) {
        id++
        posts.push(<Post key={id.toString()} img={post.img} text={post.text} id={post.id} />)
    }
    return (
        <div className={PostsStyle.posts}>
            <div className={PostsStyle.header}>
                <PostsForm publishPost={props.publishPost} id={props.id}/>
            </div>
            {posts}
        </div>
    )
}

const PostsForm = (props) => {
    return (
        <Formik initialValues={{ newPostText: '' }}
            onSubmit={(values, { resetForm  }) => {
                props.publishPost(props.id, values.newPostText)
                resetForm ();
            }}
        >
            {() => (
                <Form >
                     <Field name='newPostText' placeholder={'Что нового?'} className={PostsStyle.input} />
                     <button type='submit' >Опубликовать</button>
                </Form>
            )}
        </Formik>
    )
}

export default Posts;