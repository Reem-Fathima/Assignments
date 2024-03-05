import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import RegisterPage from './components/register/register';
import TouristDestinations from './components/page/page';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/page" element={<TouristDestinations/>}></Route>
         <Route path="/register" element={<RegisterPage/>}></Route>
        
 
          </Routes>
      </BrowserRouter>
      </div>
  );
}
 
export default App;