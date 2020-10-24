import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {StyledNavItem, Svg} from "../Styles.js";
import {ThemeContext} from "../../../Theme";



export default class MyDashboardIcon extends Component {

        handleClick = () => {
                const { path, onItemClick } = this.props;
                onItemClick(path);
        }

        render() {
                const { active } = this.props;

                if(active){
                        return (

                                <ThemeContext.Consumer>{(context) => {
                                        const {lightColor, darkColor} = context;
                                        return(
                                                
        
                                        <StyledNavItem active={active}>
                                                <Link to={this.props.path} onClick={this.handleClick}>
                                                        <Svg height="20pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m197.332031 0h-160c-20.585937 0-37.332031 16.746094-37.332031 37.332031v96c0 20.589844 16.746094 37.335938 37.332031 37.335938h160c20.589844 0 37.335938-16.746094 37.335938-37.335938v-96c0-20.585937-16.746094-37.332031-37.335938-37.332031zm0 0" fill={lightColor} />
                                                                <path d="m197.332031 213.332031h-160c-20.585937 0-37.332031 16.746094-37.332031 37.335938v224c0 20.585937 16.746094 37.332031 37.332031 37.332031h160c20.589844 0 37.335938-16.746094 37.335938-37.332031v-224c0-20.589844-16.746094-37.335938-37.335938-37.335938zm0 0" fill={darkColor} />
                                                                <path d="m474.667969 341.332031h-160c-20.589844 0-37.335938 16.746094-37.335938 37.335938v96c0 20.585937 16.746094 37.332031 37.335938 37.332031h160c20.585937 0 37.332031-16.746094 37.332031-37.332031v-96c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0" fill={lightColor} />
                                                                <path d="m474.667969 0h-160c-20.589844 0-37.335938 16.746094-37.335938 37.332031v224c0 20.589844 16.746094 37.335938 37.335938 37.335938h160c20.585937 0 37.332031-16.746094 37.332031-37.335938v-224c0-20.585937-16.746094-37.332031-37.332031-37.332031zm0 0" fill={darkColor} /></Svg>
        
                                                </Link>
                                        </StyledNavItem>
                                        
                                        );
                                }}</ThemeContext.Consumer>
                                        
                        );
                }

                return (

                        <ThemeContext.Consumer>{(context) => {
                                const {inactiveColor} = context;                                
                                
                                return(
                                        

                                <StyledNavItem active={active}>
                                        <Link to={this.props.path} onClick={this.handleClick}>
                                                <Svg height="20pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m197.332031 0h-160c-20.585937 0-37.332031 16.746094-37.332031 37.332031v96c0 20.589844 16.746094 37.335938 37.332031 37.335938h160c20.589844 0 37.335938-16.746094 37.335938-37.335938v-96c0-20.585937-16.746094-37.332031-37.335938-37.332031zm0 0" fill={inactiveColor} />
                                                        <path d="m197.332031 213.332031h-160c-20.585937 0-37.332031 16.746094-37.332031 37.335938v224c0 20.585937 16.746094 37.332031 37.332031 37.332031h160c20.589844 0 37.335938-16.746094 37.335938-37.332031v-224c0-20.589844-16.746094-37.335938-37.335938-37.335938zm0 0" fill={inactiveColor} />
                                                        <path d="m474.667969 341.332031h-160c-20.589844 0-37.335938 16.746094-37.335938 37.335938v96c0 20.585937 16.746094 37.332031 37.335938 37.332031h160c20.585937 0 37.332031-16.746094 37.332031-37.332031v-96c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0" fill={inactiveColor} />
                                                        <path d="m474.667969 0h-160c-20.589844 0-37.335938 16.746094-37.335938 37.332031v224c0 20.589844 16.746094 37.335938 37.335938 37.335938h160c20.585937 0 37.332031-16.746094 37.332031-37.335938v-224c0-20.585937-16.746094-37.332031-37.332031-37.332031zm0 0" fill={inactiveColor} /></Svg>

                                        </Link>
                                </StyledNavItem>
                                );
                        }}</ThemeContext.Consumer>
                                
                );
        }
}