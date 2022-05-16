
import {useState, useEffect} from 'react'
import Search from './Search'
import Nav from './Nav'

function MLB(props) {

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
        let res = await fetch(`https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${dateQuery}?key=${process.env.REACT_APP_MLB_KEY}`)
        let data = await res.json();
        setData(data)
    }

    useEffect(() => {
      fetchData()    
  },[])
//   console.log(data)
  
//   makeDate()


const showMLBSchedule = data.map((game, idx) => {

        return (
            <div className = "gameLine" key={idx}>
                <img className='logo' src = {`../MLBlogos/${game.AwayTeam}.png`} alt = {`${game.AwayTeam} logo`}/>
                    <h1 className='away'>{`${game.AwayTeam} (MoneyLine: ${game.AwayTeamMoneyLine})`}</h1> 
                        <h3>@</h3>
                    <h1 className='home'>{`${game.HomeTeam} (MoneyLine: ${game.HomeTeamMoneyLine})`}</h1>
                <img className='logo' src = {`../MLBlogos/${game.HomeTeam}.png`} alt = {`${game.HomeTeam} logo`}/>
                <p className = "time">{game.DateTime.slice(-8)} on {game.Channel}</p>
            </div>
        )
    }
)

  return (
    <div className="App">
    <Nav />
    <Search handleSubmit = {handleSubmit} handleChange = {handleChange} dateQuery= {dateQuery}/>
      <h1>MLB Game Schedule {dateQuery}</h1>    
      {showMLBSchedule}
    </div>
  );
}

export default MLB;