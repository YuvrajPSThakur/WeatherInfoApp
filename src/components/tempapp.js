import React, { Component, useEffect, useState } from "react";
import './css/style.css'


const Tempapp = () => {
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(  ()=>{
       const fetchApi = async () =>{ 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5de184dc3c23c4d1a9a5a88b8a026600`; 
        const response = await fetch(url);
        const resJson = await response.json();
        
        setCity(resJson.main);
         

       }
        fetchApi(); 
    },[search]) 
    return(
        <>
        <div className="topLine">
            The Weather App
        </div>
        <div className="box">
        <div className="inputData">
          <input type = "search" className="inputField" value = {search} onChange={(event)=>{
              setSearch(event.target.value)
          }}></input>
         
        </div>
      {!city ? (
          <p className="errorMsg">No Data Found</p>
      ): <div className="info">
      <h2 className="location">
          {search}
      </h2>
      <h1 className="temp">
          {city.temp}º C
          

      </h1>
      <h3 className="tempmin_max"> Min: {city.temp_min} || Max: {city.temp_max}</h3>

  </div>}
      
      </div>
      </>
    )
}

export default Tempapp;