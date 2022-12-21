import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
          <Routes>
            <Route path="/add" element={<AddContact />}></Route>
          </Routes>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
