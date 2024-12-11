import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
//import {Switch} from 'react';
import { default as LoginPage } from './pages/loginpage';
import {default as SignUpPage} from './pages/signup';
import {default as MainPage} from './pages/mainPage';
import {ContactPage} from './pages/contact';
import { BlogPage } from './pages/blogpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blogs" element={<BlogPage />}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
  );
}
export default App;
