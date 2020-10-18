import React from 'react';
import background from "../../../../assets/image_card_ml.svg";
import img1 from "../../../../assets/image_quickconcepts_ml.png";
import img2 from "../../../../assets/image_quickconcepts_ml2.png";
import img3 from "../../../../assets/image_quickconcepts_ml3.png";
import img4 from "../../../../assets/image_quickconcepts_ml4.png";

import { WideCardContainer, WideCard, TextContainer, FeatureText, LargeCardTitle, BottomCardContainer } from "./Styles";
import {HorizontalCardContainer, Card, SmallCardTitle, TimeToRead, LightText} from "./Styles";


class QuickConceptsTab extends React.Component {
     render() {

          return (
               <div>
                    <WideCardContainer>
                         <WideCard margin="0%" src={background} >
                              
                               <TextContainer>
                                   <FeatureText>Quick Learn</FeatureText>
                                   <LargeCardTitle>Machine Learning vs Deep Learning</LargeCardTitle>
                                   <BottomCardContainer><FeatureText>10 min course</FeatureText></BottomCardContainer>
                              </TextContainer>
                         </WideCard>

                         <WideCard margin="3%" src={background}>
                              
                               <TextContainer>
                                   <FeatureText>Quick Learn</FeatureText> 
                                   <LargeCardTitle>Machine Learning vs Deep Learning</LargeCardTitle>
                                   <BottomCardContainer><FeatureText>5 min Course</FeatureText></BottomCardContainer>
                              </TextContainer>
                         </WideCard>
                    </WideCardContainer>

                    <HorizontalCardContainer>
                         <Card margin = "0%">
                              <img src = {img1}/>
                              <SmallCardTitle>How business needs to change to be AI ready?</SmallCardTitle>
                              <TimeToRead>6 min read</TimeToRead>
                              <LightText>Business Insider</LightText>

                         </Card >

                         <Card margin = "2%">
                              <img src = {img2}/>
                              <SmallCardTitle>Is neuralink actually gonna save world?</SmallCardTitle>
                              <TimeToRead>10 min read</TimeToRead>
                              <LightText>Medium</LightText>

                         </Card>

                         <Card margin = "2%">
                              <img src = {img3}/>
                              <SmallCardTitle>A primer on Artificial Intelligence (AI)</SmallCardTitle>
                              <TimeToRead>5 min read</TimeToRead>
                              <LightText>Hackernoon</LightText>

                         </Card>

                         <Card margin = "2%">
                              <img src = {img4}/>
                              <SmallCardTitle>Machine learning vs Deep learning</SmallCardTitle>
                              <TimeToRead>8 min read</TimeToRead>
                              <LightText>Medium</LightText>
                         </Card>
                    </HorizontalCardContainer>
               </div>
          );

     }
}

export default QuickConceptsTab;