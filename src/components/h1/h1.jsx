import React from "react";
import { HeaderText } from "./styles";
// import 

export const H1 = ({children,align}) =>{
    return(
        <HeaderText align={align}>
            {children}
        
        </HeaderText>
    )
}