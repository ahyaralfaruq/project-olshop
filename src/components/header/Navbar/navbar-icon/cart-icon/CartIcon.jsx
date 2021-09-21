import { Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import './style.css'

const CartIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <ShoppingCart className="cart-icon" />
            </Badge>
        </>
    )
}

export default CartIcon
