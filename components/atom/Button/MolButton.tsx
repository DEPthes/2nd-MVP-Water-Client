import { View, Text } from "react-native";
import React, { HTMLAttributes } from "react";
import styled from "styled-components/native";
import MolText, { TextSize, TextWeight } from "../Text/Text";

type ColorType = "blue" | "grey" | "darkGrey" | "white";

type SizeType = "small" | "big" | "long";

type ButtonProps = HTMLAttributes<HTMLParagraphElement> & {
  ColorType: ColorType;
  SizeType: SizeType;
  text: string;
  textSize?: TextSize;
  textWeight?: TextWeight;
  mt?: string;
};
const MolButton = (props: ButtonProps) => {
  const {
    ColorType,
    SizeType,
    text,
    textSize = "22",
    textWeight = "bold",
    mt = "0",
  } = props;
  const textColor = ColorType === "white" ? "black" : "white";

  return (
    <Container ColorType={ColorType} SizeType={SizeType} mt={mt}>
      <MolText
        label={text}
        align="center"
        size={textSize}
        weight={textWeight}
        color={textColor}
      />
    </Container>
  );
};

export default MolButton;

const Container = styled.View<{
  ColorType: ColorType;
  SizeType: SizeType;
  mt: string;
}>`
  margin-top: ${({ mt }) => mt};
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
      case "darkGrey":
        return "#787878";
      case "white":
        return "white";
    }
  }};
  width: ${({ SizeType }) => {
    switch (SizeType) {
      case "small":
        return "55px";
      case "big":
        return "125px";
      case "long":
        return "90%";
    }
  }};
  height: ${({ SizeType }) => {
    switch (SizeType) {
      case "small":
        return "35px";
      case "big":
        return "45px";
      case "long":
        return "34px";
    }
  }};
`;
