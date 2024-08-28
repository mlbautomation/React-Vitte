import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <>
            <nav className="main-menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cryptocurrency">Crypto List</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu