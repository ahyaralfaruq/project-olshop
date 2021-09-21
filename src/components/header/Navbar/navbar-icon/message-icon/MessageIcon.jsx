import { Badge } from '@material-ui/core'
import { Email } from '@material-ui/icons'

const MessageIcon = () => {
    return (
        <>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <Email />
            </Badge>
        </>
    )
}

export default MessageIcon
