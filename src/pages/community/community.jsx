import React from "react";
import { Button } from "../../components/button/button";
import { Container } from "../../components/Container/styles";
import { H1 } from "../../components/h1/h1";
import { P } from "../../components/p/p";
// import One from "../../assets/one.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import { BiArrowBack } from "react-icons/bi";
// import Poverty from "../../assets/poverty.png"

import {
  Flex,
  Icon,
  Image,
  ImageSection,
  ImpactStoryCard,
  Next,
  TextContainer,
  WrapperContainer,
} from "./styles";
import { OrangeHeaderText } from "../../components/orangeText/styles";
import { Footer } from "../../components/footer/footer";
// import { Header } from "../../components/header/header";/

import { Link } from "react-router-dom";

const Community = () => {
  const impactStory = [
    {
      img: Two,
      title: "Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
    },
    {
      img: Three,
      title: "Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
    },
    {
      img: Four,
      title: "Anna Kingston",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet, ",
    },
  ];

  return (
    <Container>
      {/* <Header /> */}
      <WrapperContainer>
        <ImageSection></ImageSection>
        <Flex>
          <H1 align={"left"}>
            Community Development <br /> Projects
          </H1>

          <Flex width="20%">
            <Button to="/donate">Donate</Button>
            <Button backgroundColor={"white"} color="#FFBD14">
              Voluteer
            </Button>
          </Flex>
        </Flex>
        <TextContainer>
          <P align={"start"} color="#515151">
            Thousands of community are currently neglected and completely cut
            out of national budget with little to no access to basic amenities
            such as clean water, 3/24 hours light, motorable roads, to name but
            a few leading to the grand definition of "Lowest standard of
            living".
          </P>
          <P align={"start"} color="#515151">
            At nagbenin foundation, we believe we can bridge the gap in a
            significant wa by embarking non community development projects.
          </P>
          <P color="#515151">
            Our success on this mission will be significant with a kind touch of
            many hands including yours. Join us today in sponsoring communities'
            access to a better life and an improved standard of living.
          </P>
        </TextContainer>
        <OrangeHeaderText>Our Impact stories</OrangeHeaderText>
        <Flex>
          {/* <br/> */}

          {impactStory.map(({ img, text, title }) => (
            <ImpactStoryCard>
              <Image src={img} />
              <div>
                <OrangeHeaderText size="18px">{title}</OrangeHeaderText>
                <P align={"start"} color="#515151">{text}</P>
              </div>
            </ImpactStoryCard>
          ))}
        </Flex>
      </WrapperContainer>
      <Next>
        <Icon>
          <BiArrowBack />
          <P color="black">Back</P>
        </Icon>
        <Link to="/eldercare">
          <OrangeHeaderText size='18px'>
            Next - Compassion for the Elderly and Care for the Lonely
          </OrangeHeaderText>
        </Link>
      </Next>
      <Footer />
    </Container>
  );
};

export default Community;
