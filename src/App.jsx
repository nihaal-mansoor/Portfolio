// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import PageNotFound from './pages/404'

import React, { useEffect, useRef } from 'react';
// import Lenis from '@studio-freight/lenis';
import { ReactLenis, useLenis } from 'lenis/react';

// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

function App() {

  // gsap.registerPlugin(useGSAP);
  // const heading = document.querySelectorAll('.split-text');
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
