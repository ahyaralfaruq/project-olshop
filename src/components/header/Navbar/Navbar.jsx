import { BurgerMenu, CartIcon, MessageIcon, NotificationIcon } from './navbar-icon'
import NavbarSearch from './navbar-search/NavbarSearch'
import './style.css'

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <CartIcon />
            <MessageIcon />
            <NotificationIcon />
            <BurgerMenu />
        </div>
    )
}

export default Navbar
