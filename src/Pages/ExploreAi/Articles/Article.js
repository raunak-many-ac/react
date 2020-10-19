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
        console.log(darkColor);
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
                    <StyledSection id="Team">Teams and stakeholders blah...blah....</StyledSection>
                    <StyledSection id="Toolkits">Toolkits blah...blah....</StyledSection>

               </SmoothScroller>
          )
     }

     
} 