import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-yellow-400" : ""
                    } to={'/about'}>About</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-yellow-400" : ""
                    } to={'/contact'}>Contact</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-yellow-400" : ""
                    } to={'/login'}>Login</NavLink>
                </ul>
           </>
    );
};

export default Sidebar;