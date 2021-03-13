import React, { useState } from 'react'

const BlogPost = ({id, t, pic, desc, dispatchModifyPost, dispatchDeletePost
}) => {
  const [title, setTitle] = useState(t)
  const [image, setImage] = useState(pic)
  const [description, setDescription] = useState(desc)
  const [edit, setEdit] = useState(false)
  return (
    <>
      <div className="blogPost">
        {!edit && (
        <>
          <img alt="" className="img-fluid" src={pic} />
          <h3>
            Post #
            {id}
            :
            {t}
          </h3>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)} type="button" className="btn btn-primary">Edit</button>
        </>
        )}
        {edit && (
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
              dispatchModifyPost(id, title, image, description)
              setEdit(false)
            }}
            id="submitbutton"
            type="submit"
            className="btn btn-success"
          >
            Save
          </button>

          <button id="cancelbutton" onClick={() => setEdit(false)} type="button" className="btn btn-warning">Cancel</button>
          <button
            id="deletebutton"
            onClick={() => {
              setEdit(false)
              dispatchDeletePost(id, title, image, description)
            }}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </>
        )}
      </div>
    </>
  )
}
export default BlogPost
