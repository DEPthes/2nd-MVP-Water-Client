import {
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import MolText from "../../components/atom/Text/Text";
import MolButton from "../../components/atom/Button/MolButton";
import Widget from "../../components/organisms/widget/Widget";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

export const DiaryWriting = ({ navigation }: { navigation: any }) => {
  const { token } = useAuth();
  const [onWidget, setOnWidget] = useState<boolean>(false);

  const [inputContent, setInputContent] = useState("");

  const [emotionId, setEmotionId] = useState(0);

  const [myCrystalCount, setMyCrystalCount] = useState(0);

  const CompleteWritingHandler = () => {
    console.log("일기 작성을 완료했습니다.");
    console.log(inputContent);
    setOnWidget(true);
    const apiUrl = "http://3.36.4.36:8080/diary";
    const requestBody = {
      diary: inputContent,
    };

    // API 요청 헤더 설정
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        setEmotionId(response.data.data.emotionId);
        setMyCrystalCount(response.data.data.myCrystalCount);
        console.log("API 요청 성공:", response.data.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
        // 에러 처리를 수행하세요.
      });
  };

  return (
    <>
      {onWidget ? (
        <WidgetContainer>
          <Widget
            navigate={navigation.navigate}
            emotionId={emotionId}
            myCrystalCount={myCrystalCount}
            inputContent={inputContent}
          />
        </WidgetContainer>
      ) : (
        <></>
      )}
      <Background>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding", android: undefined })}
          >
            <Container>
              <UpperBanner>
                <Image
                  source={require("../../assets/png/pencil.png")}
                  style={{
                    width: 75,
                    height: 75,
                    marginBottom: 4,
                    objectFit: "contain",
                  }}
                />
                <MolText
                  label="나쁜 감정을 가득 담아 일기를 써보세요.
여기서는 무슨 말이든 괜찮아요."
                  size="14"
                  weight="regular"
                  align="center"
                  color="black"
                />
              </UpperBanner>
              <DiaryWritingBox>
                <MolText
                  label="2023/08/02 WED"
                  size="17"
                  weight="bold"
                  align="left"
                  color="black"
                />
                <StyledTextInput
                  multiline={true}
                  placeholder="터치하여 일기 쓰기"
                  value={inputContent}
                  onChangeText={(text: string) => setInputContent(text)} // Update the inputContetn state
                />
              </DiaryWritingBox>
              <ButtonContainer>
                <Pressable onPress={() => navigation.goBack()}>
                  <MolButton ColorType="grey" SizeType="big" text="작성취소" />
                </Pressable>
                <Pressable onPress={() => CompleteWritingHandler()}>
                  <MolButton ColorType="blue" SizeType="big" text="작성완료" />
                </Pressable>
              </ButtonContainer>
            </Container>
          </KeyboardAvoidingView>
        </Pressable>
      </Background>
    </>
  );
};

export default DiaryWriting;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperBanner = styled.View`
  background-color: white;
  width: 320px;
  height: 77px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 43px;
`;

const DiaryWritingBox = styled.View`
  width: 320px;
  height: 255px;
  border-radius: 22px;
  background-color: #e3f5fd;
  margin-top: 27px;
  padding: 25px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 29px;
  width: 281px;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const WidgetContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(48, 48, 48, 0.7);
  position: absolute;
  z-index: 1;
`;
