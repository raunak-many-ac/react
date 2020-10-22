import React from 'react';
import Lottie from 'react-lottie';
import animation from "../../../../assets/lottie/robot";
import {Container, Text } from"./Styles";
import { ThemeContext } from "../../../../Theme";


class NewsTab extends React.Component {
     static contextType = ThemeContext;


     render() {
          const { darkColor } = this.context;


          const defaultOptions = {
               loop: true,
               autoplay: true,
               animationData: animation,
               rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
               }
          };

          return (
               <Container>
                    <Lottie options={defaultOptions}
                         height={400}
                         width={400}
                         isStopped={false}
                         isPaused={false} />

                         <Text color = {darkColor}>OOPS!! Nothing is here</Text>
               </Container>
          );

     }
}

export default NewsTab;