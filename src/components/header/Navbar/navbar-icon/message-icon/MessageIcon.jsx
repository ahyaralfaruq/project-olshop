import { Badge } from '@material-ui/core'
import { Email } from '@material-ui/icons'

import './style.css'

const MessageIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <Email className="message-icon" />
            </Badge>
        </>
    )
}

export default MessageIcon
