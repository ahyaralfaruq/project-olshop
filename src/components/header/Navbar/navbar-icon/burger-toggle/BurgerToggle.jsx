import React from 'react'
import { Badge } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const BurgerToggle = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <Menu />
            </Badge>
        </>
    )
}

export default BurgerToggle
