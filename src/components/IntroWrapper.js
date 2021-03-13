import React, { useState } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import { editIntro } from '../actions'

const IntroWrapper = ({dispatchEditIntro, EditIntroReducer}) => {
  const [edit, setEdit] = useState(false)
  return (
    <>
      <div className="intro">
        <h1 style={{ marginBottom: 40, fontSize: 45 }}>
          Hey this is me!
          {!edit && <button style={{ float: 'right', marginTop: 10 }} id="editbutton" type="button" className="btn btn-primary" onClick={() => setEdit(true)}>Edit</button>}
        </h1>
        {edit && (
        <Intro
          pic={EditIntroReducer.image}
          desc={EditIntroReducer.description}
          submit={() => setEdit(false)}
          dispatchEditIntro={dispatchEditIntro}
        />
        )}
        {!edit && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img alt="" className="img-fluid" src={EditIntroReducer.image} />
              </div>
              <div className="col-sm">
                <h3>{EditIntroReducer.description}</h3>
              </div>
            </div>
          </div>
        </>
        )}
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, description) => dispatch(editIntro(image, description)),
})

const mapStateToProps = state => ({
  EditIntroReducer: state.EditIntroReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroWrapper)
