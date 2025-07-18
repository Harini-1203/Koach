import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {useLocation } from "react-router-dom";

const Layout = ({children}) => {
    const location = useLocation();
    const hideNavbarRoutes = ["/login", "/signup", "/forgot-password", "/welcome"];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div>
        {!shouldHideNavbar && <Navigation />}
        {children}
        <Footer />   
    </div>
  );
}

export default Layout