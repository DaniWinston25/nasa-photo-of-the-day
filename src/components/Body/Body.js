import React, { useState, useEffect } from "react";
import axios from 'axios';

function Body(){

const [setBody] = useState()
useEffect(()=>{
    axios
    .get(` https://images-api.nasa.gov`)
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