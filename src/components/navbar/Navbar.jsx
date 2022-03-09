import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar_container'> 
        <div className='navbar_wrapper'>
            <div className='logo'>
                <span>bizcards</span>.you
            </div>
            <div className='welcome_note'>
                Welcome, kakashi 
            </div>
            <div className='profile_btn'>
                <div className='profile_username'>
                    Kakashi Hatake
                </div>
                <div className='profile_pic'>
                    <img src="https://i.pinimg.com/originals/09/21/b1/0921b1e1f833f89d6fd22757fbef4260.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar