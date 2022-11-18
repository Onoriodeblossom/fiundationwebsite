import  React from "react"
import { Button } from "../../components/button/button"
import { Container } from "../../components/Container/styles"
import { H1 } from "../../components/h1/h1"
import { P } from "../../components/p/p"
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import {BiArrowBack} from "react-icons/bi"
import { Flex, Icon, Image, ImageSection, ImpactStoryCard, Next, TextContainer, WrapperContainer } from "./styles"
import { OrangeHeaderText } from "../../components/orangeText/styles"
import { Footer } from "../../components/footer/footer"
// import { Header } from "../../components/header/header"

import {
  Link,
} from "react-router-dom";


const ElderCare = () =>{
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
                    <H1 align={"left"}>Compassion for the Elderly  <br/>and Care for the Lonely</H1>

                    <Flex width="20%">
                        <Button to="/donate">
                            Donate
                        </Button>
                        <Button backgroundColor={"white"} color="#FFBD14">Voluteer</Button>
                    </Flex>
                </Flex>
                <TextContainer>
                <P align={"start"} color="#515151">
                      Millions of  elderly men and 
                      women in Africa are left to 
                      fend for themselves with their
                       weak body structure and age telling 
                       on them. Thousand others live in 
                    extremely loneliness with nobody to care for them:
                    
                    </P>
                    <P align={"start"} color="#515151">
                    Join us today on our 
                    mission to give them a world to believe in
                    </P>
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

                <OrangeHeaderText>
                  <Link to="poverty">

                {/* Next - Community Development Project */}
                  </Link>
                </OrangeHeaderText>
            </Next>
                <Footer/>
        </Container>

    )
}

export default ElderCare