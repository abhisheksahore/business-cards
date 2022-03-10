import './App.css';
import CreationForm from './components/creationForm/CreationForm';
import IphoneMockup from './components/IphoneMockup/IphoneMockup';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <CreationForm />
      </div>
    </div>
  );
}

export default App;
