import React from 'react'
import { NavLink } from 'react-router-dom'

const Mynav = () => {
  return (
    <>
    
      <div className="navcontainer">
  <div className="icon">
   
    <h2><span>NAV</span> <span style={{color:"red" }} >BAR</span></h2>
  </div>
  <div className="link">
    <NavLink to="/">
    HOME</NavLink>
    <NavLink to="/product">DETAILS</NavLink>
  </div>
  
</div>
    </>
  )
}

export default Mynav
