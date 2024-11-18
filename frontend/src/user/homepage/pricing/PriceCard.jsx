import React from "react";

export const price = [
  {
    name: "BASIC PLAN",
    price: "49K",
    desc: "Perfect for individuals or small teams just getting started. Access essential features to begin your learning journey and unlock new possibilities.",
  },
  {
    name: "BEGINNER PLAN",
    price: "79K",
    desc: "Ideal for those who want a bit more. Gain access to additional resources and tools to further your learning experience and enhance your skills.",
  },
  {
    name: "PREMIUM PLAN",
    price: "109K",
    desc: "Unlock all features with exclusive content, priority support, and advanced tools to accelerate your growth.",
  }
];

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div className='items shadow' key={index}>
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
    </>
  );
}

export default PriceCard;
