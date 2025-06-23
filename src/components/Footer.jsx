import React from 'react'
// import gitHubIcon from '../assets/github-icon.svg';
// import linkedInIcon from '../assets/linkedin-icon.svg';

const Footer = () => {
  return (
        <footer className='container border-top d-flex'>
         <div className='d-flex f-container'>
            <h2 className="font-playfair text-4xl font-clash-regular line-height-base split-text"><span className="text-4xl font-clash-bold accent-100"></span>Let's Work Together!</h2>
            <a className='email-link text-3xl font-clash-regular' href="mailto:nihaal.mansoor@outlook.com">nihaal.mansoor@outlook.com</a>
         </div>
         <div className='d-flex f-container'>
            <p className="font-clash text-sm font-clash-extralight">© Nihaal Mansoor 2024.</p>
            <div className="social-links d-flex">
               <div className='github'>
                  <a href="https://github.com/nihaal-mansoor" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" ><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
               </div>
               <div className='linkedin'>
                  <a href="https://www.linkedin.com/in/nihaal-mansoor-867486228" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" ><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
               </div>
            </div>
         </div>   
    </footer>
  )
}

export default Footer