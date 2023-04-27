import './App.css';
import Home from './Component/Home';
import { Route, Routes } from "react-router-dom";
import Crew from './Component/Crew';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/Crew" element={<Crew />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
