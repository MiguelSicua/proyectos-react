import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../firebase"

const LogIn = () => {
      
    const googlelogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <>
            <button 
                className="btn-login" 
                onClick={googlelogin}
            >
                <i className="fa-brands fa-google"></i>
                Sign in with google
            </button>
        </>
    );
}
 
export default LogIn;