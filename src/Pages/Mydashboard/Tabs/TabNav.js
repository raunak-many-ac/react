import React from 'react';

import { StyledTabContainer, ActiveTab, InactiveTab } from "./TabStyles";




class TabNav extends React.Component {
        render() {
                return (
                        <div >
                                <StyledTabContainer>
                                        {
                                                this.props.tabs.map(tab => {
                                                        if (tab === this.props.selected) {
                                                                return (
                                                                        <ActiveTab key={tab} onClick={() => this.props.setSelected(tab)} margin={tab !== "Quick Concepts" ? "1%" : "0%"}>

                                                                                {tab}

                                                                        </ActiveTab>
                                                                );
                                                        }


                                                        return (
                                                                <InactiveTab key={tab} onClick={() => this.props.setSelected(tab)} margin={tab !== "Quick Concepts" ? "1%" : "0%"}>

                                                                        {tab}

                                                                </InactiveTab>
                                                        );
                                                })
                                        }
                                </StyledTabContainer>
                                { this.props.children}
                        </div>
                );
        }
}



export default TabNav;