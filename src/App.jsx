import React from 'react'
import "./App.css"
import { Header, Sidebar } from './components'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='sidebar'>
		<Sidebar/>
		<div className="component">
		<Header/>
		<div className='outlet'>
		<Outlet/>
		</div>
		</div>
	</div>
  )
}

export default App
