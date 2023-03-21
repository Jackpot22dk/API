import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import './weatherstyle.scss';
// Import af map
import {initMap, changeMapView, removeMap} from "../../helpers/leaflet"


const Weathermap = () => {
    // Request-hook Openweather
    const {error, loading, data, getData} = useGetData()
    // Request-hook DAWA
    const {error: errorDAWA, loading: loadingDAWA, data: dataDAWA, getData: getDataDAWA} = useGetData()

    // State til Postkoder
    const [zip, setZip] = useState("8300")


    useEffect( () => {
            if(zip.length === 4 && !isNaN(zip)) {               
                getData("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&lang=da&appid=" + process.env.REACT_APP_WEATHERAPIKEY)
            } else {
                getDataDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
            }
    }, [zip])

    useEffect(() => {
      
        initMap([56,10])
      return () => {
        removeMap()
      }
    }, [])

    useEffect(() => {
      if(data) changeMapView([data.coord.lat, data.coord.lon], data.name)
    }, [data]) // lytter efter data fra openweather
    
    



  return (
    <div>
        <div className="Weather1 container">

         <Title headline="Vejr"/>
         {loading && <Loader/>}
         {error && <Error/>}


         <div className="row">

            <div className="col-12">
                <input
                list='adresseforslag'
                type="text"
                placeholder='Indtast Postnummer'
                className='form-control'
                defaultValue={zip}
                autoComplete="off"
                onInput={(e) => setZip(e.target.value.substring(0, 4))}/>
                <datalist id='adresseforslag'>
                    {
                        dataDAWA && dataDAWA.map(adress => <option value={adress.tekst} key={adress.postnummer.nr}/>)
                    }
                </datalist>
            </div>
         </div>
         
         <div id="mapcontainer" style={{height: "500px", width: "500px", backgroundColor: "black"}}>
                            
                            </div>

         {
            data && <div className="">
                <h2 className='text-center mt-5'> Vejret i {data.name}</h2>
                <div className="card">
                    <div className="card-body text-center greynation mb-5">


                        <p className='display-4 cap'>{data.weather[0].description}</p>
                        <p>Temperatur: {Math.round(data.main.temp)}&#8451;</p>
                        <p>luftfugtighed: {Math.round(data.main.humidity)}%</p>
                        <img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png" }/>      


                    </div>
                </div>
            </div>
         }



        </div>
    </div>
  )
}

export default Weathermap