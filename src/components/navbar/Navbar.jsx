import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import './Navbar.css'

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
                        <svg width="200" height="50" viewBox="0 0 508 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81.1646 160.679V113.372C78.3516 116.944 74.6219 120.082 69.9813 122.791C65.3521 125.5 59.3365 126.855 51.9458 126.855C43.7417 126.855 36.4083 125.014 29.9458 121.331C23.4948 117.648 18.3958 112.61 14.6375 106.218C10.8792 99.8253 9 92.5651 9 84.4371C9 76.3091 10.8792 69.0807 14.6375 62.7413C18.3958 56.3913 23.4948 51.4065 29.9458 47.7764C36.4083 44.1517 43.7417 42.3366 51.9458 42.3366C58.5115 42.3366 64.2578 43.4743 69.1792 45.7444C74.112 48.0199 78.1052 51.216 81.1646 55.3329L83.6396 44.2839H103.692V160.679H81.1646ZM56.7125 108.652C63.9828 108.652 69.9354 106.408 74.5646 101.921C79.1938 97.4229 81.5083 91.6444 81.5083 84.5853C81.5083 77.5474 79.1938 71.7794 74.5646 67.2921C69.9354 62.7942 63.9828 60.5399 56.7125 60.5399C49.5453 60.5399 43.6156 62.7624 38.9292 67.2074C34.237 71.6419 31.8938 77.3833 31.8938 84.4371C31.8938 91.4803 34.237 97.28 38.9292 101.836C43.6156 106.382 49.5453 108.652 56.7125 108.652Z" fill="white" />
                            <path d="M124.425 124.864V7.81232H146.952V124.864H124.425Z" fill="white" />
                            <path d="M182.155 31.7095C178.041 31.7095 174.667 30.5771 172.026 28.3016C169.396 26.0315 168.084 23.1581 168.084 19.6868C168.084 16.2155 169.396 13.3739 172.026 11.1566C174.667 8.92886 178.041 7.81232 182.155 7.81232C186.263 7.81232 189.637 8.92886 192.284 11.1566C194.925 13.3739 196.249 16.2155 196.249 19.6868C196.249 23.1581 194.925 26.0315 192.284 28.3016C189.637 30.5771 186.263 31.7095 182.155 31.7095ZM170.903 124.864V44.2401H193.43V124.864H170.903Z" fill="white" />
                            <path d="M226.682 126.007C222.569 126.007 219.194 124.816 216.553 122.43C213.906 120.049 212.589 117.175 212.589 113.815C212.589 110.344 213.906 107.417 216.553 105.031C219.194 102.65 222.569 101.454 226.682 101.454C230.773 101.454 234.142 102.65 236.789 105.031C239.43 107.417 240.753 110.344 240.753 113.815C240.753 117.175 239.43 120.049 236.789 122.43C234.142 124.816 230.773 126.007 226.682 126.007Z" fill="#6AA354" />
                            <path d="M271.364 31.7095C267.251 31.7095 263.876 30.5771 261.235 28.3016C258.605 26.0315 257.293 23.1581 257.293 19.6868C257.293 16.2155 258.605 13.3739 261.235 11.1566C263.876 8.92886 267.251 7.81232 271.364 7.81232C275.472 7.81232 278.846 8.92886 281.493 11.1566C284.134 13.3739 285.458 16.2155 285.458 19.6868C285.458 23.1581 284.134 26.0315 281.493 28.3016C278.846 30.5771 275.472 31.7095 271.364 31.7095ZM260.112 124.864V44.2401H282.639V124.864H260.112Z" fill="white" />
                            <path d="M413.218 124.864V7.81232H435.745V76.9003L466.729 44.2401H493.472L457.745 80.9643L499.293 124.864H471.129L435.745 84.3933V124.864H413.218Z" fill="white" />
                            <path d="M306.21 124.864V44.2402H326.102L327.866 57.8927C330.553 53.1249 334.449 49.3361 339.554 46.5262C344.67 43.7057 350.691 42.2928 357.612 42.2928C368.395 42.2928 376.782 45.4361 382.775 51.712C388.762 57.9932 391.758 67.206 391.758 79.3557V124.864H369.231V81.303C369.231 74.3603 367.701 69.0475 364.648 65.3645C361.588 61.6815 356.839 59.84 350.394 59.84C344.051 59.84 338.855 61.9038 334.81 66.0207C330.76 70.1429 328.737 75.8843 328.737 83.2503V124.864H306.21Z" fill="white" />
                        </svg>



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
                            {pathname.includes('dashboard') ? null : <div onClick={() => { navigate('/dashboard'); setOpenMenu(false) }}>Dashboard</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar