import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import MolText from "@/components/atom/Text/Text";
import * as Progress from "react-native-progress";

const EvolvingWidget = ({ navigation }: { navigation: any }) => {
  const [progressValue, setProgressValue] = useState(0);
  const [modalText, setModalText] = useState("당신의 물이 진화중입니다.");

  useEffect(() => {
    let interval: any;
    if (progressValue < 1) {
      interval = setInterval(() => {
        setProgressValue((prevValue) => prevValue + 0.02); // 5초 동안 0.01씩 증가
      }, 50); // 50 밀리초(0.05초)마다 업데이트
    }

    setTimeout(() => {
      setModalText("로딩중...");
    }, 2000);

    // 5초 후에 타이머 정리
    setTimeout(() => {
      clearInterval(interval);
      navigation.navigate("Home");
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [progressValue]);
  return (
    <Container>
      <Image
        source={require("@/assets/png/hammer.png")}
        style={{ width: 100, height: 100 }}
      />
      <MolText
        color="black"
        label={modalText}
        align="left"
        weight="regular"
        size="12"
      />
      <ProgressBarContainer>
        <Progress.Bar
          progress={progressValue}
          width={220}
          height={12}
          borderWidth={5}
          animationType="timing"
          indeterminateAnimationDuration={5000}
          unfilledColor="rgba(239, 239, 239, 1)"
          borderColor="rgba(239, 239, 239, 1)"
          color="rgba(157, 225, 255, 1)"
          borderRadius={30}
        />
      </ProgressBarContainer>
    </Container>
  );
};

export default EvolvingWidget;

const Container = styled.View`
  width: 292px;
  height: 167px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ProgressBarContainer = styled.View`
  margin-top: 13px;
`;
