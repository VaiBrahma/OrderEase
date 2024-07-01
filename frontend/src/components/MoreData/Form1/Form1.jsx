import React from 'react'
import styles from './Form1.module.css'

const Form1 = ({handleSubmit1, no_of_tables, setNumberOfTables,  local_address, setLocalAddress, city, setCity, pincode, setPincode, state, setState}) => {
  return (
    <div className='mt-[5rem]'>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Tell us More about your Restaurent</h2>
        <div className={`${styles.loginContainer} max-w-3xl md:m-auto m-2`}>
                <form onSubmit={handleSubmit1}>
                    <div className={styles.inputContainer}>
                        <input required type='number' className={styles.inputField}  placeholder=" "  value={no_of_tables} onChange={(e) => setNumberOfTables(e.target.value)}
                        />
                        <label className={styles.inputLabel}>Number Of Tables</label>
                    </div>
                    <h3 className='text-white'>Your Address</h3>
                    <div className={styles.inputContainer}>
                        <input  required type='text' className={styles.inputField}  placeholder=" "  value={local_address} onChange={(e) => setLocalAddress(e.target.value)}
                        />
                        <label className={styles.inputLabel}>Local address</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input  required type='text' className={styles.inputField}  placeholder=" "  value={city} onChange={(e) =>setCity(e.target.value)}
                        />
                        <label className={styles.inputLabel}>City</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input  required type='number' className={styles.inputField}  placeholder=" "  value={pincode} onChange={(e) => setPincode(e.target.value)}
                        />
                        <label className={styles.inputLabel}>Pincode</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input  required type='text' className={styles.inputField}  placeholder=" "  value={state} onChange={(e) => setState(e.target.value)}
                        />
                        <label className={styles.inputLabel}>State</label>
                    </div>
                    <button type="submit" className={styles.loginButton} >Save & Next</button>
                </form>
        </div>
    </div>
  )
}

export default Form1