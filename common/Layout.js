import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  const {children, footerstatus} = props;
  console.log('footerstatus', footerstatus)
  return (
    <>
    {true ? (
      <>
        <Header/>
        <Navbar/>
        <div className='container'>
          {children}
        </div>
        {!footerstatus && (<Footer/>)}
      </>
        
        ) : (
          <>
            <Header/>
            <Navbar/>
            {children}
            {!footerstatus && (<Footer/>)}
          </>
    )}
    </>
  )
}

export default Layout