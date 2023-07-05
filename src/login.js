import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logincss from './login.module.css'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existingUser, setexistingUser] = useState(true);
    const navigate = useNavigate();

    const signIn = arg => {
        arg.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                navigate('/');
            })
            .catch(error => {
                alert("error in signing in", error)
            })

    }

    const register = arg => {
        arg.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                // Signed in 
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
                // ..
            });
    }
  return (
    <div className={logincss.loginPage}>
        <div className={logincss.container}>
            <div className={logincss.logoContainer}>
                <Link to='/'>
                    <img className={logincss.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
                </Link>
            </div>
            <div className={logincss.loginContainer}>
                <h1>Sign In</h1>
                <form>
                    <span>Email or mobile phone number</span>
                    <input type="text" value={email} onChange={inputEmail => setEmail(inputEmail.target.value)}/>
                    <span>Password</span>
                    <input type="password" value={password} onChange={inputPassword => setPassword(inputPassword.target.value)}/>
                    <button className={logincss.continue} type="submit" onClick={signIn}>{/* existingUser ? "Continue" : "Create Account" */} Continue</button>
                </form>
                <p>
                By continuing, you agree to Fake Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
            {/* {existingUser &&  */}
            {/* // <> */}
            <div className={logincss.donthave}>
                <hr /><span className={logincss.hr}>Don't have an Amazon clone account?</span><hr />
            </div>
            <button className={logincss.create} type="submit" onClick={register}>Create Your Amazon Clone Account</button>
            {/* </>} */}
        </div>
    </div>
  )
}

export default Login