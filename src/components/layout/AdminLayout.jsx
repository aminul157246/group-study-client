import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-gray-300 flex-1">
                <h1>Sidebar</h1>
            </div>
            <div className="bg-pink-100 flex-[3]">
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;