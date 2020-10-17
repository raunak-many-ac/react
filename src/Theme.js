import React, { Component, createContext } from 'react';


export const ThemeContext = createContext();

export default class ThemeProvider extends Component {

        //..blue theme
        state = {
                lightestColor: "#ECECFF",
                lightColor: "#6272d5",
                darkColor: "#3448c5",
                inactiveColor: "#9fbfdf",
                text_color: "#0f0552"
        };

        changeTheme = (newstate) =>{
                this.setState(
                        {
                                ...newstate
                        }
                );
        }

        render() {
                return (
                        <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                                {this.props.children}
                        </ThemeContext.Provider>
                );
        }
}