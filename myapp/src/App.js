import './App.css';
import MovieCards from './components/MovieCruiser/MovieCards';
import IncreamentDecreamentNumber from './components/IncreamentDecreamentNumber/IncreamentDecreamentNumber';
import RefreshTimeOnClick from './components/RefreshTimeOnClick/RefreshTimeOnClick';
import DigitalClock from './components/DigitalClock/DigitalClock';
import InputHandle from './components/InputHandle/InputHandle';
import FormHandle from './components/FormHandle/FormHandle';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList/ToDoList';
import Error from './components/Error/Error';
import CovidDataTable from './components/CovidDataTable/CovidDataTable';
// import SearchImageGallery from './components/SearchImageGallery/SearchImageGallery';
// import User from './components/User/User';
// import Parent from './components/Context/Parent.js';
// import UseRef from './components/UseRef/UseRef';
// import UseEffect from './components/UseEffect/UseEffect';
function App() {
  return (
    <>
      <Header/>
      {/* <Parent/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      <Routes>
        <Route path='/' element={<MovieCards/>}/>
        <Route path='/counter' element={<IncreamentDecreamentNumber/>}/>
        <Route path='/timeClick' element={<RefreshTimeOnClick/>}/>
        <Route path='/digitalclock' element={<DigitalClock/>}/>
        <Route path='/operations' element={<InputHandle/>}/>
        <Route path='/formhandle' element={<FormHandle/>}/>
        <Route path='/todolist' element={<ToDoList/>}/>
        <Route path='/covidtable' element={<CovidDataTable/>}/>
        

        {/* <Route path='/searchgallery' element={<SearchImageGallery/>}/> */}
        {/* <Route path='/user/:fname/:lname' element={<User/>}/> */}
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </>
  );
}

export default App;
