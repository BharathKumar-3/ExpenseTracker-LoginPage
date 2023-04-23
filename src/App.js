import React from 'react';
import './index.css';
import LoginPage from './Components/loginpage/loginpage';
import RegisterPage from './Components/RegisterPage/registerpage';
import { Route, Routes } from 'react-router-dom';
import ExpenseTrackerPage from './Components/ExpenseTracker/ExpenseTrackerPage';
function App()
{
    
    return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/ExpenseTracker/:id' 
        loader={(params)=>[
            console.log(params)
        ]}
        element={<ExpenseTrackerPage/>}/>
    </Routes>)
}

export default App