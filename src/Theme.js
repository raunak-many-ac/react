import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
        state = {
                lightColor: "#ECECFF",
                darkColor: "#3448c5"
        };

        // state = {
        //         lightColor: "#FF6666",
        //         darkColor: "#FF0000"
        // };

        render() {
                return (
                        <ThemeContext.Provider value={{ ...this.state }}>
                                {this.props.children}
                        </ThemeContext.Provider>
                );
        }
}