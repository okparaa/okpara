import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => (
    <div className='container'>
        <Sidebar />
        <div className='pages'>
            <Outlet />
        </div>
    </div>
)


export default Layout;