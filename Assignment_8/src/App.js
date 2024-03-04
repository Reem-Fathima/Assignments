import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LifecycleDemo from './components/lifecycle';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/lifecycle" element={<LifecycleDemo/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
