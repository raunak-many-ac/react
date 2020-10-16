import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import logo from "../../assets/download.png";
import { Logo, BrandName, StyledSideNav } from "./Styles.js";

import MyDashboardIcon from "./Icons/MyDashboardIcon";
import ContactUsIcon from './Icons/ContactUsIcon';
import CaseStudyIcon from './Icons/CaseStudyIcon';



class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/mydashboard', /* path is used as id to check which NavItem is active basically */
                    name: "My Dashboard",
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/exploreai',
                    name: 'Case Study',
                    css: 'fa fa-fw fa-clock',
                    key: 2
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    css: 'fas fa-hashtag',
                    key: 3
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>

                <Logo src={logo} height="65px" width="50px" />
                <BrandName> SBG.ai</BrandName>

                {
                    items.map((item) => {
                        if (item.name.localeCompare("My Dashboard") == 0)
                            return (<MyDashboardIcon
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />);

                        if(item.name.localeCompare("Case Study") == 0 )    
                            return (
                                <CaseStudyIcon
                                    path={item.path}
                                    name={item.name}
                                    css={item.css}
                                    onItemClick={this.onItemClick}
                                    active={item.path === activePath}
                                    key={item.key}
                                />
                            );

                        if(item.name.localeCompare("NoMatch") == 0 )    
                            return (
                                <ContactUsIcon
                                    path={item.path}
                                    name={item.name}
                                    css={item.css}
                                    onItemClick={this.onItemClick}
                                    active={item.path === activePath}
                                    key={item.key}
                                    
                                />
                            );        
                    })
                }

            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);


export default class SideBar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}