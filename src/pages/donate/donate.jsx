import React,{ useState } from "react";
import { Container } from "../../components/Container/styles";
// import { Header } from "../../components/header/header";
import { P } from "../../components/p/p";
import Paypal  from "../../components/paypal/paypal";
import { DonateButton, Title, Width, WrapperContainer } from "./styles";

export const Donate= ()=>{
    const [donate, setDonate] = useState(false )
    return(
        <Container>
            {/* <Header/> */}
            <WrapperContainer>
                <Width>

                <Title>DONATE NOW</Title>
                <P>
                {/* Since 1870, Erie 
                Neighborhood House has
                 been a classroom, a second home,
                  and a community center for thousands 
                  of low-income and recent immigrant
                   families in Chicago. Your investment 
                   in Erie House supports a legacy of 
                   award-winning educational programming,
                    legal services and mental health programs 
                    for the whole family, from early childhood 
                    to adulthood. Our wraparound services ensure
                     lifelong success, keep
                      families together, 
                      and help communities thrive. */}
                </P>
{
    donate ? (
        <Paypal/>
    ) :(
                <DonateButton onClick={()=>{
                    setDonate(true)
                }}>
                    Donate

                </DonateButton>

    )
}

<Paystack/>
                </Width>



            </WrapperContainer>

            
        </Container>
    )
}