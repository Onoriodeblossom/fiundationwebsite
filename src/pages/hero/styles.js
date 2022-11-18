import styled from "styled-components";
import image from "../../assets/1.png"

export const WrapperContainer = styled.div`
width:100%;
/* height: 480px; */
background-color: #fff;
background-size:cover ;
background-repeat:no-repeat;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-image:url(${image});

@media (max-width: 600px) {
    // display: none;
    width:100%;
}


`; 

export  const TextContainer = styled.div`
padding-top:20px;
padding-bottom:30px;

width:50%;
@media only screen and (max-width: 600px) {
    /* display: none; */
   width:90%
  
}

`

export const Flex = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: row;
padding-top:30px;
padding-bottom:30px;
width: ${(props)=>props.width ? props.width:"100%"};
@media (max-width: 600px) {

flex-direction: column;
// display: none;
// width: 60%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */

}


`

export const ContactUsContainer = styled.div`
background-color: white;
width: 80%;
justify-content: space-around;
align-items: center;
display: flex;
padding-top:60px;
padding-bottom:60px;
flex-direction:row;

@media only screen and (max-width: 600px) {
    // display: none;
    flex-direction: column;
  
}


`
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width: 600px) {
    width:100%;
    /* display: none; */
}
`

export const   ImpactStoryContainer = styled.div`
width: 80%;
justify-content: space-around;
align-items: center;
display: flex;
@media  (max-width: 600px) {

    width:80%;
  
}


`

export const ImpactStoryCard = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:20%;
@media  (max-width: 600px) {

    width: 100%;
    flexdirection:column-reverse
  
}

`

export const Image = styled.img`
height: 150px;
width:100%;


`