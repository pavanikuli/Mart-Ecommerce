import React from 'react';
import { serviceData } from './products';

const AddOn = () => {

  return (
    <>
    <div class="Offers_dec">
      {
        serviceData.map((s)=>(
          <div style={{background:`${s.bg}`}} className='ofCart'>
            <span> {s.icon}</span>
            <h5>{s.title}</h5>
            <p>{s.subtitle}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default AddOn
