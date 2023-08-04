import React from 'react';
import './Navbar.css';
import Navbar from './Navbar';
import ClientPortal from './ClientPortal';
import CenterPicture from './CenterPicture';
import ThreeSlide from './ThreeSlide';
import ThreeColumnLayout from './ThreeColumnLayout';
import DemoComponent from './DemoComponent ';
import ReverseDemoComponent from './ReverseDemoComponent';
import YourComponent from './YourComponent';
import Footer from './Footer';
import Posts from './Posts';
const App = () => {
  return (
    <div>
      <Navbar />
      <ClientPortal />
      <CenterPicture />
      <ThreeSlide />
      <ThreeColumnLayout />
      <DemoComponent />
      <ReverseDemoComponent />
      <YourComponent />

      <Posts />
      <Footer />
    </div>
  );
};

export default App;
