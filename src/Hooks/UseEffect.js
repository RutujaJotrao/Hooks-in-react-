import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  
    const [count, setCount]=useState(0);
    const [color, setColor]=useState("Teal");
    
    //runs after every re-render
    useEffect (() => {
        document.title=`Count : ${count} ${color}`
    })


    //runs only on mount
    // useEffect (() => {
    //     document.title=`Count : ${count} ${color}`
    // }, [])


    //runs on mount and runs when value changes
    // useEffect (() => {
    //     document.title=`Count : ${count} ${color}`
    // }, [count, color])
 
    
    const click = () => {
        setCount(prev => prev + 1)
    }

    const changeCol = () => {
        setColor(c => c === "Teal" ? "red" : "Teal")
    } 

    return (
        <div>
            <h1>UseEffect hook</h1>
            <p style={{color : color}}>Count : {count}</p>
            <button onClick={click}>Click Count</button>
            <button onClick={changeCol}>Change Color</button>
        </div>
    )
}

export default UseEffect

/*
    useEffect(function, [dependencies])
    1. useEffect ( () => {} ) runs after every re-render
    2. useEffect ( () => {}, [] ) runs only on mount
    3. useEffect ( () => {}, [value] ) runs on mount + when value changes
*/ 