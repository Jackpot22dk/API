import { useState } from 'react'
import axios from 'axios'


const useDeleteData = () => {
  
    // States til håndtering af data, loading, error

    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const deleteData = ( url, headers = null, params = null ) => {
        setData()
        setLoading(true)
        

        axios.delete( url,  {headers: headers, params: params} )
            .then( res => { 
                console.log( res.data ) 
                setData(res.data)
                setError(false)
            } )
            .catch( err => {
                console.log( "error" )
                setError(true)
                setData()
            })
            .finally( ()=> {

                setLoading(false)

            })

    }

   
    //det der "udbydes" fra hooket her
    return { deleteData, error, loading, data }
}

export default useDeleteData
