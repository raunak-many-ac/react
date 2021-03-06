import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import logo from "../../assets/download.png";
import { Logo, BrandName, StyledSideNav } from "./Styles.js";

import MyDashboardIcon from "./Icons/MyDashboardIcon";
import ContactUsIcon from "./Icons/ContactUsIcon";
import ThemeSelector from "./Icons/ThemeSelector/ThemeSelector";
import { ThemeContext } from "../../Theme";


class SideNav extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            activePath:  "/mydashboard",
            items: [
                {
                    path: "/mydashboard", /* path is used as id to check which NavItem is active basically */
                    name: "My Dashboard",
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: "/contactus",
                    name: "Contact Us",
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
        const { lightestColor, text_color } = this.context;

        return (
            <StyledSideNav color={lightestColor}>

                <Logo src={logo} />
                <BrandName color={text_color}> SBG.ai</BrandName>

                {
                    items.map((item) => {
                        if (item.name.localeCompare("My Dashboard") == 0)
                            return (<MyDashboardIcon
                                path={item.path}
                                name={item.name}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath || item.path === "/"}
                                key={item.key}
                            />);


                        if (item.name.localeCompare("Contact Us") == 0)
                            return (
                                <ContactUsIcon
                                    path={item.path}
                                    name={item.name}
                                    onItemClick={this.onItemClick}
                                    active={item.path === activePath}
                                    key={item.key}

                                />
                            );
                    })
                }

                <ThemeSelector />
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