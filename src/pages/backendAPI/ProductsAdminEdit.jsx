import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import usePatchData from '../../hooks/usePatchData'
import usePutData from '../../hooks/usePutData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const ProductsAdminEdit = () => {


  const {_id} = useParams() // id på det der skal rettes - fra url

  const {error, loading, data, getData} = useGetData()
  const {error: errorPut, loading: loadingPut, data: dataPut, putData} = usePutData()


  useEffect(() => {
      
    getData("http://localhost:5000/product/" + _id)

}, [])

const handleSubmit = (e) => {
  e.preventDefault() // Forhindre reload af siden


  let fd = new FormData(e.target)


  putData("http://localhost:5000/product/"+ _id, null, null, fd)

}



  return (
    <div>


    <h1 className='display-2 my-4 text-cetner'>ADMIN indkøbsliste fra LOCALHOST</h1>

    {(error || errorPut) && <Error/>}
    {(loading || loadingPut) && <Loader/>}

    {data && <h2>Varen {data.name} Er nu rettet</h2>}

    <div className="row">
        <div className="col">
            {
                data &&
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'>Vare:</label>
                        <input defaultValue={data.name} type="text" name='name' className="form-control" id='inpVare'/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'>description:</label>
                        <input defaultValue={data.description} type="text" name='name' className="form-control" id='inpVare'/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'>price:</label>
                        <input defaultValue={data.price} type="text" name='name' className="form-control" id='inpVare'/>
                    </div>
                    <button type='submit' className='btn btn-primary'> ret vare </button>
                </form>
            }
        </div>
    </div>


    </div>
  )
}

export default ProductsAdminEdit