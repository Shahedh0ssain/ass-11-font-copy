
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navber from './Components/Shared/Navber/Navber';
import Review from './Components/Pages/Review/Review';
import AddProduct from './Components/Pages/AddProduct/AddProducts';
import Login from './Components/Pages/Login/Login';
import ManageCar from './Components/Pages/ManageCar/ManageCar';
import RequirAuth from './Components/Shared/RequirAuth/RequirAuth';
import Registration from './Components/Pages/Registration/Registration';
import MyOrder from './Components/Pages/MyOrder/MyOrder';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Blogs from './Components/Pages/Blogs/Blogs';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* //<Route path="/addproduct" element={<AddProduct />}></Route> */}
        {/* <Route path='/productId/:id' element={<Review />}></Route> */}
        {/* <Route path='/Managecar' element={<ManageCar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/addproduct"
          element={
            <RequirAuth>
              <AddProduct />
            </RequirAuth>
          }
        />
        <Route
          path='/productId/:id'
          element={
            <RequirAuth>
              <Review />
            </RequirAuth>
          }
        />
        <Route
          path='/orders'
          element={
            <RequirAuth>
              <MyOrder />
            </RequirAuth>
          }
        />
        <Route
          path="/Managecar"
          element={
            <RequirAuth>
              <ManageCar />
            </RequirAuth>
          }
        />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
