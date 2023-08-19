import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import MolText from "../../components/atom/Text/Text";
import MolButton from "../../components/atom/Button/MolButton";
import axios from "axios";

type ownProps = {
  navigation: any;
  route: any;
};

const DiaryAnswer = (props: ownProps) => {
  const { navigation, route } = props;
  const { emotionId, myCrystalCount, inputContent, answerType } = route.params;
  const [chatResponse, setChatResponse] = useState<string>("");

  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/comment/${answerType}`;
    const requestBody = {
      diary: inputContent,
    };

    // API 요청 헤더 설정
    const headers = {
      Authorization:
        "Bearer h6ftIf5Eq-s1Ci9awfce4AgweBwU2AWhLlLvGE07Cj1zmwAAAYoNjfBe",
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data);
        setChatResponse(response.data.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);

  const CloseButtonHandler = () => {
    const apiUrl = `http://3.36.4.36:8080/comment/save`;
    const requestBody = {
      comment: chatResponse,
      emotionId: emotionId,
      myCrystalCount: myCrystalCount,
    };

    // API 요청 헤더 설정
    const headers = {
      Authorization:
        "Bearer h6ftIf5Eq-s1Ci9awfce4AgweBwU2AWhLlLvGE07Cj1zmwAAAYoNjfBe",
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
    navigation.navigate("Home");
  };
  return (
    <Background>
      <Container>
        <MolText
          label="나를 위한 위로의 답변이에요."
          size="22"
          weight="bold"
          align="center"
          color="black"
          mt="32"
        />
        <DiaryWritingBox>
          <ScrollViewContainer>
            <MolText
              label={chatResponse}
              size="17"
              weight="regular"
              align="left"
              color="black"
            />
          </ScrollViewContainer>
        </DiaryWritingBox>
        <CloseButtonContainer>
          <Pressable onPress={() => CloseButtonHandler()}>
            <MolButton ColorType="darkGrey" SizeType="small" text="닫기" />
          </Pressable>
        </CloseButtonContainer>
      </Container>
    </Background>
  );
};

export default DiaryAnswer;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 25px;
`;

const DiaryWritingBox = styled.View`
  width: 348px;
  height: 90%;
  border-radius: 22px;
  background-color: #e3f5fd;
  margin-top: 21px;
`;

const CloseButtonContainer = styled.View`
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
`;
