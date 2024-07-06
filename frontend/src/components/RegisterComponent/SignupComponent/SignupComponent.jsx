import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupComponent.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function SignupComponent({ isAdmin }) {
  const [title, setTitle] = useState("");
  const [admin, setAdmin] = useState("");
  const [adminHandle, setAdminHandle] = useState("");
  const [adminMobileNo, setAdminMobileNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showTermsCard, setShowTermsCard] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const [no_of_tables, setNumberOfTables] = useState("");
  const [local_address, setLocalAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [hasForm1Filled, setHasForm1Filled] = useState(false);
  const id = useSelector((state) => {
    return state.id;
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAdmin && !acceptTerms) {
      toast.warn("Accept our Terms & Condition!");
      return;
    }

    if (isAdmin) {
      const adminUser = {
        title,
        admin,
        admin_handle: adminHandle,
        admin_mobile_no: adminMobileNo,
        password,
        isAdmin: true,
        no_of_tables,
        address: {
          local_address,
          city,
          pincode,
          state
        }
      };
      const signup = async () => {
        await axios
          .post("/api/auth/admin/signup", adminUser)
          .then((response) => {
            setIsSignupComplete(true);
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

      const myPromise = signup();
      toast.promise(myPromise, {
        pending: `Signing Up as Admin...`,
        success: `Signed Up Successfully! Login to continue.`,
        error: `Error Signing up as Admin`,
      });
    } else {
      const customerUser = { name, email, password, isAdmin: false };
      console.log(customerUser);

      const signup = async () => {
        await axios
          .post("/api/auth/signup", customerUser)
          .then((response) => {
            setIsSignupComplete(true);
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
            throw err;
          });
      };
      const myPromise = signup();
      toast.promise(myPromise, {
        pending: `Signing Up as Customer...`,
        success: `Signed Up Successfully! Login to continue.`,
        error: `Error Signing up as Customer`,
      });
    }
  };

  return (
    <div className={`${styles.signupContainer} max-w-3xl md:m-auto m-2`}>
      {!isSignupComplete && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Signup as {isAdmin ? "Admin" : "Customer"}
          </h2>
          <form onSubmit={handleSubmit}>
            {isAdmin ? (
              <>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Restaurant Name</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={admin}
                    onChange={(e) => setAdmin(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Admin Name</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="email"
                    className={styles.inputField}
                    placeholder=" "
                    value={adminHandle}
                    onChange={(e) => setAdminHandle(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Admin Email</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="number"
                    className={styles.inputField}
                    placeholder=" "
                    value={adminMobileNo}
                    onChange={(e) => setAdminMobileNo(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Admin Mobile No</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="password"
                    className={styles.inputField}
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Password</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="number"
                    className={styles.inputField}
                    placeholder=" "
                    value={no_of_tables}
                    onChange={(e) => setNumberOfTables(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Number Of Tables</label>
                </div>
                <h3 className="text-white">Your Address</h3>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={local_address}
                    onChange={(e) => setLocalAddress(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Local address</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label className={styles.inputLabel}>City</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="number"
                    className={styles.inputField}
                    placeholder=" "
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Pincode</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <label className={styles.inputLabel}>State</label>
                </div>
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  />
                  <label htmlFor="acceptTerms">I accept the </label>{" "}
                  <span
                    onClick={() => setShowTermsCard(true)}
                    className="text-blue-500 cursor-pointer"
                  >
                    terms and conditions
                  </span>
                </div>
                {showTermsCard && (
                  <div className={styles.termsCard}>
                    <p>We will charge ₹1/- per order.</p>
                    <button
                      onClick={() => setShowTermsCard(false)}
                      className="text-blue-500 absolute right-1 top-1"
                    >
                      <img
                        src="/icons/close.png"
                        alt="x"
                        className="w-4 invert"
                      />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="text"
                    className={styles.inputField}
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Name</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="email"
                    className={styles.inputField}
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Email</label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    required
                    type="password"
                    className={styles.inputField}
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className={styles.inputLabel}>Password</label>
                </div>
              </>
            )}
            <button type="submit" className={styles.signupButton}>
              Signup
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-blue-500"
              >
                Login
              </button>
            </p>
          </div>
        </>
      )}
      {isSignupComplete && (
        <>
          <p>Signup Complete</p>
          <p>Redirecting to {isAdmin ? "Admin" : "Customer"} Page...</p>
        </>
      )}
    </div>
  );
}

export default SignupComponent;
