import React from "react";
import { P } from "../p/p";
import logo from "../../assets/logo.png"
import { Container, Flex, FooterContainer, Name, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles";

export const Footer = () =>{
    return(
        <Container>
            <SearchContainer>
                <P>Subscribe to stay tuned for Newsletter! </P>
                <SearchInputContainer>

                <SearchInput placeholder="Enter your email address"/>
                <SearchButton>
                    <P size={"16px"}>Subscribe</P>
                </SearchButton>
                </SearchInputContainer>

            </SearchContainer>

            <FooterContainer>
                <Flex>
                    <Flex flexDirection="column" width="16%" justifyContent={"center"}>

                    <img src={logo} alt="nnx"/>
                    <Name  >Nicholas Akinwale Agbeni Foundation</Name>
                    <P align={"center"}>A Non-Profit Organization set up with a 
                        mission to meet humanitarian needs in the best way as it can.</P>
                    </Flex>

                    <Flex flexDirection="column" width="14%" justifyContent={"center"}>
                        <Name>Product</Name>

<P>Landing Page</P>
<P>content</P>
<P>Content web design</P>
</Flex>





                    <Flex flexDirection="column" width="10%" justifyContent="center">

<Name>Resourse</Name>

<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>

<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>
</Flex>

<Flex flexDirection="column" width="10%" justifyContent={"center"}>

<Name>Company</Name>

<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>

<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>
</Flex>
<Flex flexDirection="column" width="10%" justifyContent={"center"}>

<Name>Contact Us</Name>

<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>
<P align={"start"}>Landing Page</P>
<P align={"start"}>content</P>
<P align={"start"}>Content web design</P>
</Flex>
                </Flex>


            </FooterContainer>
        </Container>
    )
}