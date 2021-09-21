import { Badge } from '@material-ui/core'
import { Notifications } from '@material-ui/icons'

import './style.css'

const NotificationIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <Notifications className="notification-icon" />
            </Badge>
        </>
    )
}

export default NotificationIcon
