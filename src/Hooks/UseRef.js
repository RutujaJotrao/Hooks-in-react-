import React, { useRef } from 'react'

const UseRef = () => {

    const intialref=useRef("121");

    const handle = (event) => {
        event.preventDefault();
        alert(intialref.current.value)
    }

  return (
    <div>
      <h1>UseRef hook</h1>
        <form onSubmit={handle}>
            <input type='text' ref={intialref}/>
                <button type='submit'>submit</button>
        </form> 
    </div>
  )
}

export default UseRef

//dont set here so after re-render also if we change ip then ntg works 