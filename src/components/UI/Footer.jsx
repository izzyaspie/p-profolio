import React from 'react'

import './Footer.css'

function Footer() {

//fbbtn()=>


  return (
    <div
      className="container-fluid "
      style={{ paddingLeft: '0', paddingRight: '0' }}
    >
      <footer className="footer text-center text-lg-start footer-color">
        <div className="container d-flex justify-content-center py-5">
          <a href='https://youtu.be/dQw4w9WgXcQ' target="_blank" rel="noreferrer">
          <button
            type="button"
            className="btn   btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: '#282c34', color: 'white' }}
           
          >
            <i className="fab fa-facebook-f "></i>
          </button>
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ' target="_blank" rel="noreferrer">
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: '#282c34', color: 'white' }}
          >
            <i className="fab fa-youtube"></i>
          </button>
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ' target="_blank" rel="noreferrer">
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: '#282c34', color: 'white' }}
          >
            <i className="fab fa-instagram"></i>
          </button>
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ' target="_blank" rel="noreferrer">
          <button
            type="button"
            className="btn  btn-lg btn-floating mx-2 logo-colors"
            style={{ backgroundColor: '#282c34', color: 'white' }}
          >
            <i className="fab fa-twitter"></i>
          </button>
          </a>
        </div>

        <div className="text-center text-white p-3 copy-right">
          © 2022 Copyright: Israel Ortiz
        </div>
      </footer>
    </div>
  )
}

export default Footer
