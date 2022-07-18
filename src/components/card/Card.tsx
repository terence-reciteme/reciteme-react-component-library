import React from "react";
import { CardMedia, CardContent } from "@mui/material";
import { StyledCard, StyledButton, StyledDivider } from "./Card.styles"
import TypographyText from "../typography";

export interface ICardProps {
    id?: string;
    cardTitle: string;
    cardText: string;
    image: string;
    alt: string;
    buttonText: string;
    height?: string;
    fontFamily?: string;
}

const Card = ({
    id,
    cardTitle,
    cardText,
    image,
    alt,
    buttonText,
    height = "140",
    fontFamily = "./fonts/Lexend"
}:ICardProps): JSX.Element => {
    
    return (
        <StyledCard id={id} >
                <CardMedia component="img" image={image} alt={alt} height={height}/>
                <CardContent>
                    <TypographyText h2={cardTitle} />
                    <TypographyText paragraph={cardText} />
                    <StyledDivider />
                    <StyledButton buttonVariant="red" width="140px">{buttonText}</StyledButton>
                </CardContent>
        </StyledCard>
    )
};

export default Card;