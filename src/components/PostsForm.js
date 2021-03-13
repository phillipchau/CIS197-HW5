import React, { useState } from 'react'

const PostsForm = ({t, pic, desc, submit, dispatchAddPost
}) => {
  const [title, setTitle] = useState(t)
  const [image, setImage] = useState(pic)
  const [description, setDescription] = useState(desc)
  return (
    <>
      <form>
        <div className="form-group" style={{ marginBottom: 15 }}>
          <label htmlFor="titlePosts">Title</label>
          <input type="text" onChange={e => setTitle(e.target.value)} value={title} className="form-control" id="titlePosts" placeholder="Enter Title" />
        </div>
        <div className="form-group" style={{ marginBottom: 15 }}>
          <label htmlFor="imagePosts">Image</label>
          <input type="text" onChange={e => setImage(e.target.value)} value={image} className="form-control" id="imagePosts" placeholder="Enter Image" />
        </div>
        <div className="form-group" style={{ marginBottom: 15 }}>
          <label htmlFor="descriptionPosts">Description</label>
          <input type="text" onChange={e => setDescription(e.target.value)} value={description} className="form-control" id="descriptionPosts" placeholder="Enter Description" />
        </div>
      </form>
      <button
        onClick={() => {
          dispatchAddPost(title, image, description)
          submit()
        }}
        id="submitbutton"
        type="submit"
        className="btn btn-primary"
      >
        Save
      </button>

      <button id="cancelbutton" onClick={submit} type="button" className="btn btn-danger">Cancel</button>
    </>
  )
}
export default PostsForm
