import React, { useState } from 'react'
import IntroWrapper from './IntroWrapper'
import '../styles/App.css'

const App = () => {
  const [edit, setEdit] = useState(false)
  return (
    <>
      <IntroWrapper/>
    </>
  )
}
export default App