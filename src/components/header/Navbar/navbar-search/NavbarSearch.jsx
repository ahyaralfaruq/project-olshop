import React from 'react'
import { Search } from '@material-ui/icons'

import './style.css'

const NavbarSearch = () => {
    return (
        <div className="search-wrapper">
            <div className="form-inline">
                <input type="text" className="input-box" placeholder="Cari" />
                <button className="button-search">
                    <Search />
                </button>
            </div>
        </div>
    )
}

export default NavbarSearch
