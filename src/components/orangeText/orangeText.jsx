import React from "react";
import { OrangeHeaderText } from "./styles";

export const OrangeText = ({children,size, top}) =>{
    return(
        <OrangeHeaderText size={size} top={top} >
            {children}
        </OrangeHeaderText>
    )
}