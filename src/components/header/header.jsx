import React from "react";
import { Container, HeaderContainer, Link, LinkContainer, Logo } from "./styles";
import logo from "../../assets/logo.png"
import { Button } from "../button/button";

export   const Header = () =>{
    return(
        <Container>

        <HeaderContainer>
            <Logo src={logo}/>


            <LinkContainer>
        
              <Link href={`contacts/1`}>About Us</Link>

              <Link href={`contacts/1`}>Partner with Us</Link>
            
              <Link href={""}>Contact us</Link>
            
            <Button to="/donate">Donate</Button>
            
          </LinkContainer>



        </HeaderContainer>
        </Container>
    )
}

