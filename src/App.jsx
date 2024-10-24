
import { useState } from 'react';
import './App.css';
import User from './User';
import Employee from './Employee';
function App() {
  const[username,setUsername]=useState('Arun')
  const[age,setAge]=useState(20)
  const[email,setEmail]=useState('arun@gmail.com')
  const[phone,setPhone]=useState(9847109773)
  return (
    <div className="App">
       <h1 className='text-center'>User Details</h1>
     
     <User uname={username} userAge={age} userEmail={email} userPhone={phone}/>
     <h1 className='text-center'>Employee Details</h1>
     <Employee/>
    </div>
  );
}

export default App;
