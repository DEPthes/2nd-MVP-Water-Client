import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "../../../atom/Text/Text";

const InformationBanner = ({
  title,
  value,
  unit,
}: {
  title: string;
  value: string;
  unit: string;
}) => {
  return (
    <Container>
      <TitleContainer>
        <MolText color="black" label={title} align="left" size="12" />
      </TitleContainer>
      <ValueContainer>
        <MolText
          color="black"
          label={value}
          align="left"
          weight="bold"
          size="22"
        />
        <MolText color="black" label={unit} align="left" size="12" />
      </ValueContainer>
    </Container>
  );
};

export default InformationBanner;

const Container = styled.View`
  width: 164px;
  height: 76px;
  border-radius: 30px;
  background-color: #d5edff;
  display: flex;
  padding-top: 13px;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 25px;
`;

const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ValueContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
