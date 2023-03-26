import React from 'react';
import Banner from './assets/components/Banner/Banner';
import Failures from './assets/components/Failures/Failures';
import Footer from './assets/components/Footer/Footer';
import HandWatch from './assets/components/HandWatch/HandWatch';
import Header from './assets/components/Header/Header';
import MyPlans from './assets/components/MyPlans/MyPlans';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Failures />
      <MyPlans />
      <HandWatch />
      <Footer />
    </>
  );
};

export default App;