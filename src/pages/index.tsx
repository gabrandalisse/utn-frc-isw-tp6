import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';

export default function Home() {
  return (
    <>
     <style jsx global>{`
        .bg-custom-green {
          background: #00b09b; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #96c93d,
            #00b09b
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #96c93d,
            #00b09b
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
      <Header/>
      <Checkout/>
      <Footer/>
    </>
  );
}
