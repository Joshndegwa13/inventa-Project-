// import React, { useState } from 'react';
// import { registerUser } from '../firebase/Auth'; 

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const [message, setMessage] = useState(''); 
//   const [showMessage, setShowMessage] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // New state for loading

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Start loading state  
//     try {
//       await registerUser(email, password, role);

//       // Set the success message based on role
//       setMessage(`${role === 'superuser' ? 'Superuser' : 'User'} registered successfully`);
//       setShowMessage(true);

//       // Clear the form
//       setEmail('');
//       setPassword('');
//       setRole('user');

//       // Hide the message
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 3000);
//     } catch (error) {
//       console.error('Error registering user:', error);
//       setMessage('Error registering user, please try again.');
//       setShowMessage(true);
//     } finally {
//       setIsLoading(false); 
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="mt-8">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-4">Register</h2>
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="block mb-2 border border-gray-300 rounded py-2 px-4"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="block mb-4 border border-gray-300 rounded py-2 px-4"
//           />
//         </div>
//         <div>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="block mb-4 border border-gray-300 rounded py-2 px-4"
//           >
//             <option value="user">User</option>
//             <option value="superuser">Superuser</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           disabled={isLoading} 
//         >
//           {isLoading ? 'Registering...' : 'Register'} {/* Show loading text */}
//         </button>
//       </form>

//       {isLoading && <p className="mt-4 text-blue-500">Please wait, registering...</p>}

//       {showMessage && (
//         <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;
