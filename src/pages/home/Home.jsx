import React from 'react'
import './home.css'
import { getProduct } from '../../apis/getRequest'

export default function Home() {
  
const parameters = {offset: 0, limit: 20, sortBy: "latest"}
  console.log(getProduct(parameters))
  return (
    <div>Home</div>
  )
}
