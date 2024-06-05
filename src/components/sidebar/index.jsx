import React from 'react'
import { NavLink} from 'react-router-dom'
import "./sidebar.css"
const Sidebar = () => {
  return (
  <div className='navLink'>
    <NavLink to="/" className="link">
      Asosiy
    </NavLink>
    <NavLink to="buyurtmalar" className="link">
      Cars
    </NavLink>
    <NavLink to="single" className="link">
      Single
    </NavLink>
    <NavLink to="xizmatlar" className="link">
      Xizmatlar
    </NavLink>
    </div>
  )
}

export default Sidebar
