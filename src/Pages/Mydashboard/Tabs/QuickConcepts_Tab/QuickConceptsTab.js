import React from 'react';
import background from "../../../../assets/image_card_ml.svg";
import { WideCardContainer, WideCard, WideCardBackground, FeatureText } from "./Styles";

class QuickConceptsTab extends React.Component {
     render() {

          return (
               <div>
                    <WideCardContainer>
                         <WideCard margin = "0%" image = {background}>
                              {/* <WideCardBackground src = {background}/> */}
                              <FeatureText>Quick Learn</FeatureText>
                         </WideCard>

                         <WideCard margin = "5%" image = {background}>
                              <WideCardBackground src = {background}/>
                              <FeatureText>Quick Learn</FeatureText>
                         </WideCard>
                    </WideCardContainer>
               </div>
          );

     }
}

export default QuickConceptsTab;