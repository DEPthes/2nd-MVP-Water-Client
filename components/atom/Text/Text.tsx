import { HTMLAttributes } from "react";
import styled from "styled-components/native";

type TextSize = "12" | "14" | "17" | "22";

type TextWeight = "regular" | "bold";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: TextSize;
  weight?: TextWeight;
  label: string;
};

const MolText = (props: TextProps) => {
  const { size = "12", weight = "regular", label, ...restProps } = props;

  return (
    <StyledText size={size} weight={weight}>
      {label}
    </StyledText>
  );
};

export default MolText;

const StyledText = styled.Text<{ size: TextSize; weight: TextWeight }>`
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
`;
