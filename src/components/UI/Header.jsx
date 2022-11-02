import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isWidth, setIsWidth] = useState(600)
  const [isHeight, setIsHeight] = useState(600)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsHeight(300)
      setIsWidth(300)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })
  return (
    <div className="container-fluid" style={{ backgroundColor: '#0A2E46' }}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          {/* <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_8KZ9eh.json"
            background="#0A2E46"
            speed="1"
            style={{ width: { isWidth }, height: { isHeight } }}
            loop
            autoplay
          ></lottie-player> */}
          {/*<lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_1cazwtnc.json"
            background="#0A2E46"
            speed="1"
            style={{ width: { isWidth }, height: { isHeight } }}
            loop
            autoplay
          ></lottie-player>*/}
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_yz6jeebl.json"  
        background="transparent"  
        speed="1"  
        style={{ width: { isWidth }, height: { isHeight } }} 
        loop  
        autoplay
        ></lottie-player>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-col">
          <h1 className="main-title">
            <span style={{ color: 'orange' }}>&lt;</span>Development
            <span style={{ color: 'orange' }}>&gt;</span> <br /> Around this
            world
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
