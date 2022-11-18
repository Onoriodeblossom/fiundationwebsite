import React from "react";
import { Button } from "../../components/button/button";
import { Container } from "../../components/Container/styles";
import { H1 } from "../../components/h1/h1";
import { P } from "../../components/p/p";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import { BiArrowBack } from "react-icons/bi";

import { Link } from "react-router-dom";

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
// import { Header } from "../../components/header/header";

const Poverty = () => {
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
            Poverty And Hunger
            <br />
            Relief
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
            Millions of people are currently living below poverty level and
            battling with hunger with every ounce of their little strength due
            to rising inflation, conflict, disaster and other natural
            phenomenon.
          </P>
          <P align={"start"} color="#515151">
            At Nagbeni Foundation, we have embarked on a mission to give these
            precious souls the Audacity of hope. We believe no one should go to
            bed hungry in a world where there is abundance. officia deserunt
            mollit anim id est laborum.
          </P>
          <P align="start" color="#515151">
            Join us on our mission to reduce poverty and hunger to a minimum
            level and rescue millions from the torment of hunger.
          </P>

          <ol>
            <li> Sponsoring meals</li>
            <li>Volunteering</li>
            <li>Referring someone to donate to this cause</li>
          </ol>
        </TextContainer>
        <OrangeHeaderText>Our Impact stories</OrangeHeaderText>
        <Flex>
          {/* <br/> */}

          {impactStory.map(({ img, text, title }) => (
            <ImpactStoryCard>
              <Image src={img} />
              <div>
                <OrangeHeaderText size="18px">{title}</OrangeHeaderText>
                <P align={"start"}>{text}</P>
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

          <Link  to="/education">
        <OrangeHeaderText color="16px">
            Next - ENCOURAGE EDUCATION, SKILLS ACQUISITION AND TRADE
        </OrangeHeaderText>
          </Link>
      </Next>
      <Footer />
    </Container>
  );
};

export default Poverty;
