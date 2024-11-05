import React from 'react';
import Button from './Button';

const Product = ({ title, description, hoverColor }) => {
  return (
    <div
      className={`w-full py-5 transition-all duration-300`}
      style={{
        backgroundColor: hoverColor, // Use the color passed from the parent
      }}
    >
      <div className='h-48 text-white flex justify-between items-center'>
        <h1 className='text-3xl mx-10'>{title}</h1>
        <div className='dets w-1/3 mr-10'>
          <p className='mb-10'>{description}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
