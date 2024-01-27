import './App.css';
import Navber from './components/Navber/Navber';
import Shop from './Pages/shop';
import ShopCatagory from './Pages/shopCatagory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/loginSignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cricket' element={<ShopCatagory catagory='cricket'/>}/>
        <Route path='/football' element={<ShopCatagory catagory='football'/>}/>
        <Route path='/archery' element={<ShopCatagory catagory='archery'/>}/>
        <Route path='/badminton' element={<ShopCatagory catagory='badminton'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/loginSignUP' element={<LoginSignUp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
