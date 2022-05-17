import React from "react";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Nav from '../components/Nav'

const BoxScore = (props) => {
    const params = useParams()
    console.log(params)
    const id = params.id
    console.log(id)
    const [game, setGame] = useState(null)
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

    

    return (
    <div className = "box-score=page">
        <Nav />
        <h1>This should show the box score page</h1>
    </div>
    )
}

export default BoxScore