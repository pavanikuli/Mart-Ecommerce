import React from 'react';
import { products } from './products';
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart, visitProduct } from '../Storage/Action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BestSals = () => {
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
    const getDetils = (item) => {
        dispatch(visitProduct(item))
        dispatch(addToCart(item));
        navigate("/OneProduct")
    }
  return (
    <div className='discount_dec'>
            <h1>Big Discuont</h1>
            <ToastContainer  />
            <div className='dic_dec'>

                {
                    products.map(item => (
                        <div className="card" id="dicount" >
                            <div onClick={() => getDetils(item)}>
                                <img src={item.imgUrl} className="card-img-top" alt="..." />
                                <sup>{item.hurtLike}</sup>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                <div className='dic_btn'>
                                    <strong>${item.price}</strong>
                                    <button onClick={()=>cartHandler(item)}><IoMdAdd/></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}


export default BestSals
