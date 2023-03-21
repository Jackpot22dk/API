import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import usePatchData from '../../hooks/usePatchData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const IndkoeblisteEdit = () => {

    const {id} = useParams() // id på det der skal rettes - fra url

    const {error, loading, data, getData} = useGetData()
    const {error: errorPatch, loading: loadingPatch, data: dataPatch, patchData} = usePatchData()

    const [vare, setVare] = useState()

    

    // Henter alle vare på siden så de kan blive vist
    useEffect(() => {
      
        getData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping/" + id,
        {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY,
        "Content-Type": "application/json"
        })

    }, [])

    // ved klik på slet knap
    const handleSubmit = (e) => {
        e.preventDefault() // Forhindre reload af siden

        let rettetVare = {
            "fields": {
                "Vare": vare
            }
        }

        patchData("https://api.airtable.com/v0/app8UDZffLbE2i74s/shopping/" + id,
        {"Authorization": "Bearer " + process.env.REACT_APP_AIRBASEKEY,
        "Content-Type": "application/json"
        }, null, rettetVare)

    }
    



  return (
    <section className='inkoebslistecreate container'>
        <h1 className='display-2 my-4'>ADMIN indkøbsliste fra Airtable</h1>

        {(error || errorPatch) && <Error/>}
        {(loading || loadingPatch) && <Loader/>}

        {dataPatch && <h2>Varen ({dataPatch.id}) Er nu rettet</h2>}

        <div className="row">
            <div className="col">
                {
                    data &&
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="inpVare" className='form-label'>Vare:</label>
                            <input type="text" defaultValue={data.fields.Vare} onInput={e => setVare (e.target.value)} className="form-control" id='inpVare'/>
                        </div>
                        <button type='submit' className='btn btn-primary'> ret vare </button>
                    </form>
                }
            </div>
        </div>

    </section>
  )
}

export default IndkoeblisteEdit