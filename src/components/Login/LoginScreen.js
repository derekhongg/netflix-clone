import React from 'react';
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className='loginScreen__background'>
                <img
                className="loginScreen__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt='Netflix Logo'
                />
            </div>
            
            <button 
            className='loginScreen__button'
            >
                Sign In
            </button>
            <div className='loginScreen__gradient'/>

            <div className='loginScreen__body'>
                <>
                    <h1>Unlimited movies, TV shows, and more. </h1>
                    <h2>Watch anywhere. At Home or On The Go.</h2>
                    <h3>Ready to start? Enter your email below to create or restart your membership.</h3>
                    <div className='loginScreen__input'>
                        <form>
                            <input type="email" placeholder='Email Address'/>
                            <button className='loginScreen__getStarted'>GET STARTED</button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default LoginScreen;
