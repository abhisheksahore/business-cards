import './App.css';
import CreationForm from './components/creationForm/CreationForm';
import IphoneMockup from './components/IphoneMockup/IphoneMockup';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='form_and_mockup'>
          <div className='creation_form_outer_container'>
            <CreationForm />
          </div>
          <div className='mockup_container'>
            <IphoneMockup />
          </div>
        </div>
    </div>
  );
}

export default App;
