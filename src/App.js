import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Photos from './Components/Photos';
import Timeline from './Components/Timeline';
import RSVP from './Components/RSVP';
import CoverPage from './Components/coverPage';
import PhotoGallery from './Components/PhotoGallery';
import RsvpForm from './Components/RsvpForm';

function App() {
  return (
    <div className="App">
      <header className="NavBar">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="./Components/Photos"  element={<Photos />} />
              <Route path="./Components/Timeline" element={<Timeline />} />
              <Route path="./Components/RSVP" element={<RSVP/>} />
            </Routes>
          </div>
        </Router>
      </header>
      <CoverPage />
      <PhotoGallery className='photoGallery'/>
      <RsvpForm className = 'RsvpForm'/>
    </div>
  );
}

export default App;
  