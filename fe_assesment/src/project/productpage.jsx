import React, { useState } from 'react';

const ProductBox = ({ title, price, discount, size, color, isPopular }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={`product-box ${showOptions ? 'active' : ''}`}
      onClick={() => setShowOptions(!showOptions)}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-lg text-gray-500">{discount}% Off</p>
        </div>
        <p className="text-2xl font-bold">${price} USD</p>
      </div>
      {isPopular && (
        <div className="most-popular">MOST POPULAR</div>
      )}
      {showOptions && (
        <div className="product-options">
          <label htmlFor={`${title.toLowerCase()}-size`} className="text-lg">
            Size:
          </label>
          <select
            id={`${title.toLowerCase()}-size`}
            className="text-lg"
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <label htmlFor={`${title.toLowerCase()}-color`} className="text-lg">
            Color:
          </label>
          <select
            id={`${title.toLowerCase()}-color`}
            className="text-lg"
          >
            <option value="black">Black</option>
            <option value="color">Colour</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default function ProductPage(){
  return (
    <div>
      <h2 className="text-2xl text-pink-500 mb-4" style={{color:'#FF6B82'}}>YAY! It's BOGO</h2>
      <ProductBox
        title="1 Unit"
        price={10}
        discount={10}
        isPopular={false}
      />
      <ProductBox
        title="2 Unit"
        price={18}
        discount={20}
        isPopular
      />
      <ProductBox
        title="3 Unit"
        price={24}
        discount={30}
        isPopular={false}
      />
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h1 style={{color:'#FF6B82',size:'14px'}}>Free Delivery</h1>
        <h1>Total : $18.00 USD</h1>
      </div>
      <a href="#" className="add-to-cart">
        + Add to Cart
      </a>
    </div>
  );
};
