import { useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants"
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);

    const handleSignUp = () => {
        setIsSignInForm(!isSignInForm);
    };
    
  return (
    <div>
        <Header />
        <div className="absolute">
            <img 
                alt="background"
                src={ BACKGROUND_IMG }
            />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">
                { isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            { !isSignInForm && 
                <input 
                    type="text"
                    placeholder="Name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                /> 
            }
            <input 
                type="text"
                placeholder="Email Address"
                className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
            <input
                type="password"
                placeholder="Password"
                className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
            />
            <button className="p-4 my-6 bg-red-700 rounded-lg">
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