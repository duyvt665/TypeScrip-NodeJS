import { Outlet, Link } from "react-router-dom";

const Nav = () =>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/informations">InforUser</Link>
                    </li>
                    <li>
                        <Link to="/allusers">AllUsers</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;