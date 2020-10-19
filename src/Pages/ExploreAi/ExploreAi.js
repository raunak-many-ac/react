import React from 'react';

import { Container, DetailContainer } from "./Styles";
import OverviewCard from "./OverviewCard/OverviewCard";
import Article from "./Articles/Article";
import Recommendation from "./Recommendation/Recommendation";

export class ExploreAi extends React.Component {
  render() {
    return (
      <Container>
        <OverviewCard/>
        <DetailContainer>
          <Article/>
          <Recommendation/>
        </DetailContainer>
      </Container>
    )
  }
} 