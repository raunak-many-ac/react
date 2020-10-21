import React from 'react';
import {ThemeContext} from "../../../Theme";
import { SmoothScroller, StyledSection, StyledTabContainer, StyledTab, A, HighLightLine, HorizontalLine } from "./Styles";

const AboutTheProject = (props) => {
     return(
          <div>
               <h2>About the Project</h2>

               <p>Azure Container Registry is a private registry for hosting container images. Using the Azure Container Registry, you can store Docker-formatted images for all types of container deployments.</p>
               <p>Azure Container Registry integrates well with orchestrators hosted in Azure Container Service, including Docker Swarm, DC/OS, and Kubernetes.Azure Container Registry is a private registry for hosting container images. Using the Azure Container Registry, you can store Docker-formatted images for all types of container deployments.</p>
               <h6>For more info:</h6>
               <p>Azure Container Registry integrates well with orchestrators hosted in Azure Container Service, including Docker Swarm, DC/OS, and Kubernetes.</p>
          </div>
     );
}

const ScopeAndOutcome = (props) => {
     return(
          <div>
               <h2>Scope & Outcome</h2>
               <p>The basic approach to fraud detection with an analytic model is to identify possible predictors of fraud associated with known fraudsters and their actions in the past. The basic approach to fraud detection with an analytic model is to identify possible predictors of fraud associated with known fraudsters and their actions in the past</p>

          </div>
     );
}

const TeamsText = (props) => {
     return(
          <div>
               <h2>Teams and stakeholders</h2>
               <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
     )

}

export default class Article extends React.Component {

     static contextType = ThemeContext;

     state = {
          currentTab: "About"
     }

     selectAboutTab = (e) =>{
          this.setState(
               {
                    currentTab: "About"
               }
          )
     }


     selectScopeTab = (e) =>{
          this.setState(
               {
                    currentTab: "Scope"
               }
          )
     }

     selectTeamTab = (e) =>{
          this.setState(
               {
                    currentTab: "Team"
               }
          )
     }

     selectToolkitsTab = (e) =>{
          this.setState(
               {
                    currentTab: "Toolkits"
               }
          )
     }


     render() {
        const {darkColor} = this.context;
        
          return (
               <SmoothScroller>

                    <StyledTabContainer>
                         <StyledTab>
                              <A href="#About" onClick = {this.selectAboutTab}>About</A>
                              <HighLightLine color={darkColor} visible={this.state.currentTab.localeCompare("About") == 0}/>
                         </StyledTab>
                         <StyledTab>
                              <A href="#scope" onClick = {this.selectScopeTab}>Scope and Outcome</A>
                              <HighLightLine color={darkColor} visible={this.state.currentTab.localeCompare("Scope") == 0} />
                         </StyledTab>
                         <StyledTab>
                              <A href="#Team" onClick = {this.selectTeamTab}>Team and support</A>
                              <HighLightLine color={darkColor} visible={this.state.currentTab.localeCompare("Team") == 0}/>
                         </StyledTab>
                         <StyledTab>
                              <A href="#Toolkits" onClick = {this.selectToolkitsTab}>Toolkits</A>
                              <HighLightLine color={darkColor} visible={this.state.currentTab.localeCompare("Toolkits") == 0}/>
                         </StyledTab>
                    </StyledTabContainer>

                    <HorizontalLine/>

                    <StyledSection id="About">
                         <AboutTheProject/>
                    </StyledSection>

                    <StyledSection id="scope">
                         <ScopeAndOutcome/>
                    </StyledSection>

                    <StyledSection id="Team">
                         <TeamsText></TeamsText>
                    </StyledSection>
                    
                    <StyledSection id="Toolkits">Toolkits blah...blah....</StyledSection>

               </SmoothScroller>
          )
     }

     
} 