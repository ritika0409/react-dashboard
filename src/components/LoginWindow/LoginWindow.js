import { React, useState } from "react";
import "./LoginWindow.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { app } from "../../firebase";
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "google",
        name: user.name,
        email: user.email,
      });
    }
  } catch (e) {
    console.error(e);
  }
};
const LoginWindow = () => {
  const [register, setRegister] = useState(false);
  const registration = () => {
    if (register === false) return setRegister(true);
    else return setRegister(false);
  };
  let navigate = useNavigate();
  const routeChange = async () => {
    await signInWithGoogle();
    let path = "home";
    navigate(path);
  };
  return (
    <div>
      <div className="loginwindow">
        {register ? (
          <>
            <h1>Sign Up</h1>
            <p>Sign un to your account</p>
          </>
        ) : (
          <>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
          </>
        )}

        <div className="signin-buttons">
          <button onClick={routeChange}>
            <FcGoogle />
            Sign in with Google
          </button>
          <button>
            <AiFillApple />
            Sign in with Apple
          </button>
        </div>
        <div className="login-box">
          {register ? (
            <>
              <p>Name</p>
              <input type="text"></input>
            </>
          ) : (
            <></>
          )}
          <p>Email address</p>
          <input type="email"></input>
          <p>Password</p>
          <input type="password"></input>
          <p className="forgot">Forgot Password?</p>
          <Link className="signin" to="/Home">
            {register ? "Sign Up" : "Sign In"}
          </Link>
        </div>
        <div className="signup-info">
          <p>
            {register ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button className="register" onClick={() => registration()}>
            {register ? "Login" : "Register here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWindow;
