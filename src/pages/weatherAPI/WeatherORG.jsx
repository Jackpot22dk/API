import React from 'react'
import Title from '../../components/Title'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import './weatherstyle.scss';

const WeatherORG = () => {

    const {error, loading, data, getData} = useGetData()

    const [zip, setZip] = useState("8300")


    useEffect( () => {
            if(zip.length === 4 && !isNaN(zip)) {               
                getData("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&lang=da&appid=" + process.env.REACT_APP_WEATHERAPIKEY)
            }
    }, [zip])



  return (
    <div>
        <div className="Weather1 container">

         <Title headline="Vejr - indtast postnummer bitch"/>
         {loading && <Loader/>}
         {error && <Error/>}


         <div className="row">

            <div className="col-12">
                <input type="text"
                placeholder='Indtast Postnummer'
                className='form-control'
                defaultValue={zip}
                onInput={(e) => setZip(e.target.value)}/>
            </div>


         </div>

         {
            data && <div className="">
                <h2 className='text-center mt-5'> Vejret i {data.name}</h2>
                <div className="card">
                    <div className="card-body text-center">
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

export default WeatherORG