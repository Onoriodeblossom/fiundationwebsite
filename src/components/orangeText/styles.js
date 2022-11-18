import styled from "styled-components"

export const  OrangeHeaderText = styled.p`
font-size:${(props)=> props.size ? props.size :" 24px"};
font-weight: 800;
line-height: 0px;
letter-spacing: 0em;
opacity: 1;
/* padding-top: ${(props)=> props.top ? props.top : "20px"}; */
text-align: center;
color: #FFBD14;
padding-top:${(props)=> props.top ? props.top : "30px"};

@media (max-width: 600px) {

font-size:${(props)=> props.size ? props.size :" 24px"};
  
}

`