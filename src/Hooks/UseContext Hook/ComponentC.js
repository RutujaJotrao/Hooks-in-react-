import React, { useContext } from 'react'
import UseContext from '../UseContext'
import {UserContext} from './ComponentA'

const ComponentC = () => {

    const value=useContext(UserContext);

  return (
    <div>
      <h1>Component C</h1>
      <h2>{`Hello ${UseContext}`}</h2>
    </div>
  )
}

export default ComponentC
