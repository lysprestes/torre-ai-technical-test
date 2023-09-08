import React from 'react';
import '../styles/Page.css';

function Tab() {
  return (
    <div className='container'>
      <div className='no-tab'>
        Search
      </div>
      <div className='tabs tab' id='tab'>
        PEOPLE BY NAME
      </div>
      <div className='tabs tab'>
        PEOPLE BY SKILLS, ETC
      </div>
      <div className='tabs tab'>
        JOBS
      </div>
    </div>
  );
}

export default Tab;
