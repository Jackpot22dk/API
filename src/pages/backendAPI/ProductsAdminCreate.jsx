import React from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import usePostData from '../../hooks/usePostData'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const ProductsAdminCreate = () => {


  const {error, loading, data, postData} = usePostData()


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(e.target.image.files[0].name)
    // nyt produkt

    let fd = new FormData(e.target) // Formularen gøres til et formdata-objekt


    postData("http://localhost:5000/product", null, null, fd)
}



  return (
    <div>

      <h1>Admin: Opret nyt produkt</h1>

      {loading && <Loader/>}
      {error && <Error/>}
      {data && <h2> "{data.created.name}" er oprettet og fik id: {data.created._id}</h2>}


      <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'> Produktets Navn:</label>
                        <input type="text" className="form-control" name='name' required id='inpVare' placeholder='Varens navn' />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'> Produktets beskrivelse:</label>
                        <input type="text"  className="form-control" name='description' required id='inpVare' />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'> Produktets pris:</label>
                        <input type="number"  className="form-control" name='price' required id='inpVare'  />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'> Produktets billede:</label>
                        <input type="file" className="form-control" name='image' required id='inpVare'  />
                    </div>

                    <button type='submit' className='btn btn-primary'>Opret Vare</button>



                </form>
            </div>
        </div>
    </div>
  )
}

export default ProductsAdminCreate