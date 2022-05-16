import Nav from './Nav'
import NBA from './NBA'

function Main(props) {
    return (
        <div className = "main">
            
            <Nav />
            <h1>Main</h1>
            <p>This app will allow a user to see the game schedule for a certain day for the NBA.
                The app will also allows the user to search for games in the NBA by a certain date.
                Go to the NBA page and input a date using the same format already seen in the search box
                and search for the game.
            </p>
            <img className = "mainImg" src = "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700" alt = "nba logo" />
        </div>
        )
}

export default Main