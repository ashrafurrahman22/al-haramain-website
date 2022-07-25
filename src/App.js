import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import DetailsInventory from './Pages/DetailsInventory/DetailsInventory';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Signup from './Pages/Login/Signup/Signup';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div style={{fontFamily:"aleo"}}>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/inventory/:productId' element={
            <RequireAuth>
              <DetailsInventory></DetailsInventory>
            </RequireAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/manageitems' element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }></Route>
          <Route path='/additem' element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }></Route>
          <Route path='/myitems' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
