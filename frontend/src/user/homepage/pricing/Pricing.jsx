import "./price.css";
import PriceCard from "./PriceCard";
import React from "react";

const Pricing = () => {
  return (
    <>
    <div className="pricetop">
      <h1>Choose The Right Plan</h1> 
      </div>
            <div className='price padding'>
        <div className='containergrid'>
          <PriceCard />
        </div>
      </div>
   
    </>
  )
}

export default Pricing
