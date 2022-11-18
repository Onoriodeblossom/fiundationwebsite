import styled from "styled-components";
import image from "../../assets/10.png"

export const  WrapperContainer = styled.div`
background-image: url(${image});
height:80vh;
justify-content: center;
display: flex;
align-items: center;
/* padding-left:30px; */
/* padding-right:30px; */
width:100%;
`

export const  Width = styled.div`
width:80%;
justify-content: center;
align-items: center;
`

export const Title = styled.p`
color:white;
font-size: 30px;
font-weight: 800;
line-height: 52px;
letter-spacing: 0em;
text-align: left;


`


export const DonateButton = styled.button`
width:200px;
height: max-content;
padding:15px;
align-self:center;
background-color: #ffbd14;
border:0 
`