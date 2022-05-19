import Nav from './Nav'
import {Link} from 'react-router-dom'


function Main(props) {
    return (
        <div className = "grid-container">
            
            {/* <Nav /> */}
            <div className = "main-section"></div>
            <div className = "header">
                <h1>App Description</h1>
                <p>This app will allow a user to see the game schedule for a certain day for the NBA or MLB.
                    The app will also allows the user to search for games in the NBA or MLB.
                    Go to the NBA or MLB page and input a date using the same format already seen in the search box
                    and search for the game. Data is from Sportsdata.io.
                </p>
            </div>
            <div className = "Menu">
                <Link to = "/">
                    <h1> Main</h1>
                </Link>
                <Link to = "/nba">
                    <h1> NBA schedule</h1>
                </Link>
                <Link to = "/mlb">
                    <h1> MLB schedule</h1>
                </Link>
            </div>
            <div  className = "main">
                <img className = "mainImg" src = "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700" alt = "nba logo" />
            </div>
            <div className = "right">
                <img className = "mainImg" src = "https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1621939471446-R9E5H71EHYZHT2WRD6L6/MLB+Logo.png" alt = "nba logo" />
            </div>
        </div>
        )
}

export default Main