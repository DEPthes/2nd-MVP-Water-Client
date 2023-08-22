import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import MolText from "../../components/atom/Text/Text";
import MolButton from "../../components/atom/Button/MolButton";
import axios from "axios";
import AfterAnswerWidget from "@/components/organisms/widget/AfterAnswerWidget";
import EvolvingWidget from "@/components/organisms/widget/EvolvingWidget";
import { useAuth } from "@/context/AuthContext";

type ownProps = {
  navigation: any;
  route: any;
};

const DiaryAnswer = (props: ownProps) => {
  const { token } = useAuth();
  const { navigation, route } = props;
  const { emotionId, myCrystalCount, inputContent, answerType } = route.params;
  const [chatResponse, setChatResponse] = useState<string>("");
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAfterAnswer, setIsAfterAnswer] = useState(false);
  const [isWaterChange, setIsWaterChange] = useState(false);
  const [isWaterEvolving, setIsWaterEvolving] = useState(false);
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/comment/${answerType}`;
    const requestBody = {
      diary: inputContent,
    };

    // API 요청 헤더 설정

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

    // POST 요청 보내기
    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
    setIsModalShown(true);
    setIsAfterAnswer(true);
  };

  const closeAfterAnswerWidget = () => {
    setIsAfterAnswer(false);
    const apiUrl = `http://3.36.4.36:8080/crystal/comments`;

    // POST 요청 보내기
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data);
        const newAnswerCount = response.data.data;

        // answerCount에 따른 조건문 추가
        if (
          newAnswerCount === 5 ||
          newAnswerCount === 10 ||
          newAnswerCount === 15 ||
          newAnswerCount === 20
        ) {
          console.log("분기점이다!");
          setIsWaterChange(true);
        } else {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  };

  const closeWaterChangeHandler = () => {
    setIsWaterChange(false);
    setIsWaterEvolving(true);
  };
  return (
    <>
      {isModalShown ? (
        <Background>
          <ModalContainer>
            {isAfterAnswer && (
              <AfterAnswerWidget
                onPressHandler={closeAfterAnswerWidget}
                label="당신의 슬픔일기가
사라졌습니다."
              />
            )}

            {isWaterChange && (
              <AfterAnswerWidget
                onPressHandler={closeWaterChangeHandler}
                label="당신의 물이
변화하려고 합니다."
              />
            )}
            {isWaterEvolving && <EvolvingWidget navigation={navigation} />}
          </ModalContainer>
        </Background>
      ) : (
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
                  weight="bold"
                  align="left"
                  color="black"
                  mt="-40"
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
      )}
    </>
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

const WidgetContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(48, 48, 48, 0.7);
  position: absolute;
  z-index: 1;
`;

const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
