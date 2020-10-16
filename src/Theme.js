import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {

        //..blue theme
        state = {
                lightestColor: "#ECECFF",
                lightColor: "#6272d5",
                darkColor: "#3448c5",
                inactiveColor: "#9fbfdf"
        };

        //..red theme
        // state = {
        //         lightestColor: "#ffc8c8",
        //         lightColor: "#FF6666",
        //         darkColor: "#FF0000",
        //         inactiveColor: "#A87D7D"
        // };

        render() {
                return (
                        <ThemeContext.Provider value={{ ...this.state }}>
                                {this.props.children}
                        </ThemeContext.Provider>
                );
        }
}