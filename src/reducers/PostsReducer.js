const defaultState = []

const posts = (state = defaultState, action) => {
  const {
    type, id, title, image, description,
  } = action
  switch (type) {
    case 'ADD_POSTS':
      return [
        ...state, {
          id, title, image, description,
        },
      ]
    case 'DELETE_POSTS':
      return state.filter(p => p.id !== id)
    case 'MODIFY_POSTS':
      return state.map(p => {
        if (p.id === id) {
          return {
            id, title, image, description,
          }
        }
        return p
      })
    default:
      return state
  }
}

export default posts
