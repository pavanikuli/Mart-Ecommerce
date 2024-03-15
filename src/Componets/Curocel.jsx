import Carousel from 'react-bootstrap/Carousel';
import { SliderData } from "./products";
function UncontrolledExample() {
    
    return (
        <Carousel id='cd_dec'>
            {
                SliderData.map(item => (
                    <Carousel.Item>
                        <div key={item.id} className='data'>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button className="Cu_btn">Visit Colections</button>
                            </div>
                            <div>
                                <img src={item.cover} alt="hi" />
                            </div>
                        </div>
                    </Carousel.Item>
                )
                )
            }
        </Carousel>
    );
}

export default UncontrolledExample;


//  import React from "react";
// import Slider from "react-slick";
// import { SliderData } from "./products";
// import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from "react-icons/io";

// function SimpleSlider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 3000,
//         autoplaySpeed: 3000,
//     };
//     return (
//         <div class="slider-container" id="cd_dec">
//             <Slider {...settings}>
//                 {
//                     SliderData.map((da) => (
//                         <div className="container text-center">
//                             <div className=" row">
//                                 <div className="col-1">
//                                 <IoIosArrowDropleftCircle className="rightIcon"/>
//                                 </div>
//                                 <div className="col-4">

//                                     <h1>{da.title}</h1>
//                                     <p>{da.desc}</p>
//                                     <button className="Cu_btn">Visit Colections</button>
//                                 </div>
//                                 <div className="col">
//                                     <img src={da.cover} className="cimg" alt="..." />

//                                 </div>
//                                 <div className="col-1">
//                                 <IoIosArrowDroprightCircle/>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </Slider>
//         </div>
//     );
// }

// export default SimpleSlider;
// npm install react-bootstrap bootstrap