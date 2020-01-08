import React, { useState,useEffect } from "react";

import axios from 'axios';


function NasaPOTD(){
    const [data, setData] = useState({});
    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=c8NPqVVuDuRocgZvCcSIlHEfWSofuxhYUq2OaIT6')
        .then(res => setData(res.data) )
    },[])

    
    return(
        <div className= 'wrapper'>

  <h1>{data.title}</h1>
  <h3>{data.date}</h3>
  <img alt = {data.title} src ={data.url}/> 
  <p>{data.explanation}</p>
        </div>
    )
}

export default NasaPOTD;