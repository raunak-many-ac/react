import React from 'react';

import { Container, DetailContainer } from "./Styles";
import OverviewCard from "./OverviewCard/OverviewCard";
import Article from "./Articles/Article";

export class ExploreAi extends React.Component {
  render() {
    return (
      <Container>
        <OverviewCard/>
        <DetailContainer>
          <Article/>
        </DetailContainer>
      </Container>
    )
  }
} 