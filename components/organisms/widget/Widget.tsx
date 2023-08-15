import { Image, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";

const Widget = () => {
  return (
    <Container>
      <MolText
        color="black"
        label="어떤 답변을 원하나요?"
        align="center"
        size="22"
        weight="bold"
        mt="43"
      />
      <MolText
        color="black"
        label="내 상황에 맞는 답변을 들을 수 있어요."
        align="center"
        size="17"
        mt="2"
      />
      <ButtonContainer>
        <ButtonTextWrapper>
          <Image
            source={require("../../../assets/png/resultImg1.png")}
            style={{
              width: 88,
              height: 88,
              marginBottom: 4,
              objectFit: "contain",
            }}
          />
          <MolText color="black" label="위로해주기" align="center" size="17" />
        </ButtonTextWrapper>
        <ButtonTextWrapper>
          <Image
            source={require("../../../assets/png/resultImg2.png")}
            style={{
              width: 88,
              height: 88,
              marginBottom: 4,
              objectFit: "contain",
            }}
          />
          <MolText color="black" label="편들어주기" align="center" size="17" />
        </ButtonTextWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default Widget;

const Container = styled.View`
  width: 319px;
  height: 312px;
  border-radius: 22px;
  background-color: #e3f5fd;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 34px;
  width: 231px;
  justify-content: space-between;
`;

const ButtonTextWrapper = styled.View`
  display: flex;
  align-items: center;
`;
