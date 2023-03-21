import React from 'react'
import usePostData from '../../hooks/usePostData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useEffect, useState } from 'react'

const IndkoeblisteCreate = () => {

    const {error, loading, data, postData} = usePostData()

    const [vare, setVare] = useState()

    useEffect(() => {
      
        if (data)document.forms[0].reset()

    }, [data])


    const handleSubmit = (e) => {
        e.preventDefault()

        let nyVare = {
            "fields": {
                "Vare": vare
            }
        }


        postData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping",
        {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY,
         "Content-Type": "application/json"
        }, null, nyVare)
    }
    



  return (
    <section className='inkoebslistecreate container'>
        <h1 className='display-2 my-4'>Opret ny vare</h1>

        {loading && <Loader/>}
        {error && <Error/>}
        {data && <h2>Der er oprettet en ny vare - med id: {data.id} </h2>}

        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="inpVare" className='form-label'> Vare:</label>
                        <input type="text" onInput={ e => setVare(e.target.value)} className="form-control" id='inpVare' placeholder='Varens navn' />
                    </div>

                    <button type='submit' className='btn btn-primary'>Opret Vare</button>



                </form>
            </div>
        </div>
    </section>
  )
}

export default IndkoeblisteCreate