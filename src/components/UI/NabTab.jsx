import React from 'react'
import './NabTab.css'
import HomeConent from '../assets/HomeContent'
function NabTab() {
  return (
    <div className="container-fluid tab-body">
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container">
            <HomeConent></HomeConent>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          My Name is Israel Ortiz, I am a 22 year old student that likes how easy but complicated it can be, it is very cool
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          For my contact infomation, please email me at iortiz7707@southwestuniversity.edu or by clicking on the buttons on the bottom for my FaceBook, YouTube, Instagram, and Twitter! Hope to hear from you soon!
        </div>
      </div>
    </div>
  )
}

export default NabTab
