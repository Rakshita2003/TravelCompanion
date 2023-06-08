import React from 'react';
import './ForgotPassword.css';
import { Button } from '../components/Button.js';
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
return (

    <div className="forgot-in-container">
        <div className="forgot-sign-in">
            <div className="forgot-frame450">
                <span className="forgot-text ">
                    <h1>Forgot Your Password ?</h1>
                </span>
                <span className="forgot-text02">
                    <h3>Don’t worry! Enter the email address associated with your account and we'll send you a link to reset your password.</h3>
                </span>
                <span className="forgot-text04 body1Bold">
                    <span className="forgot-text05">Email *</span>
                    <label htmlFor='username'></label>
                    <input type='email' className='boxxxx' placeholder='Enter your email' />
                </span>
                {/* <span className="sign-in-text06 body1Bold">
                <span className="sign-in-text07">Password *</span>
                <label htmlFor='username'></label>
                <input type='password' className='boxx' placeholder='Enter your password' />
            </span> */}
                <div className='forgotbutton'>
                    <Button className='sibtn' buttonStyle='btn--outline' buttonSize='btn--large'> Submit </Button>
                </div>
                <span className="forgot-text16">
                    <span className="forgot-text17">
                        Don’t have an account?
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <span className="forgot-text18">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <span className='coloor'>  <Link to={'/needcompanion'}>SignUp</Link>  </span>
                </span>
            </div>
        </div>
    </div>


);
};

export default ForgotPassword;