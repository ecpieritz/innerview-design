import React from 'react'
import { useLocation } from 'react-router-dom';


function Footer() {
  const location = useLocation();
  const isAboutOrContact = location.pathname === '/about' || location.pathname === '/contact';

  return (
    <footer className={`id-footer ${isAboutOrContact ? 'white' : ''}`}>
      <div className="container-fluid">
        <a className='id-footer__logo' href="/"><p>InnerView</p></a>

        <p className='id-footer__made-by'>Made with ❤️ by Emilyn C. Pieritz</p>
      </div>
    </footer>
  )
}

export default Footer
