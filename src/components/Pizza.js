import React from 'react';
import Nav from './Navbar';
import Banner from './Banner';
import Menu from './Menu';
import Booking from './Booking';

const Pizza = () => {
  return (
    <div className='container-fluid'>
      <Nav />
      <div>
        <Banner />
      </div>
      <div className='container my-5'>
        <Menu />
        <Booking/>
      </div>
    </div>
  );
};

export default Pizza;
