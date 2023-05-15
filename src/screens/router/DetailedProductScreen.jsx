import React from 'react'
import { useParams } from 'react-router-dom'

const DetailedProductScreen = () => {
  const {productId} = useParams();
  return (
    <p>Displaying the product with Id : {productId}</p>
  )
}

export default DetailedProductScreen