import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";

type ownProps = {
  navigate: any;
  emotionId: number;
  myCrystalCount: number;
  inputContent: string;
};

const Widget = (props: ownProps) => {
  const { navigate, emotionId, myCrystalCount, inputContent } = props;

  let answerType = "";

  const comfortButtonHandler = () => {
    answerType = "comfortcomplete";
    navigationHandler();
  };
  const mysideButtonHandler = () => {
    answerType = "mysidecomplete";
    navigationHandler();
  };

  const navigationHandler = () => {
    console.log(answerType);
    navigate("DiaryAnswer", {
      emotionId,
      myCrystalCount,
      inputContent,
      answerType,
    });
  };
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
        <Pressable onPress={() => mysideButtonHandler()}>
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
            <MolText
              color="black"
              label="위로해주기"
              align="center"
              size="17"
            />
          </ButtonTextWrapper>
        </Pressable>
        <Pressable onPress={() => comfortButtonHandler()}>
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
            <MolText
              color="black"
              label="편들어주기"
              align="center"
              size="17"
            />
          </ButtonTextWrapper>
        </Pressable>
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
