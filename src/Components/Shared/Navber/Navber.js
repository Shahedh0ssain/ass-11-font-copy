import { signOut } from 'firebase/auth';
import { useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import useNav from '../../Hooks/useNav';
import ConfirmModal from '../Modal/ConfirmModal';



const Navber = () => {

  const [user] = useAuthState(auth);
  const [toggleLogOut, setToggleLogOut] = useState(false);

  //console.log(user);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');

  };
  const { navbar, navbarLogo } = useNav();



  //${
  // navbar && "bg-white shadow-lg"
  //style="background-image: url("assets/img/shapes/texture-bg.png");"
  //navbar bg-base-100 container mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sticky top-0 z-20

  return (
    <div style={{ backgroundColor: '#20232a' }} className={`navbar flex lg:justify-around border-gray-200 px-2 sm:px-8 py-2.5  w-full sticky top-0  z-50 transition-all bg-black ${navbar && "bg-white shadow-lg "}`}>
      <div className="navbar-start ">
        <div className="dropdown">
          {/* <label className=" lg:hidden btn btn-circle swap swap-rotate">

            <input type="checkbox" />

            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

          </label> */}
          <label tabIndex={0} className="lg:hidden btn  btn-circle">
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li style={{ color: 'red' }} className=''><Link to="/">Home</Link></li>
            {
              user ?
                <>

                  <li style={{ color: 'red' }} className=''><Link to="/orders">My Items</Link></li>
                  <li style={{ color: 'red' }} className=''><Link to="/addproduct">Add Items</Link></li>
                  <li style={{ color: 'red' }} className=''><Link to="/Managecar">Manage Items </Link></li>
                  <li style={{ color: 'red' }} className=''><Link>{user?.displayName}</Link></li>
                  <label for="my-modal-6" style={{ color: 'red' }} onClick={() => setToggleLogOut(true)}>Logout</label>


                </>
                :
                <li><Link to="/login">Login</Link></li>

            }

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">{navbarLogo}</a>
      </div>

      {/* //mobile verson */}
      <div className="hidden lg:flex lg:justify-end ">
        <ul className="menu menu-horizontal p-0">


          {
            user ?
              <>
                {/* <li style={{ color: 'red' }} className=''><NavLink to="/">Home</NavLink></li> */}
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><NavLink to="/home">Home</NavLink></li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><NavLink to="/orders">My Items</NavLink></li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><NavLink to="/addproduct">Add Items</NavLink></li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><NavLink to="/Managecar">Manage Items </NavLink></li>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><Link>{user?.displayName}</Link></li>
                <li><label for="my-modal-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]' onClick={() => setToggleLogOut(true)}>Logout</label></li>

              </>
              :
              <>
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><Link to="/">Home</Link></li>
                {/* <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><Link to="/blogs">Blogs</Link></li> */}
                <li style={{ color: 'rgba(255, 255, 255, 0.8)' }} className='font-normal text-[18px]'><Link to="/login">Login</Link></li>

              </>

          }

        </ul>
      </div>
      {/* <div class="navbar-end">
      <Link to="/login">Login</Link>
      </div> */}

      {
        toggleLogOut && <ConfirmModal
          // service={  null}
          btn='Logout'
          msg="Are you sure Logout!!"
          handle={logout}
        ></ConfirmModal>
      }
    </div>

    // <nav
    //   className={`border-gray-200 px-2 sm:px-8 py-2.5 fixed w-full top-0 z-50 transition-all"
    //     }`}
    // >
    //   <div className="container flex flex-wrap justify-between items-center mx-auto">
    //     <a href="https://flowbite.com" className="flex items-center">
    //       LOgo
    //     </a>

    //     <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
    //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
    //         <li>
    //           <Link
    //             to="/"
    //             className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0 dark:"
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/generator"
    //             className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Generator
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Docs
    //           </Link>
    //         </li>

    //         <li>
    //           <Link
    //             to="/"
    //             className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //         <li>
    //           {user ? (
    //             <button onClick={() => logout(auth)}>Logout</button>
    //           ) : (
    //             <Link
    //               to="/login"
    //               className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
    //             >
    //               Login
    //             </Link>
    //           )}
    //         </li>
    //         <li>{user?.email}</li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

  );
};

export default Navber;