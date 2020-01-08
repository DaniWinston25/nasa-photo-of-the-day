import React, { useState, useEffect } from "react";
import axios from 'axios';

function Body(){

const [setBody] = useState()
useEffect(()=>{
    axios
    .get(` https://api.nasa.gov/planetary/apod`)
    .then(response=>{
        setBody(response.data)
     })
     .catch ((error)=>{
         return (error);
     });
    },[])


    return (
        <div>Body</div>
    )
};

export default Body;