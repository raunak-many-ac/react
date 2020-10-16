import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { StyledNavItem, Svg } from "../Styles.js";
import {ThemeContext} from "../../../Theme";



export default class CaseStudyIcon extends Component {

        handleClick = () => {
                const { path, onItemClick } = this.props;
                onItemClick(path);
        }

        render() {
                const { active } = this.props;

                if(active){                
                        return(
                                <ThemeContext.Consumer>{(context) => {
                                        const {lightColor, darkColor} = context;
                                        
                                        return (
                
                                                <StyledNavItem active={active}>
                                                        <Link to={this.props.path} onClick={this.handleClick}>
                                                                <Svg id="Capa_1" enable-background="new 0 0 520 520" height="35" viewBox="0 0 520 520" width="35" xmlns="http://www.w3.org/2000/svg"><g>
                                                                        <path d="m481.734 100.063h-158.331l-43.111-70.397c-2.727-4.452-7.571-7.166-12.792-7.166h-119.235c-21.099 0-38.265 17.166-38.265 38.266v65.51 229.184c0 21.1 17.166 38.266 38.265 38.266h261.735 71.734c21.1 0 38.266-17.166 38.266-38.266v-217.13c0-21.101-17.166-38.267-38.266-38.267z" fill={darkColor} />
                                                                        <path d="m80 355.459v-229.184h-41.734c-21.1 0-38.266 17.166-38.266 38.266v294.693c0 21.1 17.166 38.266 38.266 38.266h333.469c21.1 0 38.266-17.166 38.266-38.266v-35.51h-261.736c-37.641.001-68.265-30.623-68.265-68.265z" fill= {lightColor}/></g></Svg>
                                                        </Link>
                                                </StyledNavItem>
                                        );
                                }}
                                </ThemeContext.Consumer>
                        );      
                }

                return(
                        <ThemeContext.Consumer>{(context) => {
                                const {inactiveColor} = context;                                
                                return (
        
                                        <StyledNavItem active={active}>
                                                <Link to={this.props.path} onClick={this.handleClick}>
                                                        <Svg id="Capa_1" enable-background="new 0 0 520 520" height="35" viewBox="0 0 520 520" width="35" xmlns="http://www.w3.org/2000/svg"><g>
                                                                <path d="m481.734 100.063h-158.331l-43.111-70.397c-2.727-4.452-7.571-7.166-12.792-7.166h-119.235c-21.099 0-38.265 17.166-38.265 38.266v65.51 229.184c0 21.1 17.166 38.266 38.265 38.266h261.735 71.734c21.1 0 38.266-17.166 38.266-38.266v-217.13c0-21.101-17.166-38.267-38.266-38.267z" fill={inactiveColor} />
                                                                <path d="m80 355.459v-229.184h-41.734c-21.1 0-38.266 17.166-38.266 38.266v294.693c0 21.1 17.166 38.266 38.266 38.266h333.469c21.1 0 38.266-17.166 38.266-38.266v-35.51h-261.736c-37.641.001-68.265-30.623-68.265-68.265z" fill= {inactiveColor}/></g></Svg>
                                                </Link>
                                        </StyledNavItem>
                                );
                        }}
                        </ThemeContext.Consumer>
                );  

                
        }


}
