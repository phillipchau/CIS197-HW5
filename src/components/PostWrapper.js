import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost, modifyPost, deletePost } from '../actions'
import PostsForm from './PostsForm'
import BlogPost from './BlogPost'

const PostWrapper = ({dispatchAddPost, dispatchModifyPost, dispatchDeletePost, PostsReducer
}) => (
  <>
    <div className="blog">
      <h1>
        Blog Posts
        <button
          style={{ float: 'right', marginTop: 10 }}
          onClick={() => {
            document.getElementById('postForm').style.display = 'block'
          }}
          id="postbutton"
          type="button"
          className="btn btn-primary"
        >
          Add Post
        </button>
      </h1>
      <div id="postForm" className="postForm">
        <div className="wrapper">
          <PostsForm
            t=""
            pic=""
            desc=""
            submit={() => {
              document.getElementById('postForm').style.display = 'none'
            }}
            dispatchAddPost={dispatchAddPost}
          />
        </div>
      </div>
      <div className="feed">
        {PostsReducer.map(post => (
          <BlogPost
            key={post.id}
            id={post.id}
            t={post.title}
            pic={post.image}
            desc={post.description}
            dispatchModifyPost={dispatchModifyPost}
            dispatchDeletePost={dispatchDeletePost}
          />
        ))}
      </div>
    </div>
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description)),
  dispatchModifyPost: (id, title, image, description) => dispatch(modifyPost(id, title,
    image, description)),
  dispatchDeletePost: (id, title, image, description) => dispatch(deletePost(id, title, 
    image, description)),
})

const mapStateToProps = state => ({
  PostsReducer: state.PostsReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostWrapper)