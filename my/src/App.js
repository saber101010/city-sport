import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NavBar from './component/Navbar';
import Login from './pages/Login';
import Registre from './pages/Registre'
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import AdminProduct from './pages/adminproduct/adminProduct';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './redux/actions/authActions';
import PrivateRoute from './router/PrivateRoute';
import AddedProduct from './pages/addProduct/addedProduct';
import Men from './pages/Men';
import women from './pages/women';
import ProductDescription from './pages/productDescription/ProductDescription';
import { getAllProducts } from './redux/actions/productActions';
// import Alert from './component/Alert';

function App() {
const dispatch=useDispatch()
useEffect(()=>{
  if(localStorage.getItem('token')){
    dispatch(current())
    dispatch(getAllProducts())
  }
},[dispatch])

  return (
    <BrowserRouter>
    <div className="App">
   <NavBar/>
   {/* <Alert/> */}
   <Routes>
   <Route path='/' element={<Home />}  />
   <Route path='/login' element={<Login />}  />
   <Route path='/register' element={<Registre />}  />
   <Route path='*' element={<NotFound />}  />
   
    <Route path='/men' element={
     <PrivateRoute>
         <Men/>
    </PrivateRoute>}/>
    <Route path='/women' element={
     <PrivateRoute>
         <Men/>
    </PrivateRoute>}/>
    <Route path='/kid' element={
     <PrivateRoute>
         <Men/>
    </PrivateRoute>}/>

{/*
<Route path='/kid' element={
     <PrivateRoute>
   <kid/>
</PrivateRoute>}/> */}
  
   <Route path='/productdescription' element={
     <PrivateRoute>
   <ProductDescription/>
</PrivateRoute>}/>

   <Route path='/admin' element={
     <PrivateRoute>
   <Admin/>
</PrivateRoute>}/>
<Route path='/admine/product' element={
     <PrivateRoute>
   <AdminProduct/>
</PrivateRoute>}/> 
<Route path='/admine/product/addedProduct' element={
     <PrivateRoute>
   <AddedProduct/>
</PrivateRoute>}/> 

  
  
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
