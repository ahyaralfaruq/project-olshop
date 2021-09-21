import React from 'react'
import { Badge } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import './style.css'

const BurgerToggle = () => {
    return (
        <>
            <Badge color="secondary">
                <Menu className="burger-icon" />
            </Badge>
        </>
    )
}

export default BurgerToggle
