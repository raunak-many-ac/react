import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import logo from "../../assets/download.png";
import side_icon_store from "../../assets/side_icon_store.png";
import side_icon_files from "../../assets/side_icon_files.png";
import side_icon_contact from "../../assets/side_icon_contact.png";
import {Icon, Logo, BrandName, StyledNavItem, StyledSideNav} from "./Styles.js";



class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/mydashboard', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    src: side_icon_store,
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/exploreai',
                    name: 'About',
                    css: 'fa fa-fw fa-clock',
                    src: side_icon_files,
                    key: 2
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    css: 'fas fa-hashtag',
                    src: side_icon_contact,
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
                        return (
                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                                src={item.src}
                            />
                        );
                    })
                }

            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to = {this.props.path} onClick = {this.handleClick}>
                    <Icon src= {this.props.src} height="50px" width="50px" />
                </Link>
            </StyledNavItem>
        );
    }
}



export default class SideBar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}