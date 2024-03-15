import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Watchas,  newAravils, products } from './products';
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useDispatch} from 'react-redux';
import { addToCart, visitProduct } from '../Storage/Action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Shop = () => {
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [product, setProduct] = useState(products)
  const dispatch = useDispatch();
  const navigate = useNavigate()

    const cartHandler = (item) => {
          dispatch(addToCart(item));
          toast.success('product add', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
  const toggleToProducts = (filter) => {
    setProduct(filter)
    setIsFilterApplied(!isFilterApplied)
  }
  const getDetils = (item) => {
    dispatch(visitProduct(item))
    dispatch(addToCart(item));
    navigate("/OneProduct")
}
 
  return (
    <>
      <div className='shop_dec'>
        <h1>Products</h1>
        <ToastContainer  />
      </div>
      <div className="btn-group" id='shop_sec'>
        <section>
          <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Category |
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={() => toggleToProducts(products)} >Chair</a></li>
            <li><a className="dropdown-item" onClick={() => toggleToProducts(newAravils.slice(6, 10))} >Wireless</a></li>
            <li><a className="dropdown-item" onClick={() => toggleToProducts(newAravils.slice(0, 6))} >Mobiles</a></li>
            <li><a className="dropdown-item" onClick={() => toggleToProducts(Watchas)} >watch</a></li>
          </ul>
        </section>
        <section className='Shop_in'>
          <input type="text" placeholder='search...' />
          <FaSearch className='shop_icon' />
        </section>
      </div>

      <div className='dic_dec'>
        {
          product.map(item => (
            <div className="card" id="dicount">
              <div onClick={() => getDetils(item)}>
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <sup>{item.hurtLike}</sup>
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <div className='dic_btn'>
                  <strong>${item.price}</strong>
                  <button onClick={()=>cartHandler(item)}><IoMdAdd /></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Shop
