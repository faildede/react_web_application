import './App.css';
import MainPage from './Components/MainPage/MainPage'
import SecondPage from './Components/secondPage/SecondPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route  path="/Courses" element={<SecondPage />} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
