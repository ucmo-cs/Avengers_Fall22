import './App.css';
import AptmntNavbar from './pages/AptmntNavbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Times from './pages/Times';
import Details from './pages/Details';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AptmntNavbar/>}>
            {/* Add the rest of the pages as Routes inside this one.
            Move the index attribute to the Services page when that gets added. */}
            <Route index path="times" element={<Times/>}/>
            <Route path="details" element={<Details/>}/>
            <Route path="locations" element={<Locations/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
