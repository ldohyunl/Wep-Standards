import {Outlet, Link} from "react-router-dom";
//리엑트에 임시 내비게이션

const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/intro">what ?</Link>
                </li>
                <li>
                    <Link to="/es6">es6</Link>
                </li>
                <li>
                    <Link to="/render">render</Link>
                </li>
                <li>
                    <Link to="/jsx">jsx</Link>
                </li>
                <li>
                    <Link to="/conditiion">condition</Link>
                </li>
                <li>
                    <Link to="/lists">lists</Link>
                </li>
                <li>
                    <Link to="/forms">forms</Link>
                </li>
                <li>
                    <Link to="/hook">hook</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout;//렌더링을 시켜야 됩니다