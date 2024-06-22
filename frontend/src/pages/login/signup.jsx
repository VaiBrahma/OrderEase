import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Password" />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Sign Up</button>
                </form>
                <div className="mt-4 text-center">
                    <p>Already have an account? <button onClick={() => navigate("/login")} className="text-blue-500">Login</button></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
