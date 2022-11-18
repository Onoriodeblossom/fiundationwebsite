import styled from "styled-components";


export const Container = styled.div`
width:100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-color: black;


@media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
};

@media (max-width: 900px) {
flex-direction: column;
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}
`

export const SearchContainer = styled.div`
 background: linear-gradient(90deg, #F0E796 0%, #FFBD14 100%);
;
width:100%;
display: flex;
flex-direction: row;
padding-top:30px;
padding-bottom:20px;
align-items: center;
justify-content: space-around;
@media (max-width: 600px) {
flex-direction: column;
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}


`
export const SearchButton = styled.button`
background-color:black;
width:90px;
height: 32px;
border-radius: 40px;
border:0;
justify-content: center;
align-items: center;
display: flex;

`
export const SearchInputContainer = styled.div`
background-color:white;
width:max-content;
justify-content:center;

align-items:center;
display:flex;
height: 35px;
border-radius:30px

`

export const SearchInput = styled.input`
background-color: white;
width:280px;
margin-left:10px;
height:32px;
border-bottom-left-radius:30px;
border-top-left-radius:30px;
border:0px ;
@media (max-width: 600px) {
flex-direction: column;
width: 100%;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}


`

export const FooterContainer = styled.div`
width:80%;
background-color:black;
padding-top:40px;
padding-right:40px;
`
export const Flex = styled.div`
display:flex;
width:${(props)=> props.width ? props.width :"100%"};
flex-direction: ${(props)=> props.flexDirection ? props.flexDirection :"row"};
justify-content: ${(props)=> props.justifyContent ? props.justifyContent :"space-between"};
align-items: flex-start;

@media (max-width: 600px) {
flex-direction: column;
width: 100%;
align-items: center;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}

`
export const Name = styled.div`
font-size: 18px;
font-weight: 800;
text-align: left;
color:#515151;

@media (max-width: 600px) {
    text-align: center;
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */
}




`