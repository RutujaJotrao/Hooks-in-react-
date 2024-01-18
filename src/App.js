import React from 'react'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseMemo from './Hooks/UseMemo'
import UseNavigate from './Hooks/UseNavigate'
import UseLocation from './Hooks/UseLocation'
import UseRef from './Hooks/UseRef'
import ComponentA from './Hooks/UseContext Hook/ComponentA'
import UseOptimistic from './Hooks/UseOptimistic'

const App = () => {
  return (
    <div>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseMemo/> */}
      {/* <UseNavigate/> */ /* Not working*/ }
      {/* <UseLocation/> */}
      {/* <UseRef/> */}
      {/* <ComponentA/> */} {/*useContext hook */}
      <UseOptimistic/>
    </div>
  )
}

export default App
