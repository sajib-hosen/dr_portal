import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import Navigation from './components/Pages/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './components/Pages/Appointment/Appointment';

function App() {
  return (

    <div className="App">
      <BrowserRouter>

          <div>
              <Navigation/>
          </div><br/>

          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/appointment" element={<Appointment />}/>
            </Routes>
          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
