import { Badge } from '@material-ui/core'
import { Notifications } from '@material-ui/icons'

const NotificationIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <Notifications />
            </Badge>
        </>
    )
}

export default NotificationIcon
