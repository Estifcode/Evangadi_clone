import React from 'react'
import headerLogo from "./EVANGADI_PICTURES/evangadi-logo-home.png"
import "./Header.css"
function Header() {
    return (
      
             <div className='header'>
                <div className='header_image'>
                    <img src={headerLogo} alt="" />
                </div>
            <div className='header_section2'>
                    <div className='header_home'>
                        <p>Home</p>
                    </div>
                    <div className='header_howItWorks'>
                        <p>How It Works</p>
                    </div>
                    <div className='header_button'>
                        <button className='header_buttonone'>SIGN IN</button>
                    </div>
            </div>
        </div>
    )
}

export default Header
