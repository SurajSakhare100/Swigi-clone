// src/App.js
import React, { useState } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './components/Header';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';
import BestPlacesSection from './components/BestPlacesSection';
import BestGroceries from './components/BestGroceries';
import BottomNavbar from './components/BottomNavbar';
import MobileNavbar from './components/MobileNavbar';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Instamart from './components/Instamart';
import SidePanelModal from './components/SidePanelModal';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap once in your entry point

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header visible on all pages */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Routes to different pages */}
      <Routes>
        {/* Homepage route, renders all sections */}
        <Route
          path="/"
          element={
            <>
              <MainSection1 />
              <MainSection2 />
              <MainSection3 />
              <MainSection4 />
              <MainSection5 />
              <BestPlacesSection />
              <BestGroceries />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Exclude Navbar/Footer on specific pages */}
        <Route
          path="*"
          element={
            <>
              <BottomNavbar />
              <MobileNavbar />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* Sidebar modal */}
      <SidePanelModal isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default App;
