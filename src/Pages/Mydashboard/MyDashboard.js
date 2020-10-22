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

//..firebase
import firebase from "../../firebase";

//..redux
import {connect} from "react-redux";

const apicheck = async () => {
  console.log("apicheck()...");

  var db = firebase.firestore();
  var docRef = db.collection("mydashboard").doc("data");

  docRef.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}


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

  render() {

    // apicheck();
    console.log(this.props);
    return (
      <Container>

        <Carousal />

        <HorizontalLine />

        <TabNav tabs={["Quick Concepts", "Articles", "News"]} selected={this.state.selected} setSelected={this.setSelected} >
          <Tab isSelected={this.state.selected === "Quick Concepts"}  >
            <QuickConceptsTab />
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
    carousal: state.carousal
  }
}

// export default connect(mapStateToProps)(MyDashboard);
export default MyDashboard;