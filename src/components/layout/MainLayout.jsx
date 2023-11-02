import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const MainLayout = ({ children }) => {
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
               
               <Navbar></Navbar>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side ">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};


MainLayout.propTypes = {
    children: PropTypes.node,
}

export default MainLayout;