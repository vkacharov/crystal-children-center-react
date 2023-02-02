import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div>HEADER</div>
            <Outlet />
            <div>FOOTER</div>
        </>
    );
}
export default Layout;