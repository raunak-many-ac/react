import React from 'react';

import { Container, DetailContainer } from "./Styles";
import OverviewCard from "./OverviewCard/OverviewCard";
import Article from "./Articles/Article";
import Recommendation from "./Recommendation/Recommendation";

import {connect} from "react-redux";
import {fetchFromFirebase, deleteFunc} from "../../Store/actions/caseStudyActions";



class CaseStudy extends React.Component {

  render() {
    console.log(this.props.location);
    
    if(this.props.feature == undefined){
      const caseStudyId = this.props.location.state;
      this.props.fetchFromFirebase(caseStudyId);
    }

    return (
      <Container >
        <OverviewCard feature = {this.props.feature} title = {this.props.title} source = {this.props.source}/>
        <DetailContainer>
          <Article article = {this.props.article}/>
          <Recommendation/>
        </DetailContainer>
      </Container>
    )
  }

} 

const mapStateToProps = (state) =>{

  return{
    feature: state.caseStudyReducer.feature,
    source: state.caseStudyReducer.source,
    title: state.caseStudyReducer.title,
    article: state.caseStudyReducer.article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFunc: () => dispatch(deleteFunc()), //..when we will unmount then we will delete all the data from the server
    fetchFromFirebase: (docName) => dispatch(fetchFromFirebase(docName)) //..to get data from the firestore 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);


