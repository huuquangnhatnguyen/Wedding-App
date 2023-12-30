// CoverPage.js

import React from 'react';

const CoverPage = () => {
  return (
    <div className="coverPage">
      <img
        src={process.env.PUBLIC_URL + '/images/wed.jpg'}
        alt="Cover"
        style={{ width: '100%', height: 'auto', maxHeight: '100vh' }}
      />

      <div className="overlay">
        <h1 className="title">text placeholder</h1>
        <h1 className='title'>text placeholder</h1>
      </div>
    </div>
  );
};

export default CoverPage;
