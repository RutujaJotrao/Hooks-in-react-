import React from 'react'
import { BrowserRouter as Router, Link, Route, useLocation } from 'react-router-dom';

function Products () {
   const location=useLocation();
   
   return(
    <div>
        <h2>Products Page</h2>
        <p>path name : {location.pathname}</p>
        <p>Search param : {new URLSearchParams(location.search).get('name')}</p>
    </div>
   );
}

const UseLocation = () => {
  return (
      <Router>
            <div>
            <h1>UseLocation hook</h1>
            <button>
                <Link to="/products/school?name=bags">
                CLICK ME</Link>
            </button>
            <Products/>
            </div>
      </Router>
  )
}

export default UseLocation

//Displaying Information Based on URL Parameters:
//building single pg application
