import React, { useEffect } from 'react';
import './App.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/Login/LoginScreen'
import ProfilePage from './components/ProfilePage/ProfilePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser); // gives user back 
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (<Routes>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
