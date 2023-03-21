import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import usePatchData from '../../hooks/usePatchData'
import usePutData from '../../hooks/usePutData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import "./haveservice.scss"

const Haveservice = () => {
    const {error, loading, data, getData} = useGetData()

    useEffect(() => {
        getData("../assets/haveserv.json",
        {"Content-Type": "application/json"})
      }, [])


  return (
    <div>
        <div className="gardencontainer">
            {
                data && data.content.map((d, index) => 
                    <div className="container">
                        <div className="images">
                        <img className='rounded-circle' src={d.image} alt="" />
                        <h2>{d.title}</h2>
                        <p>{d.content}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Haveservice