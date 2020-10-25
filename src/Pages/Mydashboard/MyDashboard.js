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

  //..when component unmounts the data must be cleared from redux
  componentWillUnmount(){
    this.props.deleteFunc();
  }

  render() {
    
    //..if data is not available fetchFromFirebase()
    if(!this.props.carousal){
      
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

//..takes state from redux and maps it to props
const mapStateToProps = (state) =>{
  return{
    carousal: state.dashboardReducer.carousal,
    wideCards: state.dashboardReducer.wideCards,
    cards: state.dashboardReducer.cards
  }
}

//..maps dispatch Functions to props
const mapDispatchToProps = (dispatch) => {

  return {
    deleteFunc: () => dispatch(deleteFunc()), //..when we will unmount, we will delete all the data from redux
    fetchFromFirebase: () => dispatch(fetchFromFirebase()) //..to fetch data from the firestore 
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard);
