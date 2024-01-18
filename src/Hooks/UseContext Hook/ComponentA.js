import React, { useState } from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB';

export const UserContext = createContext();

const ComponentA = () => {

    const [user, setUser]=useState("john");

    return (
    <div>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>

        <UserContext.Provider value={user}>
            {/* If u want u can pass any child here Ex: <ComponentB user={user}*/}
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA

//provides the way to pass the values bet multiple components without using props

//provider component(Component A)
//import {createContext} from 'react';
//export const MyContext=createContext();
//<MyContext.Provider value={value}>
//  <child/>
//</MyContext.Provider>

//Component B
//Component C

//consumer component(Component D)
//import React, {useContext} from 'react';
//import {MyContext} from './providecomponent';
//const value= useContext(MyContext)

