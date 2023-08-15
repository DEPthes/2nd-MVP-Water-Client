import { View, Text } from "react-native";
import React, { HTMLAttributes } from "react";
import styled from "styled-components/native";
import MolText from "../Text/Text";

type ColorType = "blue" | "grey";

type SizeType = "small" | "big";

type ButtonProps = HTMLAttributes<HTMLParagraphElement> & {
  ColorType: ColorType;
  SizeType: SizeType;
  text: string;
};
const MolButton = (props: ButtonProps) => {
  const { ColorType, SizeType, text } = props;
  return (
    <Container ColorType={ColorType} SizeType={SizeType}>
      <MolText
        label={text}
        align="center"
        size="17"
        weight="bold"
        color="white"
      />
    </Container>
  );
};

export default MolButton;

const Container = styled.View<{ ColorType: ColorType; SizeType: SizeType }>`
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ ColorType }) => {
    switch (ColorType) {
      case "blue":
        return "#9DE1FF";
      case "grey":
        return "#C5C5C5";
    }
  }};
  width: ${({ SizeType }) => {
    switch (SizeType) {
      case "small":
        return "55px";
      case "big":
        return "125px";
    }
  }};
  height: ${({ SizeType }) => {
    switch (SizeType) {
      case "small":
        return "35px";
      case "big":
        return "45px";
    }
  }};
`;
