import React from 'react'
import { toggleTheme } from '../utils'
import Button from '../components/common/Button'
import LoadingSpinner from '../components/common/LoadingSpinner'

const Home = () => {
  return (
    <div>
      <Button text="Toggle Theme" onClick={toggleTheme}/>
      <LoadingSpinner text="Loading"/>
    </div>
  )
}

export default Home
