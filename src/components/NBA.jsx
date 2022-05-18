
import {useState, useEffect} from 'react'
import Search from './Search'
import Nav from './Nav'
import {Link} from 'react-router-dom'

function NBA(props) {

    const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const [date, setDate] = useState(new Date())
    const [dateQuery, setDateQuery] = useState(`${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`)
    const [data, setData] = useState([])
    // console.log(date)


    async function handleSubmit(e) {
        e.preventDefault()
        fetchData()
        // let res = await fetch (`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${dateQuery}?key=08e1666ff8dc4172868e02bb673ff311`)
        // let data = await res.json();
        // setData(data)

    }
    // const dateQuery = `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`
    // console.log(dateQuery)
    function handleChange(e) {
        setDateQuery(e.target.value)
    }

    async function fetchData() {
        // const KEY = process.env.REACT_APP_NBA_KEY
        // console.log(KEY)
        let res = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${dateQuery}?key=${process.env.REACT_APP_NBA_KEY}`)
        let data = await res.json();
        setData(data)
    }

    useEffect(() => {
      fetchData()    
  },[])
//   console.log(data)
  
//   makeDate()


const showNBASchedule = data.map((game, idx) => {
    if(data.length === 1 && data[0].Status === 'Canceled') {
        return (
            <div key = {idx} className = "no-games">
                <h1>No Games Scheduled</h1>
                <img className = "sad" src= "https://images.axios.com/nkmiWJJ8aHh_NLDsFlenGO2f2tQ=/0x0:1920x1080/1920x1080/2019/03/07/1551964823893.png" alt = "sad" />
            </div>
        )
    } else if (game.Status === 'Final' || game.Status === 'InProgress') {
        return (
            <div className = "gameLine" key={idx}>
                <img className='logo' src = {`../NBAlogos/${game.AwayTeam}.png`} alt = {`${game.AwayTeam} logo`}/>
                    <h1 className='away'>{`${game.AwayTeam} ${game.AwayTeamScore}pts (Final)`}</h1> 
                        <h3>@</h3>
                    <h1 className='home'>{`${game.HomeTeam} ${game.HomeTeamScore}pts (Final)`}</h1>
                <img className='logo' src = {`../NBAlogos/${game.HomeTeam}.png`} alt = {`${game.HomeTeam} logo`}/>
                <p className = "time">Aired at {game.DateTime.slice(-8)} (EST) on {game.Channel}</p>
                <Link to = {`/boxscore/${game.GameID}`} id = {game.GameID}>
                    <h5 className = "box-score">Box Score</h5>
                </Link>

            </div>
        )
    } else if (game.Status === 'Scheduled') {
        return (
            <div className = "gameLine" key = {idx}>
                <img className='logo' src = {`../NBAlogos/${game.AwayTeam}.png`} alt = {`${game.AwayTeam} logo`}/>
                    <h1 className='away'>{`${game.AwayTeam} (Moneyline: ${game.AwayTeamMoneyLine})`}</h1> 
                        <h3>@</h3>
                    <h1 className='home'>{`${game.HomeTeam} (MoneyLine: ${game.HomeTeamMoneyLine})`}</h1>
                <img className='logo' src = {`../NBAlogos/${game.HomeTeam}.png`} alt = {`${game.HomeTeam} logo`}/>
                <p className = "time">{game.DateTime.slice(-8)} on {game.Channel}</p>
            </div>
        )
    } 
    }
)

  return (
    <div className="app">
    <Nav />
    <Search handleSubmit = {handleSubmit} handleChange = {handleChange} dateQuery= {dateQuery}/>
      <h1>NBA Game Schedule {dateQuery}</h1>    
      {showNBASchedule}
    </div>
  );
}

export default NBA;