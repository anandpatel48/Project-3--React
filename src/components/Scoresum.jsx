function Scoresum({game}) {
    return(
    <div className = "score-summary">
    <h1>{game.Game.AwayTeam} @ {game.Game.HomeTeam}</h1>
    <h3>{game.Game.DateTime.slice(0,10)}</h3>
    <table className = "score">
        <thead>
            <tr>
                <th>Team</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{game.Game.AwayTeam}</td>
                <td>{game.Game.AwayTeamScore}</td>  
            </tr>
            <tr>
                <td>{game.Game.HomeTeam}</td>
                <td>{game.Game.HomeTeamScore}</td>  
            </tr>
        </tbody>
    </table>
    </div>
    )
}

export default Scoresum