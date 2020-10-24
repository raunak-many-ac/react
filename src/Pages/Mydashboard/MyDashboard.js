import React from 'react';

//..styled componenets
import { Container, HorizontalLine } from "./Styles";

//..other custom components
import Carousal from "./Carousal/Carousal";
import TabNav from "./Tabs/TabNav";
import Tab from "./Tabs/Tab";
import QuickConceptsTab from "./Tabs/QuickConcepts_Tab/QuickConceptsTab";
import ArticlesTab from "./Tabs/Articles_Tab/ArticlesTab";
import NewsTab from "./Tabs/News_Tab/NewsTab";

//..redux
import {connect} from "react-redux";

import {fetchFromFirebase, deleteFunc} from "../../Store/actions/dashboardAction";

class MyDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "Quick Concepts"
    }
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  componentWillUnmount(){
    console.log("dashboard unmounterd");
    this.props.deleteFunc();
  }

  render() {
    // console.log(this.props);
    if(this.props.carousal == undefined){
      this.props.fetchFromFirebase(); 
    }

    return (
      <Container>

        <Carousal data = {this.props.carousal}/>

        <HorizontalLine />

        <TabNav tabs={["Quick Concepts", "Articles", "News"]} selected={this.state.selected} setSelected={this.setSelected} >
          <Tab isSelected={this.state.selected === "Quick Concepts"}  >
            <QuickConceptsTab wideCards = {this.props.wideCards} cards = {this.props.cards}/>
          </Tab>
          <Tab isSelected={this.state.selected === "Articles"} >
            <ArticlesTab />
          </Tab>
          <Tab isSelected={this.state.selected === "News"} >
            <NewsTab />
          </Tab>
        </TabNav>

      </Container>

    )
  }
} 

const mapStateToProps = (state) =>{
  return{
    carousal: state.dashboardReducer.carousal,
    wideCards: state.dashboardReducer.wideCards,
    cards: state.dashboardReducer.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFunc: () => dispatch(deleteFunc()), //..when we will unmount then we will delete all the data from the server
    fetchFromFirebase: () => dispatch(fetchFromFirebase()) //..to get data from the firestore 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard);
