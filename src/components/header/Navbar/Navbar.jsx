// import { BurgerMenu, CartIcon, MessageIcon, NotificationIcon } from './navbar-icon'
import NavbarSearch from './navbar-search/NavbarSearch'
import { Badge } from '@material-ui/core'
import {Menu, Email, Notifications, ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import './style.css'

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-search">
                <NavbarSearch />
            </div>

            <div className="navbar-icons">
                {/* <CartIcon />
                <MessageIcon />
                <NotificationIcon />
                <BurgerMenu /> */}

                <ul className="wrapping-icons">
                    <li className="li-icons">
                        <Link to="/">
                            <Badge color="secondary" badgeContent={1000} max={999}>
                                <ShoppingCart className="icons" />
                            </Badge>
                        </Link>
                    </li>
                    <li className="li-icons">
                        <Link to="/">
                            <Badge color="secondary" badgeContent={1000} max={999}>
                                <Email className="icons" />
                            </Badge>
                        </Link>
                    </li>
                    <li className="li-icons">
                        <Link to="/">
                            <Badge color="secondary" badgeContent={1000} max={999}>
                                <Notifications className="icons" />
                            </Badge>
                        </Link>
                    </li>
                </ul>

                <div className="li-icons">
                    <button className="button-menu">
                        <Badge color="secondary">
                            <Menu className="icons" />
                        </Badge>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
