import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Container from "./container";
import styled from "styled-components";

const Flex=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
margin: 10% 20%;
`

const App = () => {

  const [starData, setstarData] = useState([]);

  useEffect(() => {
        console.log("after");
      
        axios
           .get("https://swapi.co/api/people/")
          .then(response => {
            console.log(response);
          
            setstarData(response.data.results);
          })
          .catch(error => console.log(error));
      }, []);

      console.log(starData);
 
  return (
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Flex>
      {starData.map(item => {
          return <Container 
          key={item.name} 
          height={item.height} 
          name={item.name} 
          mass={item.mass}
          home={item.birth_year}
          />;
        })}
        </Flex>

     
    </div>
  );
}

export default App;

