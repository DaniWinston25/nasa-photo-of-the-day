import React, { useState,useEffect } from "react";
import "./../NasaPOTD.scss";
import axios from 'axios';
import styled from 'styled-components';

//styled components for day 2//


const Wrapper = styled.div`
background-color: $alternate;
padding: 10px 0 20px 0;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;`;

const Title = styled.h1`
font-size: 3.6rem;
font-weight: bold;
color: $dark;
text-shadow: 2px 2px $light;`

const Date = styled.h3`
font-size: 2.4rem;`;

const StyledP = styled.p`
font-size: 1.2rem;
width: 50%;
font-family: 'Montserrat';
color: $dark;
background-color: $background;
box-shadow:12px 12px 2px 1px $dark-alt;`;




function NasaPOTD(){
    const [data, setData] = useState({});
    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=c8NPqVVuDuRocgZvCcSIlHEfWSofuxhYUq2OaIT6')
        .then(res => setData(res.data) )
    },[])

    
    return(
        <Wrapper>
<Title>
  <h1>{data.title}</h1>
  </Title>
  <Date>
  <h3 id="date">{data.date}</h3>
  </Date>
  <img alt = {data.title} src ={data.url}/> 
  
  <StyledP>
  <p>{data.explanation}</p>
  </StyledP>
        </Wrapper>
    )
}

export default NasaPOTD;