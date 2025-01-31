import './App.css'
import FormSearch from './components/FormSearch'
import MainPage from './components/MainPage';
import Movies from './components/Movies'
import {Routes, Route, BrowserRout} from "react router dom";
import Singlemovie from './components/SingleMovie';

function App() {

  return (
    <div className="App">
      <BrowserRout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/;id" element={<Singlemovie />} />
        </Routes>
      </BrowserRout>
      <Movies />
    </div>
  );
}

export default App
