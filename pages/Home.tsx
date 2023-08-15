import { View, Text, Pressable } from "react-native";
import React from "react";
import MolText from "../components/atom/Text/Text";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }: { navigation: any }) => {
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
          <MolText
            label="화면을 터치하면 일기를 작성할 수 있습니다"
            size="14"
            weight="regular"
            align="center"
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
