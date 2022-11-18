import styled from "styled-components"

export const  HeaderText = styled.h1`
font-size: 40px;
font-weight: 800;
line-height: 52px;
letter-spacing: 0em;
text-align:${(props)=> props.align ? props.align :"right"} ;
color:#515151;
@media(max-width: 600px) {
    text-align: center;
}

`