import React from "react";
import styled from "styled-components";
import { P } from "../p/p";
import {
   
  Link,
} from "react-router-dom";

export const ImageCard = ({src,text,to}) => {
  return (
    <Container to={to}>
      <ImageContainer  src={src}/>
      <TextContainer>
        <P>{text}</P>
      </TextContainer>
    </Container>
  );
};

const Container = styled(Link)`
  width: 23%;
  margin-left:2px;
  margin-bottom:20px;
  background-color: #3F3C39;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    width:100%
}


`;

const ImageContainer = styled.img`
  width: 100%;
  background-color: #b6a1a1;
  height: 180px;
`;
const TextContainer = styled.div``;
// const Text = styled.div``;
