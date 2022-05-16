import Nav from './Nav'
import NBA from './NBA'

function Main(props) {
    return (
        <div className = "main">
            
            <Nav />
            <h1>Main</h1>
            <p>This app will allow a user to see the game schedule for a certain day for the NBA or MLB.
                The app will also allows the user to search for games in the NBA or MLB by a certain date.
                Go to the NBA or MLB page and input a date using the same format already seen in the search box
                and search for the game. Data is from Sportsdata.io.
            </p>
            <img className = "mainImg" src = "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700" alt = "nba logo" />
            <img className = "mainImg" src = "https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1621939471446-R9E5H71EHYZHT2WRD6L6/MLB+Logo.png" alt = "nba logo" />
        </div>
        )
}

export default Main