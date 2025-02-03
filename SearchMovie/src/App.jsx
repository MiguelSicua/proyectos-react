//import FormSearch from './components/FormSearch'
//import Movies from './components/Movies'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage';
import Singlemovie from './components/SingleMovie';
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<Singlemovie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
