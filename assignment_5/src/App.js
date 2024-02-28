import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Profile from './components/profile/profile';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        
 
          </Routes>
      </BrowserRouter>
      </div>
  );
}
 
export default App;