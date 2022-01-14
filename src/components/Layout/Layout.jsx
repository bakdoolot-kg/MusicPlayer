import Header from "../Header/Header";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <MiniPlayer />
        </>
    );
}

export default Layout;