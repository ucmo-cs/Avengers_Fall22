import './App.css';
import Aptmnt_navbar from './pages/Aptmnt_navbar';
import Current_page from './pages/Current_page';

function App() {
  return (
    <div className="App">
      {/* Change title to whatever the title of the page will be. */}
      <Aptmnt_navbar title="This Works!"/>

      <Current_page curPage="Times"/>
    </div>
  );
}

export default App;
