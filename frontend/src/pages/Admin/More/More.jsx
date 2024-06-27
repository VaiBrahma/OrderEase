import { useState } from 'react';
import styles from './More.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function More(){
    const [no_of_tables, setNumberOfTables] = useState('');
    const [local_address, setLocalAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('000000');
    const [state, setState] = useState('');
    const [isLoginComplete, setIsLoginComplete] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const address = {
            local_address,
            city,
            pincode,
            state,
        }
        const restaurent_details = { no_of_tables, address };
        console.log(restaurent_details);

        navigate('/admin/v1/dashboard');
    };

    return (
        <div className={`${styles.loginContainer} max-w-3xl md:m-auto m-2`}>
            {!isLoginComplete && <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Tell us More about your Restaurent</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        required
                        type='number'
                        className={styles.inputField} 
                        placeholder=" " 
                        value={no_of_tables}
                        onChange={(e) => setNumberOfTables(e.target.value)}
                    />
                    <label className={styles.inputLabel}>Number Of Tables</label>
                </div>
                <h3 className='text-white'>Your Address</h3>
                <div className={styles.inputContainer}>
                    <input 
                        required
                        type='text'
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
                        type='text'
                        className={styles.inputField} 
                        placeholder=" " 
                        value={city}
                        onChange={(e) =>setCity(e.target.value)}
                    />
                    <label className={styles.inputLabel}>City</label>
                </div>
                <div className={styles.inputContainer}>
                    <input 
                        required
                        type='number'
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
                        type='text'
                        className={styles.inputField} 
                        placeholder=" " 
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <label className={styles.inputLabel}>State</label>
                </div>
                <button type="submit" className={styles.loginButton}>Save & Next</button>
            </form>
            </>
            }

        </div>
    );
}

export default More;