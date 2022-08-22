import axios from 'axios'
import React, { useEffect, useState } from 'react'
import mobile from "../Componets/mobile.module.css"
import Responsive from './Responsive'

const SearchBar = () => {
const [city ,setCity] = useState("")
const [cityObj,setCityObj] = useState({
    "coord": {
    "lon": 75.8333,
    "lat": 22.7179
    },
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 294.97,
    "feels_like": 295.71,
    "temp_min": 294.97,
    "temp_max": 294.97,
    "pressure": 1000,
    "humidity": 96,
    "sea_level": 1000,
    "grnd_level": 939
    },
    "visibility": 8066,
    "wind": {
    "speed": 8.24,
    "deg": 271,
    "gust": 15.08
    },
    "rain": {
    "1h": 2.3
    },
    "clouds": {
    "all": 100
    },
    "dt": 1661177486,
    "sys": {
    "country": "IN",
    "sunrise": 1661128558,
    "sunset": 1661174624
    },
    "timezone": 19800,
    "id": 1269743,
    "name": "Indore",
    "cod": 200
    })

    let {temp,pressure,humidity} = cityObj.main
    let {sunrise,sunset} = cityObj.sys

   let {weather} = cityObj
   

   
var date = new Date(sunrise * 1000);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var formattedTime1 = hours + ':' + minutes.substr(-2);


var date1 = new Date(sunset * 1000);

var hours1 = date1.getHours();

var minutes1 = "0" + date1.getMinutes();

var formattedTime2 = hours1 + ':' + minutes1.substr(-2)
let {log} = console

const  getCityData = ()=>{
    // https://api.openweathermap.org/data/2.5/weather?q=indore&appid=0f8513fbc764697ffba6a91a231d7834
    let api = `0f8513fbc764697ffba6a91a231d7834`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    axios.get(url)
    .then((res)=>{
        // console.log(res.data)
        setCityObj(res.data)
        // console.log(res.data)
        // console.log(res.data.main.temp) 
    })
    .catch((err)=>{
        console.log(err)
    })
}


// const get7daydata = ()=>{
//     let api = `0f8513fbc764697ffba6a91a231d7834`

//     let ulr7day =`https://api.openweathermap.org/data/2.5/onecall?lat=${citydata.coord.lat}&lon=${citydata.coord.lon}&appid=${api}`

//     axios.get(ulr7day)
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// }

// function getWeather(){
//     navigator.geolocation.getCurrentPosition(success)

//     function success(pos) {
// var crd = pos.coords;

// console.log('Your current position is:');
// console.log(`Latitude : ${crd.latitude}`);
// console.log(`Longitude: ${crd.longitude}`);
// console.log(`More or less ${crd.accuracy} meters.`);
// // getCityLocation(crd.latitude,crd.longitude)
// get7daydata(crd.latitude,crd.longitude)
// }

// }


useEffect(()=>{
  
    // get7daydata()

   
    
},[])


console.log(cityObj)


  return (
    <div className={mobile.mobileBox}>
        <div className={mobile.inputBox}>
        <input type="text" placeholder='enter city name' value={city} onChange={(e)=>setCity(e.target.value)} />
        <button onClick={()=>getCityData()}><i className="fa-solid fa-magnifying-glass"></i></button>
       </div>


    


    <div className= {mobile.box1}>
    {/* <Responsive weather={weather}/> */}
      
     </div>


     <div className= {mobile.box2}>
              {/* degree */}
        <div className= {mobile.div1}>
            <div >
                <h1>{`${ Math.floor(temp - 273.15) }°C`}</h1>
            </div>
            <div>
            
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
            </div>
        </div>
        {/* time chart */}
        <div>2</div>

        {/* pressure */}
        <div className= {mobile.div3}>
            <div>
               <p>Pressure</p>
               <p>{`${pressure}hpa`}</p>
            </div>
            <div>
              <p>Humidity</p>
               <p>{`${humidity}%`}</p>
            </div>
        </div>
        {/* sunrise */}
        <div className= {mobile.div3}>
        <div >
               <p>Sunrise</p>
               <p>{`${formattedTime1}`}</p>
            </div>
            <div>
                <p>Sunset</p>
               <p>{`${formattedTime2}`}</p>
            </div>
        </div>
        {/* time  */}
        <div>5</div>
      
     </div>
    
    </div>
   
  )
}

export default SearchBar
