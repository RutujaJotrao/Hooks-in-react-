import React, { useState } from 'react'

const UseState = () => {

    const [name, setName]=useState("react");

  return (
    <div>
        <h1>UseState hook</h1>
        <p>Hello! Welcome to {name}</p>
        <br/>
        <button  onClick={() => {
            setName("react useState hook");
        }}>
        CLICK HERE
        </button>
    </div>
  )
}

export default UseState
