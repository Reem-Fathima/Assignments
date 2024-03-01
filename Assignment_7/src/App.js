import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import Welcome from './components/welcome/welcome';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/welcome" element={<Welcome/>}></Route>
        
 
          </Routes>
      </BrowserRouter>
      </div>
  );
}
 
export default App;