import React from 'react'

const isAuthenticated = true;

const WithAuthentication = (Component) => {

  return function(){
    <h1>HOC-Component</h1>
    if(!isAuthenticated){
        return <div>User is not authenticated</div>
    }

    return <Component />
  }
}

export default WithAuthentication