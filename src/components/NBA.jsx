
import {useState, useEffect} from 'react'


function NBA() {
    const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const [date, setDate] = useState(new Date())
    // console.log(date)

    const dateQuery = `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`
    // console.log(dateQuery)

    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
          let res = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${dateQuery}?key=08e1666ff8dc4172868e02bb673ff311`)
          let data = await res.json();
          setData(data)
      }
      fetchData()
      
  },[])
//   console.log(data)
  
//   makeDate()


const showSchedule = data.map((game, idx) => {
    if(data.length === 1 && data[0].Status === 'Canceled') {
        return (
            <h1 key = {idx}>No Games Scheduled for Today</h1>
        )
    } else if (game.Status !== 'Canceled') {
        return (
            <div key={idx}>
                <h1>{`${game.AwayTeam} @ ${game.HomeTeam}`}</h1>
            </div>
        )
    }
    }
)

  return (
    <div className="App">
      <h1>Games Today</h1>    
      {showSchedule}
    </div>
  );
}

export default NBA;