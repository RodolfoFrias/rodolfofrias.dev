import React from 'react';
import '../../../public/assets/styles/Loader.scss';

const Loader = () => (
  <div className='loader__container'>
    <div className='loader__content'>
      <div className='spinner-grow text-center loader' role='status'>
        {/* <span className="sr-only">Loading...</span> */}
      </div>
      <p className='mt-5'>Loading..</p>
    </div>
  </div>
);

export default Loader;
