import React, { useContext, useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Login() {
    const { login, signinWithGoogle, currentUser } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [error, setError] = useState({
        email: '',
        password: '',
        submit: ''
    })
    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [signupMethod, setSignupMethod] = useState('');

    useEffect(() => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email.toLowerCase()) && user.email !== '') {
            console.log('email error')
            setError({ ...error, email: 'invalid email!' });
        }
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email.toLowerCase()) && user.email !== '') {
            setError({ ...error, email: '' })
            if (error.submit !== '') {
                setError({ ...error, submit: '' })
            }
        }
    }, [user.email])



    const sendToken = async () => {
        const newToken = await currentUser.getIdToken(true);
        console.log(typeof (newToken))
        const promise = await fetch(process.env.REACT_APP_API_URL+`/user/auth/googleSignIn`, {
            method: 'POST',
            headers: {
                accessToken: newToken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ accessToken: newToken })
        })
        const data = await promise.json();
        if (data.status === 'success') {
            console.log(data.status)
            navigate('/dashboard')
        } else if (data.status === 'error') {
        }
    }

    // redirecting to dashboard if the user is already logged in 
    useEffect(() => {
        if (currentUser) {
            if (signupMethod === 'google') {
                sendToken()
            } else {
                navigate('/dashboard')
            }
        }
    }, [currentUser])



    const togglePasswordVisibility = () => {
        const password = document.querySelector('#password');
        const eye = document.querySelector('#toggle_password');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        passwordVisible === true ? setPasswordVisible(false) : setPasswordVisible(true);
    }

    const updateSignupCred = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(currentUser)
    }


    const submit = async (e) => {
        e.preventDefault();
        console.log("here I am in submit")
        if (user.email === '') {
            setError({ ...error, email: 'email is required!' })
        }
        if (user.password === '') {
            setError({ ...error, password: 'password is required!' })
        }
        setError({ ...error, submit: '' })
        if (error.email === '' && error.password === '' && error.submit === '') {
            setLoading(true);
            try {
                await login(user.email, user.password);

                console.log("h e r e   i   a m")
                // console.log(data1);
                navigate('/dashboard')
            } catch (err) {
                setError({ ...error, submit: err.message });
            }
        }
        setLoading(false);

    }

    const submitWithGoogle = async (e) => {
        e.preventDefault();
        console.log(currentUser)
        console.log('c l i c k e d')
        setError({ ...error, submit: '' })
        setLoadingGoogle(true);
        try {
            await setSignupMethod('google');
            await signinWithGoogle();

            navigate('/dashboard')
        } catch (err) {
            setError({ ...error, submit: err.message });
        }
        setLoadingGoogle(false);
    }


    return (
        <>
        {currentUser === null ?<div className='login_container'>
            <div className='login_wrapper'>
                <div className='big_logo '>
                <span className='big_logo_name'>bizcards</span><span className='big_logo_com'>.com</span>
                </div>
                <form className='login_form'>
                    <div className='form_group'>
                        <label htmlFor="">Email</label>
                        <input className='input_box' type="text" name='email' placeholder='john.doe@example.com' onChange={(e) => updateSignupCred(e)} value={user.email} />
                        <div className="error" style={{ color: "#fc3c44" }}>
                            {error.email}
                        </div>
                    </div>
                    <div className='form_group'>
                        <div className='form_group'>
                            <label htmlFor="">Password</label>
                            <div className='login_password_input'>
                                <input id='password' className='input_box' type="password" name='password' placeholder='eg. pas@9wrD#7' onChange={(e) => updateSignupCred(e)} value={user.password} />
                                <div id='toggle_password' className='password_visible' onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FontAwesomeIcon icon={faEyeSlash} style={{color: '#FE385D'}}/> : <FontAwesomeIcon icon={faEye} style={{color: '#FE385D'}} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button disabled={loading} className='login_btn' type='submit' onClick={(e) => { submit(e); console.log('submit clicked') }}>Login</button>
                    <div className="error" style={{ color: "#fc3c44" }}>
                        {error.submit}
                    </div>
                </form>

                <div className='login_instead_wrapper'>
                    New to our platform? <Link className='login_instead' to="/signup"><span>Create an account</span></Link>
                </div>
                <div className='divider_or'>
                    <div className='divider_line'></div>
                    <div>or</div>
                    <div className='divider_line'></div>
                </div>
                <button disabled={loadingGoogle} className='signup_with_google' onClick={(e) => submitWithGoogle(e)}>
                    <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
                </button>
            </div>
        </div>:
        currentUser === undefined?
            <Loader />:
            null
        }
        </>
    )
}

export default Login