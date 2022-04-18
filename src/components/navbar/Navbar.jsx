import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import './Navbar.css'
import Logo from '../../assets/logo.svg';

function Navbar() {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false)
    console.log(location.pathname)
    const { pathname } = useLocation();
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate()
    const logoutFunc = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className='menu_background' style={{ display: `${openMenu === true ? 'flex' : 'none'}` }} onClick={() => setOpenMenu(false)}></div>
            <div className='navbar_container'>
                <div className='navbar_wrapper'>
                    <div className='logo'>
                        {/* <span className='logo_main'>bizcards</span><span className='logo_com'>.com</span> */}
                        <img src={Logo} width='200' height={70} alt="" />
                    </div>
                    <div className='welcome_note'>
                        Welcome, {currentUser.displayName}
                    </div>
                    <div className='profile_btn'>
                        <div className='profile_username'>
                            {currentUser.displayName}
                        </div>
                        {/* {location.pathname === '/create' ? <button className='navbar_logout_btn ' onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </button> :
                            null}
                        {currentUser ? <div className='navbar_logout_btn' onClick={logoutFunc}>
                            Logout
                        </div> : null} */}
                        <div className='profile_pic' onClick={() => setOpenMenu(!openMenu)}>
                            {currentUser.photoURL === null ? <img src="https://i.pinimg.com/originals/09/21/b1/0921b1e1f833f89d6fd22757fbef4260.jpg" alt="" /> : <img src={currentUser.photoURL} alt="profile picture" />}
                        </div>

                        <div className='navbar_menu' style={{ display: `${openMenu === true ? 'flex' : 'none'}` }}>
                            {currentUser ? <div onClick={logoutFunc}>
                                Logout
                            </div> : null}
                            {pathname.includes('dashboard')? null: <div onClick={() => {navigate('/dashboard'); setOpenMenu(false)}}>Dashboard</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar