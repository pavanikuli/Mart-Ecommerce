import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { Watchas, discoutProducts, newAravils, products } from './products';
import { addToCart, visitProduct } from '../Storage/Action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdAdd } from "react-icons/io";


const OneProduct = () => {
    const oneData = useSelector(state => state.oneProduct);
    const [activeTab, setActiveTab] = useState("description");
    const [product, setProduct] = useState(products)
    const navigate = useNavigate()
    const dispatch = useDispatch();

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
    const toggleTab = (tab) => {
        setActiveTab(tab);
    };
   
    const getDetils = (item) => {
        dispatch(visitProduct(item))
        dispatch(addToCart(item));
        navigate("/OneProduct")
    }
     
    return (
        <>
            {oneData.map(item => (
                <div key={item.id}>
                    <div className='shop_dec'>
                        <h1>{item.productName}</h1>
                    </div>
                    <section className='oneProduct'>
                        <img src={item.imgUrl} alt="..." />
                        <div className='oneText'>
                            <h3>{item.productName}</h3>
                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                            <span>{item.avgRating}%</span>
                            <aside>
                                <strong>${item.price}</strong>
                                <span>Category: {item.category}</span>
                            </aside>
                            <p>{item.shortDesc}</p>
                            <button>Add More</button>
                        </div>
                    </section>
                    <section className='single_dec'>
                        <div>
                            <button
                                className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
                                onClick={() => toggleTab("description")}
                            >
                                Description
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
                                onClick={() => toggleTab("reviews")}
                            >
                                Reviews
                            </button>
                        </div>
                        {activeTab === "description" && <p>{item.description}</p>}
                        {activeTab === "reviews" && <p>{item.reviews.map(i => (
                            <>
                                <aside>{i.rating}</aside>
                                <p>{i.text}</p>
                            </>

                        ))}</p>}
                    </section>
                </div>
            ))}
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
    );
};

export default OneProduct;