import {Link} from 'react-router-dom'

function Nav() {
    return (
        <>
        <div>
            <Link to = '/NBA'>
                <h1>NBA Schedule</h1>
            </Link>
        </div>
        </>
    )
}

export default Nav