function Quarters({game}) {
    return(
    <div className = "quarter-section">
        <h4>Quarter Results</h4>
    <table className = 'quarters'>
        <thead>
            <tr>
                <th>Team</th>
        {game.Quarters.map((quarter, idx) => (
            <th key ={idx}>{quarter.Number}</th>
        ))} 
        </tr>
       </thead>
       <tbody>
        <tr>
            <td>{game.Game.AwayTeam}</td>
        {game.Quarters.map((quarter, idx) => (
            <td key = {idx}>{quarter.AwayScore}</td>
        ))} 
        </tr>
        <tr>
            <td>{game.Game.HomeTeam}</td>
        {game.Quarters.map((quarter, idx) => (
            <td key={idx}>{quarter.HomeScore}</td>
        ))} 
        </tr>
       </tbody>
    </table>
    </div> 
    )
}

export default Quarters