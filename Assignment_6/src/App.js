import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './components/class-comp/Register';
import Fregister from './components/func-comp/Fregister';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/fregister" element={<Fregister/>}></Route>
        
 
          </Routes>
      </BrowserRouter>
      </div>
  );
}
 
export default App;