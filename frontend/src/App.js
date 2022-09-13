import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import ForgotPassword from './LoginAndRegisterScreen/ForgotPassword/ForgotPassword';
import ConfirmUser from './LoginAndRegisterScreen/ForgotPassword/ConfirmUser';
function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/forgotpassword' element={<ForgotPassword />} />
			<Route path='/confirmuser' element={<ConfirmUser />} />
			<Route
				path='img'
				element={<img src={require('./table1.jpg')} alt='table desing' />}
			/>
		</Routes>
	);
}

export default App;

// my form
