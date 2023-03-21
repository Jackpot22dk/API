import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'




const Steam = () => {

  const {error, loading, data, getData} = useGetData()



  const handleClick = () => {
    getData("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+ process.env.REACT_APP_STEAMAPIKEY +"&steamids=76561197960435530&origin=*")
}

  
  return (
    <div>

        <div className="steam container">

        <Title headline="Steam"/>
            {loading && <Loader/>}
            {error && <Error/>}

            <button onClick={handleClick} className='btn btn-success mt-5'>Find spil</button>





        </div>


    </div>
  )
}

export default Steam