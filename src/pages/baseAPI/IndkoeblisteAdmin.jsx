import React from 'react'
import useDeleteData from '../../hooks/useDeleteData'
import useGetData from '../../hooks/useGetData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const IndkoeblisteAdmin = () => {

    const {error, loading, data, getData} = useGetData()
    const {error: errorDelete, loading: loadingDelete, data: dataDelete, deleteData} = useDeleteData()

    // Henter alle vare på siden så de kan blive vist
    useEffect(() => {
      
        getData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping",
        {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY})

    }, [dataDelete])

    // ved klik på slet knap
    const handleDelete = (id) => {
        //pop op slette advarsel
        if (window.confirm("vil du slette? kan ikke fortrydes!") === true) {
            // Hvis bruger vælge at slette 
            deleteData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping/" + id,
            {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY})
        }

    }
    



  return (
    <section className='inkoebslistecreate container'>
        <h1 className='display-2 my-4'>ADMIN indkøbsliste fra Airtable</h1>

        {(error || errorDelete) && <Error/>}
        {(loading || loadingDelete) && <Loader/>}

        <div className="row row-cols-1 row-cols-md-4 g-2">
            {
                data && data.records.map( d => 
                    <div className='col' key={d.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className='card-title'>{d.fields.Vare}</h4>
                                <p className='card-text'>{d.createdTime}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={"/IndkoeblisteEdit/" + d.id} className="btn btn-warning me-2">Ret</Link>
                                <button onClick={ () => handleDelete(d.id)} className="btn btn-danger">SLET</button>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>

    </section>
  )
}

export default IndkoeblisteAdmin