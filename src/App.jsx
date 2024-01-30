import React from 'react'
import "./components/Style/style.scss"
import { Route, Routes } from 'react-router-dom'
import Sidebar from "./components/Features/Products/Sidebar"
import Product from "./components/Features/Products/Product"
import Brand from './components/Features/Products/Brand'
import Madels from './components/Features/Products/Madels'
import SinglePage from './components/Features/Products/SinglePage'
export default function App() {
  return (
    <>
      <div className='app'>
        <div className='app_menu'>
          <Sidebar />
        </div>
        <div className='app_routes'>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='brands' element={<Brand />} />
            <Route path='models' element={<Madels />} />
            <Route path='single_page/:id' element={<SinglePage/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}