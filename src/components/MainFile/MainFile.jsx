import React, { useContext, useEffect } from 'react';
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import CreationForm from '../creationForm/CreationForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';


function Main() {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
      if (currentUser) {
          navigate('/dashboard');
      } else if (currentUser === null) {
          navigate('/login');
      }
    }, [currentUser])
    
    return (
        <>
            {currentUser === undefined? <h1 style={{color: 'white'}}>Loading...</h1>: null}
        </>
    )
}

export default Main