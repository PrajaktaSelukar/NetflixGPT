import { useRef, useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants"
import Header from "./Header"
import { checkSignUpValidData, checkSignInValidData } from "../utils/validate";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    updateProfile(user, {
                        displayName: name?.current?.value, 
                        photoURL: "https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRPhDNbxfvPHVFP56kT7oI1DpyMjd14ix52RDF7o8qn9Zy8UboO5MeYaz1IeUEr1w7sih47wXzwyVWIxuNjXAcapQE4T-cU.png?r=7c7"
                      }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({  uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate("browse");
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    navigate("/");
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    navigate("/");
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