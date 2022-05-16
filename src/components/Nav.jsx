import {Link} from 'react-router-dom'

function Nav() {
    return (
        <>
        <div className = "nav">
            <Link to = '/'>
                Home     | 
            </Link>
            <Link to = '/NBA'>
                <img className = "navLogo" src = "https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png" alt = "nba logo" />
                <span>NBA Schedule     |</span>
            </Link>
            <Link to = '/MLB'>
                <img className = "navLogo" src = "https://wallpapercave.com/wp/wp6663392.jpg" alt = "nba logo" />
                <span>MLB Schedule</span>
            </Link>

        </div>
        </>
    )
}

export default Nav