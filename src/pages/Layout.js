import { Outlet } from "react-router-dom";
import { ResponsiveNavBar } from '../ui-components';

function Layout({onSignOut}) {
    return (
        <>
            <ResponsiveNavBar onSignOutClick={onSignOut}/>
            <Outlet />
            <div className="page-footer">Copyright © 2023 Saint Olive Tree</div>
        </>
    );
}
export default Layout;