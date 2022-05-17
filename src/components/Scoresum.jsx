function Scoresum({game}) {
    return(
    <div className = "score-summary">
    <h1>{game.Game.AwayTeam} @ {game.Game.HomeTeam}</h1>
    <table className = "score">
        <tr>
            <th>Team</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>{game.Game.AwayTeam}</td>
            <td>{game.Game.AwayTeamScore}</td>  
        </tr>
        <tr>
            <td>{game.Game.HomeTeam}</td>
            <td>{game.Game.HomeTeamScore}</td>  
        </tr>
    </table>
    </div>
    )
}

export default Scoresum