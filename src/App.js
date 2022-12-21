import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Routes>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
