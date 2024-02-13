import { useRef, useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants"
import Header from "./Header"
import { checkSignUpValidData, checkSignInValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignUp = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        const message = !isSignInForm 
                        ? checkSignUpValidData(name?.current?.value, email.current.value, password.current.value) 
                        : checkSignInValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if(message) return;

        // No error
        if(!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    // Sign In / Sign Up

    
  return (
    <div>
        <Header />
        <div className="absolute">
            <img 
                alt="background"
                src={ BACKGROUND_IMG }
            />
        </div>
        <form
            onSubmit={ (e) => e.preventDefault() }
            className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
            <h1 className="font-bold text-3xl py-4">
                { isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            { !isSignInForm && 
                <input 
                    ref={name}
                    type="text"
                    placeholder="Name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                /> 
            }
            <input 
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
            <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
            />
            <p className="text-red-500 font-bold text-xl">{ errorMessage }</p>
            <button className="p-4 my-6 bg-red-700 rounded-lg" onClick={ handleButtonClick }>
                { isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="py-4">
                { isSignInForm ? "Already registered? " : "New to Netflix? "} 
                <span onClick={ handleSignUp } className="cursor-pointer text-blue-400">
                    { isSignInForm ? "Sign Up" : "Sign In"} Now
                </span>
            </p>
        </form>
    </div>
  )
}

export default Login