import React, { useEffect } from 'react';
import './App.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/Login/LoginScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './firebase';

function App() {
  const user = null;


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        console.log(userAuth)
      } else {

      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (<Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/test"/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
