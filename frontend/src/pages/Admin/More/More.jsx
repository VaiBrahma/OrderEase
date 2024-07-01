import { useState } from 'react';
import styles from './More.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form1 from '../../../components/MoreData/Form1/Form1';
import ItemDetail from '../../../components/MoreData/ItemDetail/ItemDetail';

function More(){
    const [no_of_tables, setNumberOfTables] = useState('');
    const [local_address, setLocalAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [hasForm1Filled, setHasForm1Filled] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit1 = (e) => {
        e.preventDefault();

        const address = {
            local_address,
            city,
            pincode,
            state,
        }
        const restaurent_details = { no_of_tables, address };
        console.log(restaurent_details);

        setHasForm1Filled(true);

        // navigate('/admin/v1/dashboard');
    };
    
    return (
        <div className='h-screen w-screen bg-[#0000001c]  left-0 overflow-y-auto' style={{backdropFilter: 'blur(10px)'}}>
            <div>
            {hasForm1Filled ? 
                <Form1 handleSubmit1={handleSubmit1} no_of_tables={no_of_tables} setNumberOfTables={setNumberOfTables} local_address={local_address} setLocalAddress={setLocalAddress} city={city} setCity={setCity} pincode={pincode} setPincode={setPincode} state={state} setState={setState}/> 
                : 
                <ItemDetail/>
            }
            </div>
        </div>
    );
}

export default More;