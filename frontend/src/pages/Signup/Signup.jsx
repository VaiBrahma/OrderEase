import { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const Navigate = useNavigate();
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };
  return (
    <div className={styles.container}>
      <h1>What role do you play?</h1>
      <div className={styles.cards}>
        <div
          onClick={() => handleRoleSelection("Admin")}
          className={`${styles.card} ${
            selectedRole === "Admin" ? styles.selected : ""
          }`}
        >
          <h2>Admin</h2>
          <p>
            I am the owner, I manage the restaurant and ensure everything runs
            smoothly.
          </p>
        </div>
        <div
          onClick={() => handleRoleSelection("Customer")}
          className={`${styles.card} ${
            selectedRole === "Customer" ? styles.selected : ""
          }`}
        >
          <h2>Customer</h2>
          <p>
            I am a customer, I enjoy eating delicious food and having a good
            time.
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <button onClick={() => Navigate("/")} className="text-blue-500">
            Login
          </button>
        </p>
      </div>
      {selectedRole && (
        <button onClick={() => Navigate("/signup")}>Go to Register page</button>
      )}
    </div>
  );
};

export default Signup;
