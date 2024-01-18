import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {

    const nav=useNavigate();

    const navigate = () => {
        nav("/UseMemo");
    }

  return (
    <div>
      <h1>UseNavigate hook</h1>
      <button onClick={navigate}>Click here to navigate path</button>
    </div>
  )
}

export default UseNavigate

