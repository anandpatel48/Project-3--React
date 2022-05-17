import React from "react";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Nav from '../components/Nav'
import Quarters from '../components/Quarters'
import Scoresum from "../components/Scoresum";
import TeamStats from "../components/TeamStats";

const BoxScore = (props) => {
    const params = useParams()
    const id = params.id
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

 {game? console.log(game.TeamGames) : <h1>Loading</h1>}



    return (    
    <div className = "box-score-page">
        {game?<><Nav /> <Scoresum game={game} /> <Quarters game= {game} /> <TeamStats game = {game} /></> : <h1>Loading</h1> }

    </div>
    )
}

export default BoxScore