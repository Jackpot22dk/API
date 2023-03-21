import React from 'react'
import useDeleteData from '../../hooks/useDeleteData'
import useGetData from '../../hooks/useGetData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductsAdminCreate = () => {

    const {error, loading, data, getData} = useGetData()
    const {error: errorDelete, loading: loadingDelete, data: dataDelete, deleteData} = useDeleteData()

    // Henter alle vare på siden så de kan blive vist
    useEffect(() => {
      
        getData("http://localhost:5000/product/")

    }, [dataDelete])

    // ved klik på slet knap
    const handleDelete = (_id) => {
        //pop op slette advarsel
        if (window.confirm("vil du slette? kan ikke fortrydes!") === true) {
            // Hvis bruger vælge at slette 
            deleteData("http://localhost:5000/product/" + _id)
        }

    }
    



  return (
    <section className='inkoebslistecreate container'>
        <h1 className='display-2 my-4'>ADMIN indkøbsliste fra Airtable</h1>

        {(error || errorDelete) && <Error/>}
        {(loading || loadingDelete) && <Loader/>}

        <div className="row row-cols-1 row-cols-md-4 g-2">
            {
                data && data.map( d => 
                    <div className='col' key={d._id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className='card-title'>{d.name}</h4>
                            </div>
                            <div className="card-footer">
                                <Link to={"/ProductsAdminEdit/" + d._id} className="btn btn-warning me-2">Ret</Link>
                                <button onClick={ () => handleDelete(d._id)} className="btn btn-danger">SLET</button>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>

    </section>
  )
}

export default ProductsAdminCreate