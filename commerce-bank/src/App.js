import './App.css';
import AptmntNavbar from './pages/AptmntNavbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Times from './pages/Times';
import Details from './pages/Details';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AptmntNavbar/>}>
            {/* Add the rest of the pages as Routes inside this one.*/}
            <Route index element={<Home/>}/>
            <Route path="times" element={<Times/>}/>
            <Route path="details" element={<Details/>}/>
            <Route path="locations" element={<Locations/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
