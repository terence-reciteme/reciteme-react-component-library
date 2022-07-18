import React from "react";

export interface ILogoProps {
    width?: string;
}

const Logo = ({
    width,
}: ILogoProps): JSX.Element => {

    return (
        <img src="./images/recite_me_logo_red.svg" alt="logo" width={width}/>
        );
        
}

export default Logo;