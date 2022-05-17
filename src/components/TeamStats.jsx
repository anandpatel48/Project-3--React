function TeamStats({game}) {
    return (
       <div className = "team-stats">
           <h1>{game.TeamGames[0].Name}</h1>
       </div> 
    )
}

export default TeamStats