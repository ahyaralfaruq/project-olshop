import { Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const CartIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <ShoppingCart />
            </Badge>
        </>
    )
}

export default CartIcon
