import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/style.scss"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to="/" className='btn btn-primary w-75'>Products</Link>
        <Link to="/brands" className='btn btn-primary w-75'>Brend</Link>
        <Link to="/models" className='btn btn-primary w-75'>Model</Link>
    </div>
  )
}