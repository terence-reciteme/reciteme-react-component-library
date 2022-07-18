import React from "react";
import StyledTypography from "./TypographyStyles";

export interface ITypographyProps {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    paragraph?: string;
}

const TypographyText = ({
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    paragraph,
}: ITypographyProps): JSX.Element => {

    return (
        <>
            <StyledTypography variant="h1" fontSize={"3em"} fontWeight={"500"} >{h1}</StyledTypography>
            <StyledTypography variant="h2" fontSize={"1.5em"} fontWeight={"500"} >{h2}</StyledTypography>
            <StyledTypography variant="h3" fontSize={"1.3em"} fontWeight={"500"} >{h3}</StyledTypography>
            <StyledTypography variant="h4" fontSize={"1.25em"} fontWeight={"700"} >{h4}</StyledTypography>
            <StyledTypography variant="h5" fontSize={"1.125em"} fontWeight={"700"} >{h5}</StyledTypography>
            <StyledTypography variant="h6" fontSize={"1em"} fontWeight={"700"} >{h6}</StyledTypography>
            <StyledTypography paragraph fontSize={"1rem"} fontWeight={"300"} >{paragraph}</StyledTypography>
        </>
    );

}

export default TypographyText;
