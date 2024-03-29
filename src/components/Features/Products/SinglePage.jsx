import React from 'react'
import { useGetProductQuery } from './productSlice'
import "../../Style/style.scss"
export default function Single_Page() {
    const {data: sin_page} = useGetProductQuery()
    const id = +window.location.href.split("/")[4]

  return (
    <div>
        {
           sin_page?.filter(item => item.id === id)?.map((item, index) => {
            return <div className='sin_page' key={index}>
                <div className="single_left">
                    <h3 className='single_text '>{item.brands} {item.name}</h3>
                    <h4>Price: <span>{item.price}</span></h4>
                    <h4>Brand: <span>{item.brands}</span></h4>
                    <h4>Models: <span>{item.models}</span></h4>
                    <h5>Description:</h5> <hr />
                    <p>{item.description}</p>
                </div>
                
            </div>
           })
        }
    </div>
  )
}