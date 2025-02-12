import { auth } from "../firebase";

const LogOut = () => {

    const signOut = () => {
      signOut(auth);
    };


    return (
      <>
        <button className="btn-login btn-logout" onClick={() => auth.signOut()}>
          <i className="fa-brands fa-google"></i>
          logOut
        </button>
      </>
    );
}
 
export default LogOut;