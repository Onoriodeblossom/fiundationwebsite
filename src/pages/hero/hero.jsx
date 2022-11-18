import React from "react";
import { Container } from "../../components/Container/styles";
import { P } from "../../components/p/p";
import { OrangeHeaderText } from "../../components/orangeText/styles";
import { CardContainer, ContactUsContainer, Flex, Image, ImpactStoryCard,  TextContainer, WrapperContainer } from "./styles";
import { ImageCard } from "../../components/imageCard/imageCard";
import One from "../../assets/one.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import Poverty from "../../assets/poverty.png"

import A from "../../assets/a.png"
import B from "../../assets/b.png"
import { IoArrowForwardCircleOutline} from "react-icons/io5"

import {IoIosPeople,} from "react-icons/io"
import {GiLoveHowl} from "react-icons/gi"
import {CgPhone} from "react-icons/cg"
import { H2 } from "../../components/h2/h2";
import { Volunteer } from "../../components/volunteer/volunteer";
import { Footer } from "../../components/footer/footer";
// import { Header } from "../../components/header/header";

const Hero = () => {
  const vision = [
    {
      image: One,
      path:"/community",
      text: "RELIEVE POVERTY  AND HUNGER ",
    },
    {
      image: Two,
      path:"education",
      text: "ENCOURAGE  EDUCATION, SKILLS ACQUISITION AND TRADE ",
    },
    {
      image: Three,
      path:"community",
      text: "COMMUNITY DEVELOPMENT PROJECT ",
    },
    {
      image: Four,
      path:"eldercare",
      text: "COMPASION FOR THE EDERLY, CARE FOR THE LONELY  ",
    },
  ];


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
  return (
    <Container>
      {/* <Header/> */}
      <WrapperContainer>
        <OrangeHeaderText top="40px">Our Mission and Purpose</OrangeHeaderText>
        <TextContainer>
          <P>
            N A A FOUNDATION is a Non-Profit Organization set
            up with a mission to meet humanitarian needs in the best way as it
            can with focus centered on:
          </P>
        </TextContainer>
        <Flex width={"80%"}>
          {vision.map(({ image, text,path}) => (
            <ImageCard src={image} text={text} to={path}  />
          ))}
        </Flex>
      </WrapperContainer>
        <ContactUsContainer>
        <CardContainer>
                <IoIosPeople size={30} color="#FFBD14"/>
                <H2>Meet the team</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>

            </CardContainer>

            <CardContainer>
                <GiLoveHowl size={30} color="#FFBD14"/>
                <H2>Partner with us</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>


            </CardContainer>

            <CardContainer>
                <CgPhone size={30} color="#FFBD14"/>
                <H2>Contact us</H2>
                <IoArrowForwardCircleOutline size={35} color="#515151"/>


            </CardContainer>
            

        </ContactUsContainer>
        <Volunteer background={Poverty} to="poverty" h1="Poverty and Hunger Relief"   color="red" text="Millions of people are 
                        currently living below poverty 
                        and battling with hunger with
                         every ounce of strength due 
                         to rising Inflation, 
                         Conflict and Disaster" />
                         <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
                         <Flex width="80%">

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
        <Volunteer background={A} to={"education"}  h1="Encourage Education, skills Acquisition and Trade" flexDirection="row-reverse"
        text="Millions of children are 
        currently out of school and 
        skill acquisition centre due 
        to extreme poverty."
        text2="Join us on our mission to
         keep his hope and dreams alive 
         a mission to move his mountains
          and a million others."
        />
        <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
        <Flex width="80%">

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
        <Volunteer background={B} to={"community"} h1="Community Development Projects" text="Thousand of 
        communities are currently being neglected and completely cut out of national budget with little to no access to basic ammenities 
        such as Clean water, Constant supply of 
        light, and motorable roads."/>
          <OrangeHeaderText>Our Impart stories</OrangeHeaderText>
        <Flex width="80%">
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
        <Footer/>
    </Container>
  );
};

export default Hero;
