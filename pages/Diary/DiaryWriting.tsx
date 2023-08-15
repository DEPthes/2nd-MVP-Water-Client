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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Widget from "../../components/organisms/widget/Widget";

export const DiaryWriting = ({ navigation }: { navigation: any }) => {
  const [onWidget, setOnWidget] = useState<boolean>(false);

  return (
    <>
      {onWidget ? (
        <WidgetContainer>
          <Widget navigate={navigation.navigate} />
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
                  multiline={true} // 여러 줄 입력 활성화
                  placeholder="터치하여 일기 쓰기"
                />
              </DiaryWritingBox>
              <ButtonContainer>
                <Pressable onPress={() => navigation.goBack()}>
                  <MolButton ColorType="grey" SizeType="big" text="작성취소" />
                </Pressable>
                <Pressable onPress={() => setOnWidget(true)}>
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
  height: 455px;
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
