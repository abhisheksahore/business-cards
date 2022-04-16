import './App.css';
import MainFile from './components/MainFile/MainFile'

import Navbar from './components/navbar/Navbar.jsx';

import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { useContext } from 'react';
import AuthContext from './context/AuthContext/AuthContext';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import CreationForm from './components/creationForm/CreationForm';
import Dashboard from './components/Dashboard/Dashboard';
import CardView from './components/CardView/CardView';
import Loader from './components/Loader/Loader';
import BusinessInfo from './components/BusinessInfo/BusinessInfo';
import CardFinalView from './components/CardFinalView/CardFinalView';




function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="App">
      <Router>
        {currentUser ? <Navbar /> : null}
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/business' element={<BusinessInfo />} />
          <Route exact path='/' element={<MainFile />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/create' element={<CreationForm />}></Route>
          <Route exact path='/edit/:cardId' element={<CreationForm />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/card/:cardId' element={<CardView />}></Route>
          <Route exact path='/:slug' element={<CardFinalView />}></Route>
          <Route path='*' element={<h1 style={{color: 'white'}}>404 page not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
