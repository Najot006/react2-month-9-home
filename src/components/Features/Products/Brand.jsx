import React, { useState } from 'react'
import { useDeleteBrandMutation, useGetBrandsQuery } from "./productSlice"
import "../../Style/style.scss"
import BrendMadal from "../../Madaliddin/Brand"
export default function Brands() {
  const { data: brands } = useGetBrandsQuery()
  const [uniqdelete] = useDeleteBrandMutation()
  const [modal, setModal] = useState(false)
  const [ item, setItem ] = useState("")

  const addBrand = () => {
    setModal(true)  
    setItem("")
  }
  const remove = (id) => {
    uniqdelete(id)
  }
  const updateEdit = (item) => {
    setModal(true)
    setItem(item)
  }
  const toggle = () => {
    setModal(false)
  }

  return (
    <div className='container'>
      <BrendMadal open={modal} toggle={toggle} item={item} />
      <div className="row my-3">
        <div className="col-3 offset-2">
          <button onClick={addBrand} className='btn btn-primary'>add brand</button>
        </div>
      </div>
      <div className="brand">
        {
          brands?.map((item, index) => {
            return <div className='brand_box' key={index}>
              <h4>Brand: <span> {item.title}</span></h4>
              <div className='mt-5'>
                <button onClick={() => updateEdit(item)} className='btn btn-info'>edit</button>
                <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}