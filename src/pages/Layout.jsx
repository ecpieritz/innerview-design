import React, {useEffect} from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Layout() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.id-navbar');
    if (window.scrollY > 50) {
      navbar.style.background = '#9F0006'; // Defina a cor de fundo desejada
    } else {
      navbar.style.background = 'transparent';
    }
  };
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout