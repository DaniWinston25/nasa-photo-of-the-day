import React, { useState, useEffect } from "react";
import axios from 'axios';

const [setBody] = useState()
useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response=>{
        setBody(response.data)
    })
})
console.log(Body)
function Body(){


    return (
        <div>Body</div>
    )
};

export default Body;