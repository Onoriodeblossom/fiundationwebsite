import React from "react";
import { Container, Flex, ImageSection, TextContainer, WrightUp } from "./styles";
// import One from "../../assets/one.png"
import { H1 } from "../h1/h1";
import { P } from "../p/p";
import { Button } from "../button/button";
import  Emoji1  from '../../assets/emoji.png'
import  Emoji2  from '../../assets/emoji2.png'
import {
   
    Link,
  } from "react-router-dom";
// import { Donate } from "../../pages/donate/donate";

export const Volunteer = ({background,text,flexDirection,h1,text2,to}) =>{
    return(
        <Container flexDirection={flexDirection} flexDirectionR={"column"}>
            <ImageSection img={background}>

            </ImageSection>
            <WrightUp>
                <TextContainer>
                    <H1>{h1}</H1>
                    <P color="#515151">{text}</P>
                    <P color="#515151">{text2}</P>
                    <Flex>
                    <Button>

                <Link className="link" to={to} color="color">

                        see more
                </Link>
                    </Button>
                    <Button backgroundColor="white" color="#FFBD14" to={to}>

                <Link className="link" to={to} color="color">

                        Volunteer
                </Link>
                        
                    
                    </Button>

                    {/* <Flex> */}
                        <img src={Emoji1} alt="nnnnnn" width={"24px"}/>
                        <P size={"12px"}>Meet Osi</P>
                        <img src={Emoji2} alt="jjj"/>
                        <P size="12px">Meet Blossom</P>

                    {/* </Flex> */}

                    </Flex>


   
                </TextContainer>
            </WrightUp>
        </Container>
    )
}