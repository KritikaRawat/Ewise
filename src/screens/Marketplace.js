import React from 'react'
import Navbar from '../components/Navbar'
import SellerList from './SellerList'

export default function Marketplace() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <SellerList/>
        </div>
    </div>
  )
}
