import  React from "react"
import { Button } from "../../components/button/button"
import { Container } from "../../components/Container/styles"
import { H1 } from "../../components/h1/h1"
import { P } from "../../components/p/p"
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import {BiArrowBack} from "react-icons/bi"

import {
  Link,
} from "react-router-dom";
import { Flex, Icon, Image, ImageSection, ImpactStoryCard, Next, TextContainer, WrapperContainer } from "./styles"
import { OrangeHeaderText } from "../../components/orangeText/styles"
import { Footer } from "../../components/footer/footer"
// import { Header } from "../../components/header/header"


const   Education = () =>{
    const impactStory =[
        {
          img: Two,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
        },
        {
          img: Three,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
        },
        {
          img: Four,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet, ",
        },
      ]
    

    return(
        <Container>
            {/* <Header/> */}
            <WrapperContainer>
                
                <ImageSection>

                </ImageSection>
                <Flex>
                    <H1 align={"left"}>Encourage Education, skills <br/>Acquisition and Trade</H1>

                    <Flex width="20%">
                        <Button to="/donate">
                            Donate
                        </Button>
                        <Button backgroundColor={"white"} color="#FFBD14">Voluteer</Button>
                    </Flex>
                </Flex>
                <TextContainer>
                    <P align={"start"} color="#515151">
                    Millions of children, teens, 
                    and young adults are currently
                     out of schools, and million 
                     others have zero access to
                      skills acquisition centers 
                      due to extreme poverty. 
                      Hearts blistering with passion for 
                      knowledge and ability to make a 
                      difference in our world have had their 
                      hope brought to a halt, mainly due to 
                      inability to meet up with 
                    the financial requirement to nurture their dreams.
                    </P>
                    <P align={"start"} color="#515151">
                    At Nagbeni foundation,
                     we are on a mission to 
                     save these dreams, and to 
                    build a bridge of knowledge and competence by:
                    </P>
                    <ol>
            <li> Sponsoring education</li>

            <li>

    Sponsoring skills acquisition
            </li>
            <li>

    Sponsoring intelligent initiatives and
            </li>
            <li>

    Supporting trades
            </li>
            
          </ol>
          <P color="#515151">
          It is our conviction that everyone has the ability to make a difference if given the opportunity.
Get involved in the best way you can.
          </P>
          <ol>
          <li> Sponsoring education</li>

<li>

Sponsoring skills acquisition
</li>
<li>

Sponsoring intelligent initiatives and
</li>
<li>

Supporting trades
</li>

</ol>

                </TextContainer>
                    <OrangeHeaderText>Our Impact stories</OrangeHeaderText>
                <Flex>
                    {/* <br/> */}

                {
            impactStory.map(({img,text,title})=>(

          <ImpactStoryCard>

          <Image src={img}/>
          <div>

          <OrangeHeaderText size="18px">
            {title}
          </OrangeHeaderText>
          <P align={"start"} color="#515151">{text}</P>
          </div>
          </ImpactStoryCard>
            ))
          }
                </Flex>

            </WrapperContainer>
            <Next>
                <Icon>
                    <BiArrowBack/>
                    <P color="black">Back</P>
                </Icon>

                  <Link to="/community">
                <OrangeHeaderText size="18px">

                Next - Community Development Project
                </OrangeHeaderText>
                  </Link>
            </Next>
                <Footer/>
        </Container>

    )
}

export default Education