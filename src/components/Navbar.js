import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'>Contact List</Link>
            </div>
        </nav >
    </div>
  )
}

export default Navbar
