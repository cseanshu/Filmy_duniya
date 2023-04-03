import React, { useRef } from 'react'
import { auth } from '../../../firebase';
import "./signupscreen.css"
function SignupScreen() {
  const emailRef=useRef(null);
  const passRef=useRef(null);
    const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    ).then((authUser)=>{console.log(authUser)}).catch((error)=>{alert(error.message)});
    };
    const signIn=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
          emailRef.current.value,
          passRef.current.value
          ).then((authUser)=>{console.log(authUser)}).catch((error)=>alert(error.message));
    }
  return (
    <div className='signup_screen'>
        <h1>SignIn</h1>
        <form>
            <input ref={emailRef} type='email' placeholder='Email'></input>
            <input ref={passRef} type='password' placeholder='Password'/>
            <button type='submit' onClick={signIn}>SignIn</button>
            <h4><span className='signup_grey'>New to FilmyDuniya? </span>
            <span className='signup_link' onClick={register}>Signup now.</span>
            </h4>
        </form>
    </div>
  )
}


export default SignupScreen