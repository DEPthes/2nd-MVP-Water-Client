import { View, Text, Dimensions } from "react-native";
import React from "react";
import Background from "@/components/atom/background/Background";
import styled from "styled-components/native";

const AppLoading = () => {
  const windowHeight = Dimensions.get("window").height;
  return (
    <Background>
      <Container style={{ paddingBottom: windowHeight * 0.1 }}>
        <ImgContainer>
          <ServiceImg
            source={require("../../assets/png/Login-ServiceName.png")}
          />
        </ImgContainer>
      </Container>
    </Background>
  );
};

export default AppLoading;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const ImgContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const ServiceImg = styled.Image`
  margin-right: 20px;
  object-fit: contain;
`;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const KakaoContainer = styled.View`
  border-radius: 30px;
  background: #fae407;
  width: 190px;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const KakaoImg = styled.Image``;
