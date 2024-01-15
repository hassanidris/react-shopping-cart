import React from 'react'
import { Link } from 'react-router-dom'


const DetailsButton = ({id}) => {
  return (
    <Link to={`/product/${id}`} key={id}>
    <button style={{border: '1px solid black'}} className=" bg-white p-1 rounded-lg hover:bg-black hover:text-white">View Details</button>
    </Link>
  )
}

export default DetailsButton