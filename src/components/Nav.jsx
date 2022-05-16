import {Link} from 'react-router-dom'

function Nav() {
    return (
        <>
        <div>
            <Link to = '/NBA'>
                NBA Schedule | 
            </Link>
            <Link to = '/'>
                Home
            </Link>
        </div>
        </>
    )
}

export default Nav