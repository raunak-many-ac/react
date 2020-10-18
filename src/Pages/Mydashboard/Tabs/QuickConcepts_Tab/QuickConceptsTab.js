import React from 'react';
import background from "../../../../assets/image_card_ml.svg";
import { WideCardContainer, WideCard, WideCardBackground, TextContainer, FeatureText, CardTitle } from "./Styles";

class QuickConceptsTab extends React.Component {
     render() {

          return (
               <div>
                    <WideCardContainer>
                         <WideCard margin="0%" src={background} >
                              {/* <WideCardBackground src={background} /> */}
                              {/* <TextContainer>
                                   <FeatureText>Quick Learn</FeatureText>
                                   <CardTitle>shvbksbvkjsbkjsbdvkj</CardTitle>
                              </TextContainer> */}
                         </WideCard>

                         <WideCard margin="5%" src={background}>
                              {/* <WideCardBackground src={background} /> */}
                              {/* <TextContainer>
                                   <FeatureText>Quick Learn</FeatureText> 
                                   <CardTitle>shvbksbvkjsbkjsbdvkj</CardTitle>
                              </TextContainer> */}
                         </WideCard>
                    </WideCardContainer>
               </div>
          );

     }
}

export default QuickConceptsTab;