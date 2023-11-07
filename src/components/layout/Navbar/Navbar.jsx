import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";





const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const link = <>

        <NavLink className={({ isActive }) => isActive ? "text-[#F2184F] font-bold" : ""
        } style={{ marginRight: '12px' }} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#F2184F] font-bold" : ""
        } style={{ marginRight: '12px' }} to={'/assignments'}> Assignments</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#F2184F] font-bold" : ""
        } style={{ marginRight: '12px' }} to={'/createAssignment'}>Create Assignment</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#F2184F] font-bold" : ""
        } style={{ marginRight: '12px' }} to={'/myAssignment'}>My Assignment</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#F2184F] font-bold" : ""
        } style={{ marginRight: '12px' }} to={'/login'}>Login</NavLink>

    </>


    return (
        <div>
            



            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="normal-case text-xl"><img className="w-[170px]" src={logo} alt="" /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>


                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
