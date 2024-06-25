import { useRef, useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import SignupComponent from "../../components/Register/Signup/SignupComponent";

const Signup = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const signUpRef = useRef(null);

  const slideIn = () => {
    setTimeout(() => {
      if (signUpRef.current) {
        signUpRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }

  return (
    <div className={styles.container}>
      <h1 className="text-[orange] text-[1.5em]">What role do you play?</h1>
      <div className={styles.cards}>
        <div onClick={() => { setIsAdmin(true); slideIn(); }} className={`${styles.card} ${isAdmin ? styles.selected : ""}`}>
          <h2 className={styles.role}>Admin</h2>
          <p>I am the owner, I manage the restaurant and ensure everything runs smoothly.</p>
        </div>
        <div onClick={() => { setIsAdmin(false); slideIn(); }} className={`${styles.card} ${isAdmin === false ? styles.selected : ""}`}>
          <h2 className={styles.role}>Customer</h2>
          <p>I am a customer, I enjoy eating delicious food and having a good time.</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>Already have an account? <button onClick={() => navigate("/")} className="text-blue-500">Login</button></p>
      </div>
      <div className="my-[50px]" ref={signUpRef}>
        {isAdmin !== null && <SignupComponent isAdmin={isAdmin} />}
      </div>
    </div>
  );
};

export default Signup;
