import SignIn from "./signIn";
import LogOut from "./LogOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


const User = () => {
    const [user] = useAuthState(auth);

    //console.log(user);
    const photo = user ? user.photoURL : "/iconUs.png";
    const name = user ? user.displayName : "Name User";
    return (
      <div className="right-side">
        <h1>
          <i className="fa-solid fa-cat"></i>QuickChat
        </h1>
        <article className="card-user">
          <img src={photo} alt="user default" /*referrerPolicy="no-referrer*/ />
          <p>{name}</p>
          {user ? <LogOut /> : <SignIn/>}
        </article>
      </div>
    );
}
 
export default User;