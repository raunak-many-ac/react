import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 18.5%;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

export class MyDashboard extends React.Component{
        render(){
                return(
                        <GridWrapper>
                          <h2>Dashboard Page</h2>
                          <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
                          <p>I am a kitty cat, sup, feed me, no cares in the world</p>
                          <p>Meow meow, I tell my human purr for no reason but to chase after</p>
                        </GridWrapper>
                      )
        }  
} 