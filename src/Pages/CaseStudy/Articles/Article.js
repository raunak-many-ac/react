import React from 'react';
import { ThemeContext } from "../../../Theme";
import { SmoothScroller, StyledSection, StyledTabContainer, StyledTab, A, HighLightLine, HorizontalLine, P } from "./Styles";
import { LoaderContainer, loaderCss, VideoPlayerContainer } from "./Styles";
import { RiseLoader } from "react-spinners";

import ReactPlayer from 'react-player/youtube'


//..converts array of paragraphs to <p> elements
const Paragraph = (props) => {
     return (
          <div>
               {
                    props.paragraphs.map((paragraph =>
                         <P>{paragraph}</P>
                    ))

               }
          </div>
     )
}

export default class Article extends React.Component {

     static contextType = ThemeContext;

     state = {
          currentTab: "About"
     }

     selectTab = (e) => {
          console.log(e);
          this.setState(
               {
                    currentTab: e
               }
          )
     }

     render() {
          const { darkColor } = this.context;

          //..if there is no data passed show loading spinner
          if (!this.props.article) {
               return (
                    <LoaderContainer>
                         <RiseLoader css={loaderCss} size={20} color={darkColor} loading />
                    </LoaderContainer>
               );
          }

          const { article } = this.props;

          return (
               <SmoothScroller>



                    <StyledTabContainer>
                         {
                              article.map((paragraph => {

                                   return (
                                        <StyledTab>
                                             <A href={"#" + paragraph.tabname} onClick={() => this.selectTab(paragraph.tabname)}>{paragraph.tabname}</A>
                                             <HighLightLine color={darkColor} visible={this.state.currentTab.localeCompare(paragraph.tabname) == 0} />
                                        </StyledTab>
                                   )
                              }))
                         }

                    </StyledTabContainer>

                    <HorizontalLine />

                    <VideoPlayerContainer>
                         <StyledSection>
                              <ReactPlayer url= {this.props.url} width="100%" />
                         </StyledSection>
                    </VideoPlayerContainer>

                    {
                         article.map((tab => {
                              return (
                                   <StyledSection id={tab.tabname}>
                                        <h2>{tab.title}</h2>
                                        <Paragraph paragraphs={tab.paragraphs} />
                                   </StyledSection>
                              )
                         }))
                    }

               </SmoothScroller>
          )
     }


} 

//.C:\Program Files\nodejs
