const defaultState = {
  image: '',
  description: '',
}

const EditIntroReducer = (state = defaultState, action) => {
  const { type, image, description } = action
  if (type === 'EDIT_INTRO') {
    return { image, description }
  }
  return state
}

export default EditIntroReducer
