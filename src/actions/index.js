export const editIntro = (image, description) => ({
  type: 'EDIT_INTRO',
  image,
  description,
})
let counter = 1

export const addPost = (title, image, description) => ({
  type: 'ADD_POSTS',
  id: counter++,
  title,
  image,
  description,
})

export const modifyPost = (id, title, image, description) => ({
  type: 'MODIFY_POSTS',
  id,
  title,
  image,
  description,
})

export const deletePost = (id, title, image, description) => ({
  type: 'DELETE_POSTS',
  id,
  title,
  image,
  description,

})
