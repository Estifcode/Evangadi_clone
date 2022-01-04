import React from 'react'
import headerLogo from "./EVANGADI_PICTURES/evangadi-logo-home.png"
import "./Header.css"
function Header() {
    return (
    <div>
          <header className='headerCounter'>
            <div className='img1'>
                <img src={headerLogo}/>
            </div>
            <span className='icon'>
               ☰
            </span>
    </header>
         <div className='wana'>
             <p className='p1'>Join the network</p>
             <p className='p2'>Already have an account?<a className='a1'>Sign in</a></p>
             <form>
                 <div className='in11'>
                     <input className='in1' type="email" placeholder='Email adress'/>
                 </div>
                 <div className='in11'>
                     <input className='in1' type="text" placeholder='First name'/>
                 </div>
                 <div className='in11'>
                     <input className='in1' type="text" placeholder='Last name'/>
                 </div>
                 <div className='in11'>
                     <input className='in1' type="password" placeholder='Password'/>
                 </div>
             </form>
             <p className='p3'>I agree to the <a className='a2'>privacy policy</a>and<a className='a2'>terms of serivice.</a></p>
             <button className='btn1'>Agree and Join</button>
             
             <a className='a3'>Already have an account?</a>
          
             
         </div>

    </div>
  
















      
            //  <div className='header'>
            //     <div className='header_image'>
            //         <img src={headerLogo} alt="" />
            //     </div>
            // <div className='header_section2'>
            //         <div className='header_home'>
            //             <p>Home</p>
            //         </div>
            //         <div className='header_howItWorks'>
            //             <p>How It Works</p>
            //         </div>
            //         <div className='header_button'>
            //             <button className='header_buttonone'>SIGN IN</button>
            //         </div>
            // </div>
        // </div>
    )
}

export default Header
