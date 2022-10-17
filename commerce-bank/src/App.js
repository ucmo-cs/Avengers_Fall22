import './App.css';
import AptmntNavbar from './pages/AptmntNavbar';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Times from './pages/Times';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AptmntNavbar/>}>
            {/* Add the rest of the pages as Routes inside this one. */}
            <Route index element={<Times/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
