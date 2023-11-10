import React from 'react';
import Loading from '../Assets/Icons/infinite-loader.gif';

export default function Loader() {
  return (
    <div className='loading'>
      <img src={Loading} alt="Loader" />
    </div>
  )
}
