import React from 'react';

import { Container } from "./Styles";
import Carousal from "./Carousal/Carousal";
import TabNav from "./Tabs/TabNav";
import Tab from "./Tabs/Tab";
import QuickConceptsTab from "./Tabs/QuickConcepts_Tab/QuickConceptsTab";
import ArticlesTab from "./Tabs/Articles_Tab/ArticlesTab";
import NewsTab from "./Tabs/News_Tab/NewsTab";


export default class MyDashboard extends React.Component {

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


    return (
      <Container>

        <Carousal/>
          
        <hr/>

        <TabNav tabs={["Quick Concepts", "Articles", "News"]} selected={ this.state.selected } setSelected={ this.setSelected } >
          <Tab isSelected={ this.state.selected === "Quick Concepts"}  >
            <QuickConceptsTab/>
          </Tab>
          <Tab isSelected={ this.state.selected === "Articles" } >
            <ArticlesTab/>
          </Tab>
          <Tab isSelected={ this.state.selected === "News" } >
            <NewsTab/>
          </Tab>
        </TabNav>
        
      </Container>

    )
  }
} 