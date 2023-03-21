import React from 'react'
import { useEffect, useState } from 'react'
import useGetData from '../../hooks/useGetData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'


const Products = () => {

  const {error, loading, data, getData} = useGetData()


  useEffect(() => {
    getData("http://localhost:5000/product/",)
  }, [])

  return (
    <div>
      <h1 className='display-2 my-4 text-center'> Min indkøbsliste fra airtable</h1>
        {loading && <Loader/>}
        {error && <Error/>}

        <div className="row row-cols-1 row-cols-md-4 g-2">


        {
            data && data.map(d => 
            <div className='col' key={d._id}>
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'> {d.name}</h4>
                    </div>
                </div>
            </div>
            )
        }



        </div>
    </div>
  )
}

export default Products