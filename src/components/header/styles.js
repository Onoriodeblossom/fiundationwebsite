import styled from "styled-components";



export  const Container = styled.div`
background-color: #fff;
display: flex;
width:100%;
border:0px solid;
border-bottom-width: 0.9px ;
border-color:#F2F2F2;
flex-direction: row;
justify-content: center;
align-items: center;
@media(max-width: 600px) {
   border-bottom-width: 0px;
}

`

export  const HeaderContainer = styled.div`
background-color: #fff;
display: flex;
width:90%;
flex-direction: row;
justify-content: space-between;

@media(max-width: 600px) {
    width:100%;
    flex-direction: column;
}


`
export const  Logo = styled.img`
width:100px;
height: 50px;

`

export const LinkContainer = styled.div`

width:40%;
align-items: center;
display: flex;
flex-direction: row;
justify-content:space-between;
@media(max-width: 600px) {
   border-bottom-width: 0px;
   width:100%;
   flex-direction: column;
}
`

export const Link = styled.a`
text-decoration:none;
color:#515151;
font-size: 18px;

`