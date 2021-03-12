import s from 'styled-components'
import React, { useState } from 'react'

const Intro = ({pic, desc, submit, dispatchEditIntro}) => {
  const [image, setImage] = useState(pic)
  const [description, SetDescription] = useState(desc)
  return (
    <>
      <div className="form-group">
        <label for="image" style={{fontSize:18}}>Image</label>
        <input id="image" className="form-control" value={image} type="text" onChange={e => setImage(e.target.value)} placeholder="Enter Image url" />
      </div>
      <div className="form-group" style={{ marginTop: 40, marginBottom: 40}}>
        <label for="description" style={{fontSize:18}}>Description</label>
        <input id="description" className="form-control" value={description} type="text" onChange={e => SetDescription(e.target.value)} placeholder="Enter Description" />
      </div>
      <button id="submitbutton" type="submit" className="btn btn-primary" onClick={() => {
                                                                            dispatchEditIntro(image, description)
                                                                            submit()
      }}>Save</button>
      <button id="cancelbutton" type="button" class="btn btn-danger" onClick={submit}>Cancel</button>
    </>
  )
}

export default Intro
