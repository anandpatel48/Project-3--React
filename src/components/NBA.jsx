
import {useState, useEffect} from 'react'

function NBA() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
        let res = await fetch('https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2022-MAY-15?key=08e1666ff8dc4172868e02bb673ff311')
        let data = await res.json();
        setData(data)
    }
    fetchData()
    
},[])





console.log(data)

  return (
    <div className="App">
      <h1>Test</h1>
      <h2>{data[0].GameID}</h2>
    </div>
  );
}

export default NBA;