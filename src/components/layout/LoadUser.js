import React from 'react';

const PreLoader = () => {
  return (
    <div className='preloader-wrapper active' style={loading}>
      <div className='spinner-layer spinner-light-blue-only'>
        <div className='circle-clipper left'>
          <div className='circle'></div>
        </div>
        <div className='gap-patch'>
          <div className='circle'></div>
        </div>
        <div className='circle-clipper'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
};

const loading = {
  margin: '10px auto',
  display: 'flex',
};

export default PreLoader;
