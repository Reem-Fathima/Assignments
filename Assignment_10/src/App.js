// App.js
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './components/store/store';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/profile/profile';
import EducationDetails from './components/EducationDetails/EducationDetails';
import Login from './components/login/login';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/education" element={<EducationDetails/>} />
      
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
