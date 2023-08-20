import { View, Text, Pressable, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MolText from "../components/atom/Text/Text";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

const Home = ({ navigation }: { navigation: any }) => {
  const isFocused = useIsFocused();
  const [answerCount, setAnswerCount] = useState(0);

  const waters = {
    first: require("@/assets/png/water01.png"),
    second: require("@/assets/png/water02.png"),
    third: require("@/assets/png/water03.png"),
    fourth: require("@/assets/png/water04.png"),
    five: require("@/assets/png/water05.png"),
  };
  const [crystalState, setCrystalState] = useState(waters.first);

  useEffect(() => {
    if (isFocused) {
      const apiUrl = `http://3.36.4.36:8080/crystal/comments`;
      // API 요청 헤더 설정
      const headers = {
        Authorization:
          "Bearer mA5GsYhjZhxhsoHn2R4rzEY-kYgbRQniiCBLtNntCiolUAAAAYoTwGNw",
        "Content-Type": "application/json",
      };
      // POST 요청 보내기
      axios.get(apiUrl, { headers }).then((response) => {
        console.log("API 요청 성공:", response.data);
        setAnswerCount(response.data.data);
        setTimeout(() => {
          console.log(answerCount);
          if (answerCount < 5) {
            setCrystalState(waters.first);
          } else if (answerCount < 10) {
            setCrystalState(waters.second);
          } else if (answerCount < 15) {
            setCrystalState(waters.third);
          } else if (answerCount < 20) {
            setCrystalState(waters.fourth);
          } else {
            setCrystalState(waters.five);
          }
        }, 0);
      });
    }
  }, [isFocused, answerCount]);
  return (
    <Pressable onPress={() => navigation.navigate("DiaryWriting")}>
      <Container>
        <LinearGradient
          colors={["rgba(0, 148, 255, 0.53)", "rgba(209, 236, 255, 0)"]}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={crystalState}
            style={{
              width: 254,
              height: 254,
              objectFit: "contain",
            }}
          />
          <MolText
            label="화면을 터치하면 일기를 작성할 수 있습니다"
            size="14"
            weight="regular"
            align="left"
            color="black"
          />
        </LinearGradient>
      </Container>
    </Pressable>
  );
};

export default Home;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
