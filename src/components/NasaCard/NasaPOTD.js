import React, { useState,useEffect } from "react";
import "./../NasaPOTD.scss";
import axios from 'axios';
import styled from 'styled-components';

//styled components for day 2//


const Wrapper = styled.div`
background-color: #0D1B2A;
padding: 10px 0 20px 0;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;`;

const Title = styled.h1`
font-size: 3.6rem;
font-weight: bold;
color: #ECCBD9;
text-shadow: 2px 2px #54577C;`

const Date = styled.h3`
font-size: 2.4rem;
color: #ECCBD9;
text-shadow: 2px 2px #54577C;`;

const StyledP = styled.p`
margin-top: 2%;
font-size: 1.2rem;
width: 50%;
font-family: 'Montserrat';
color: #0D1B2A;
background-color:#FFFBFA;
box-shadow:12px 12px 2px 1px #4381C1;`;




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