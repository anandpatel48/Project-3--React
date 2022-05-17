import React from "react";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Nav from '../components/Nav'
import Quarters from '../components/Quarters'
import Scoresum from "../components/Scoresum";

const BoxScore = (props) => {
    const params = useParams()
    console.log(params)
    const id = params.id
    console.log(id)
    const [game, setGame] = useState(null)
    // const quarters = game.Quarters
    // console.log(quarters)

    async function fetchData() {
        // const KEY = process.env.REACT_APP_NBA_KEY
        // console.log(KEY)
        let res = await fetch(`https://api.sportsdata.io/v3/nba/stats/json/BoxScore/${id}?key=${process.env.REACT_APP_NBA_KEY}`)
        let data = await res.json();
        setGame(data)
    }

    useEffect(() => {
        fetchData()    
    },[])

    console.log(game)

    // function Scoresum() {
    //     return(
    //     <div className = "score-summary">
    //     <h1>{game.Game.AwayTeam} @ {game.Game.HomeTeam}</h1>
    //     <table className = "score">
    //         <tr>
    //             <th>Team</th>
    //             <th>Score</th>
    //         </tr>
    //         <tr>
    //             <td>{game.Game.AwayTeam}</td>
    //             <td>{game.Game.AwayTeamScore}</td>  
    //         </tr>
    //         <tr>
    //             <td>{game.Game.HomeTeam}</td>
    //             <td>{game.Game.HomeTeamScore}</td>  
    //         </tr>
    //     </table>
    //     </div>
    //     )
    // }


    return (    
    <div className = "box-score-page">
        {game?<><Nav /> <Scoresum game={game} /> <Quarters game= {game} /></> : <h1>Loading</h1> }

    </div>
    )
}

export default BoxScore