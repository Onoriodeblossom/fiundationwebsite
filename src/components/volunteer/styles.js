import styled from "styled-components";
import One from "../../assets/one.png"

export const Container = styled.div`
display:flex;
width:100%;
flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "row"};


@media (max-width: 600px) {
    justify-content: center;
    align-items: center;
/* flex-direction: column; */
    flex-direction: ${(props)=>props.flexDirectionR ? props.flexDirectionR : "column"};
}



`
export const  ImageSection = styled.div`
width:55%;
background-image: url(${props => props.img ? props.img : One});
background-size:cover ;
background-repeat:no-repeat;
justify-content: center;
@media (max-width: 600px) {
height: 400px;
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}


`

export const WrightUp = styled.div`
width:40%;
justify-content: flex-start;
/* align-items: flex-end; */
display: flex;

@media (max-width: 600px) {
flex-direction: column;
width: 80%;

    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}

.link{
    text-decoration:none;
    color:${(props)=> props.color ? props.color : "white"};
font-size: ${(props)=>props.size ? props.size : "16px"};
font-weight: 500;
letter-spacing: 0em;
text-align: ${(props)=> props.align ? props.align : "center"};


    /* color:green */
}



`

export const  TextContainer = styled.div`
width:80%;
justify-content: flex-end;
@media (max-width: 600px) {
width: 100%;
}
`

export const Flex = styled.div`
width:100%;
display: flex;
`