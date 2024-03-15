import React from 'react';
import Curocel from './Curocel';
import AddOn from './AddOn';
import Cart_Discount from './Cart_Discount';
import NewProducts from './New_products';
import BestSals from './BestSals';




const Home = () => {
  return (
    <div>
      <div><Curocel /></div>
      <section><AddOn /></section>
      <section><Cart_Discount/></section>
      <section><NewProducts/></section>
      <section><BestSals/></section>
    </div>
  )
}

export default Home
