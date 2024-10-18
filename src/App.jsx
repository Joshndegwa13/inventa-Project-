// // import React from 'react';
// // import './App.css';
// // import Alerts from './Alerts';

// // function App() {
// //     return (
// //         <div className="App">
// //             <header className="App-header">
// //                 <h1>Stock Alerts</h1>
// //                 <Alerts />
// //             </header>
// //         </div>
// //     );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from './Admin';
// import NormalPage from './NormalPage';
// import ProtectedRoute from './ProtectedRoute';
// import Alerts from './Alerts';
// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path='/alerts' element={<Alerts />} className='alerts'></Route>
//                 <Route path="/admin" element={<ProtectedRoute role="superuser"><AdminPage /></ProtectedRoute>} />
//                 <Route path="/normal" element={<NormalPage />} />
//                 <Route path="/not-authorized" element={<div>You are not authorized to access this page.</div>} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// import React from 'react';
// import Alerts from './Alerts';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">Stock & Order Alerts</h1>
//                 <Alerts />
//             </header>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import Alerts from './Alerts';
import StockForm from './StockForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">Stock & Order Management</h1>
                <Alerts />
                <StockForm />
            </header>
        </div>
    );
}

export default App;
