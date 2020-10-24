import React from 'react';
import {IconContainer, Container, StyledCard, YouMightLike, FeatureText , Title, SourceText, InterestedText} from "./Styles";
import Star from "./Icons/Star";
import Bookmark from "./Icons/Bookmark";


export default class Recommendation extends React.Component {
  render() {
    return (
      <Container>
           <IconContainer>
             <Star/>
             <InterestedText>Interested?</InterestedText>
             <Bookmark/>
           </IconContainer>
           
           <YouMightLike>You might Also like</YouMightLike>
           <StyledCard>
             <FeatureText>Case Study</FeatureText>
             <Title>SBG.ai creates smarter screening system for credit card applications</Title>
             <SourceText>Bigdata Team, Aug 2020</SourceText>
           </StyledCard>
      </Container>
    )
  }
} 