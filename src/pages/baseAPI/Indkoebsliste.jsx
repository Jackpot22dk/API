import React from 'react'
import { useEffect, useState } from 'react'
import useGetData from '../../hooks/useGetData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const Indkoebsliste = () => {

    const {error, loading, data, getData} = useGetData()


    useEffect(() => {
      getData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping/",
      {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY})
    }, [])
    



  return (
    <section className='inkoebsliste container'>
        <h1 className='display-2 my-4 text-center'> Min indkøbsliste fra airtable</h1>
        {loading && <Loader/>}
        {error && <Error/>}

        <div className="row row-cols-1 row-cols-md-4 g-2">


        {
            data && data.records.map(d => 
            <div className='col' key={ d.id}>
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'> {d.fields.Vare}</h4>
                        <p className='card-text'><small className='muted'>{d.createdTime}</small></p>
                    </div>
                </div>
            </div>
            )
        }



        </div>
    </section>
  )
}

export default Indkoebsliste