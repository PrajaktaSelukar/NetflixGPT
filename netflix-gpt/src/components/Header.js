import { NETFLIX_LOGO } from "../utils/constants"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({  uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
            className="w-44"
            alt="Logo"
            src={NETFLIX_LOGO}
        />
        {user && <div className="flex p-2">
          <img 
            className="w-12 h-12 p-2 m-2"
            alt="User-icon"
            src={user.photoURL ? user.photoURL : "https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRPhDNbxfvPHVFP56kT7oI1DpyMjd14ix52RDF7o8qn9Zy8UboO5MeYaz1IeUEr1w7sih47wXzwyVWIxuNjXAcapQE4T-cU.png?r=7c7"}
          />
          <button 
            className="font-bold text-white"
            onClick={handleSignOut}
          >Sign Out</button>
        </div>}
    </div>
  )
}

export default Header