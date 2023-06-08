import React from 'react';
import './SignIn.css';
import signIn from '../images/signIn.png';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    return (
        <div className="sign-in-container">
            <div className="sign-in-sign-in">
                <div className="sign-in-frame450">
                    <span className="sign-in-text ">
                        <h1>Log into your account</h1>
                    </span>
                    <span className="sign-in-text02">
                        <h3>Welcome back</h3>
                    </span>
                    <span className="sign-in-text04 body1Bold">
                        <span className="sign-in-text05">Username *</span>
                        <label htmlFor='username'></label>
                        <input type='text' className='boxx' placeholder='Enter your username' />
                    </span>
                    <span className="sign-in-text06 body1Bold">
                        <span className="sign-in-text07">Password *</span>
                        <label htmlFor='username'></label>
                        <input type='password' className='boxx' placeholder='Enter your password' />
                    </span>
                    
                        <button type= "submit"  className='sibtn'>Login</button>
                    
                    <span className="sign-in-text14 16Paragraph2">
                        {/* <span><a href='/forgot'>Forgot Password?</a></span> */}
                        <Link to={'/forgot'}>Forgot Password</Link>
                    </span>

                    <div className='ckb'>
                        <input type='checkbox' value="lsRememberMe" className='check' id='check' />
                        <label htmlFor='check' className='custom-input-label'>
                            Remember me
                        </label>
                    </div>
                    <span className="sign-in-text16">
                        <span className="sign-in-text17">
                            Don't have an account?
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <span className="sign-in-text18">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <span className='color'>  <a href='/sign-up'> Sign Up</a> </span>

                    </span>
                </div>
                <div className="sign-in-frame416">
                    <div className="sign-in-logo1"></div>
                    <span className="sign-in-text20">
                        <span>TravelCompanion</span>
                    </span>
                </div>
                <div className="sign-in-saly14">
                    <img
                        src={signIn}
                        alt="Saly14I128"
                        className="sign-in-saly141"
                    />
                </div>
            </div>
        </div>
    )
}

export default SignIn;
