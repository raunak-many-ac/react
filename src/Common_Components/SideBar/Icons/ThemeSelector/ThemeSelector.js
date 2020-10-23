import React from "react";

import { Red, Blue, Green, Purple, Container } from "./Styles";

import { ThemeContext } from "../../../../Theme";

export default class ThemeSelector extends React.Component {

        static contextType = ThemeContext;

        render() {
                const { lightestColor } = this.context;
                return (
                        <Container color={lightestColor}>

                                <Red onClick={this.redTheme} />
                                <Blue onClick={this.blueTheme} />
                                <Green onClick={this.greenTheme} />
                                <Purple onClick={this.purpleTheme} />

                        </Container>
                );
        }

        redTheme = () => {
                const { changeTheme } = this.context;
                changeTheme(
                        {
                                lightestColor: "#ffc8c8",
                                lightColor: "#FF6666",
                                darkColor: "#FF0000",
                                inactiveColor: "#A87D7D",
                                text_color: "#8b0000"
                        }
                )
        }

        blueTheme = () => {
                const { changeTheme } = this.context;
                changeTheme(
                        {
                                lightestColor: "#ECECFF",
                                lightColor: "#6272d5",
                                darkColor: "#3448c5",
                                inactiveColor: "#9fbfdf",
                                text_color: "#0f0552"

                        }
                )
        }

        greenTheme = () => {
                const { changeTheme } = this.context;

                changeTheme(
                        {
                                lightestColor: "#c4fde8",
                                lightColor: "#049761",
                                darkColor: "#024b30",
                                inactiveColor: "#8AC094",
                                text_color: "#013220"

                        }
                )
        }

        purpleTheme = () => {
                const { changeTheme } = this.context;

                changeTheme(
                        {
                                lightestColor: "#D9C3D5",
                                lightColor: "#A16C99",
                                darkColor: "#6C1960",
                                inactiveColor: "#aca1b4",
                                text_color: "#340034"
                        }
                )
        }


}



//..blue red green purple
