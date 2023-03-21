import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'


// https://rapidapi.com/wim.onderbeke/api/game-prices
// REACT_APP_GAMEAPIKEY

const Games = () => {
    const {error, loading, data, getData} = useGetData()


    const [search, setSearch] = useState("garen")


    const handleClick = () => {
        getData("https://steamcharts.p.rapidapi.com/api/v1/games/search/Counter%20Strike", {
            'X-RapidAPI-Key': process.env.REACT_APP_GAMEAPIKEY,
            'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
          })
    }


  return (
    <div>
        <Title headline="find din champion"/>

        {loading && <Loader/>}
        {error && <Error/>}
        {data && <h2>Her er der en title</h2>}x½

        <button onClick={handleClick} className='btn btn-success mt-5'>Find spil</button>
        <input className='form-select' type="text" defaultValue={search} onInput={e => setSearch(e.target.value)}/>

        {
            data && 
            <div className="col-4">             
              <div className="card h-100">
                <div className="card-body text-center">
              {/* <h2>{data.champions[0].node.champion_name}</h2> */}

                </div>
                  {/* <img src={data.champions[0].node.champion.profile_image.url}/> */}
              </div>
            </div>
        }

    </div>
  )
}

export default Games