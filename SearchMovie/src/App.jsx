//import FormSearch from './components/FormSearch'
//import Movies from './components/Movies'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage';
import Singlemovie from './components/SingleMovie';
import './App.css'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import option from "./components/chart";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<Singlemovie/>} />
          <Highcharts highcharts={highcharts} option={option} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
