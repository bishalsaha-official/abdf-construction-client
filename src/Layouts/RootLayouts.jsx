import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayouts;