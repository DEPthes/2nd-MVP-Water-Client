import { HTMLAttributes } from "react";
import styled from "styled-components/native";

export type TextSize = "12" | "14" | "17" | "22";

export type TextWeight = "regular" | "bold";

type TextAlign = "left" | "center";

type TextColor = "white" | "black";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: TextSize;
  weight?: TextWeight;
  label: string | number;
  align: TextAlign;
  color: TextColor;
  mt?: string;
};

const MolText = (props: TextProps) => {
  const {
    size = "12",
    weight = "regular",
    align = "left",
    color = "black",
    label,
    mt = "0",
    ...restProps
  } = props;

  return (
    <StyledText size={size} weight={weight} align={align} color={color} mt={mt}>
      {label}
    </StyledText>
  );
};

export default MolText;

const StyledText = styled.Text<{
  size: TextSize;
  weight: TextWeight;
  align: TextAlign;
  color: TextColor;
  mt: string;
}>`
  margin-top: ${(props) => props.mt}px;
  color: ${({ color }) => {
    switch (color) {
      case "white":
        return "white";
      case "black":
        return "black";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "12":
        return "12.75px";
      case "14":
        return "14px";
      case "17":
        return "17px";
      case "22":
        return "22px";
    }
  }};
  font-weight: ${({ weight }) => {
    switch (weight) {
      case "regular":
        return "400";
      case "bold":
        return "700";
    }
  }};
  text-align: ${({ align }) => {
    switch (align) {
      case "left":
        return "left";
      case "center":
        return "center";
    }
  }};
`;
