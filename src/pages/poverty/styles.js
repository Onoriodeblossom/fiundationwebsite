import styled from "styled-components";
import One from "../../assets/one.png"

export const WrapperContainer = styled.div`
    width:70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;

    @media (max-width: 600px) {
    width:100%;
};
/* @media (max-width: 900px) {
flex-direction: column;
width: 100%;
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"};
} */

    
`


export const  ImageSection = styled.div`
width:100%;
background-image: url(${props => props.img ? props.img : One});
background-size:cover ;
height: 70vh;
background-repeat:no-repeat;
justify-content: center;
@media (max-width: 600px) {
/* height: 400px; */
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */

}
`

export const Flex = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: row;
width: ${(props)=>props.width ? props.width:"100%"};
@media (max-width: 600px) {

flex-direction: column;
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */

}
`

export const TextContainer =styled.div`
width:100%;

ol{
    padding: 20px;
    justify-content: space-between;

    li{
        color:#515151;
        margin-top:10px
    }
}

@media (max-width: 600px) {
/* height: 400px; */
width: 80%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */

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

    width: 80%;
    flex-direction:column-reverse
  
}

`

export const Image = styled.img`
height: 150px;
width:100%;


`

export const Next = styled.div`
justify-content:space-between;
align-items: center;
display: flex;
padding-top:40px;
padding-bottom:40px;
text-decoration:none;
width: 90%;

flex-direction: row;
@media  (max-width: 600px) {
    flex-direction: column;
    /* display: none; */
  
}

`
export const Icon = styled.div`
justify-content:space-between;
align-items: center;
display: flex;
`