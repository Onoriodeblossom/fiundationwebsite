import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = ({ children, color, backgroundColor, to }) => {
  return (
    <Btn backgroundColor={backgroundColor}>
      <Text>
        <Link className="link" to={to} color="color">
          {children}
        </Link>
      </Text>
    </Btn>
  );
};

export const Btn = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffbd14"};
  height: 50px;
  width: 100px;
  border-color: yellow;
  border-width: 0.2px;
  margin-left: 20px;

  .link {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : "white")};
    font-size: ${(props) => (props.size ? props.size : "16px")};
    font-weight: 500;
    letter-spacing: 0em;
    text-align: ${(props) => (props.align ? props.align : "center")};

    /* color:green */
  }
`;

export const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "white")};
`;
