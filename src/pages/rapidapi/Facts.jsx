import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Pagination from '../../components/pagination/Pagination'

const Facts = () => {


    const {error, loading, data, getData} = useGetData()

    // Pagination
    const [currentPage, setCurrentPage] = useState(3)
    const [itemsPerPage, setItemsPerPage] = useState(5)

    const handleClick = () => {
        getData("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", {
            'X-RapidAPI-Key': process.env.REACT_APP_GAMEAPIKEY,
            'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
          },
          {limit: "30"})
    }

  return (
    <div>
        <Title headline="facts!"/>

        {loading && <Loader/>}
        {error && <Error/>}
        <button onClick={handleClick} className='btn btn-success mt-5'>Random Fact</button>

        {
            data &&
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} itemsTotal={data.length}/>
        }

        {
            data && data.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage)+ itemsPerPage).map((f, index) => 
                <div className="card" key={"facts" + index}>
                    <div className="card-body" >
                        <h4>{f.fact}</h4>
                        <small>{data.indexOf(f)}</small>
                    </div>
                </div>
            )
        }
        

    </div>
  )
}

export default Facts