import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import Background from "../components/atom/background/Background";
import MolText from "../components/atom/Text/Text";
import styled from "styled-components/native";
import InformationBanner from "../components/molecules/MyPage/InformationBanner/InformationBanner";
import MolButton from "../components/atom/Button/MolButton";
import axios from "axios";

const MyPage = () => {
  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/mypage`;

    // API 요청 헤더 설정
    const headers = {
      Authorization:
        "Bearer h6ftIf5Eq-s1Ci9awfce4AgweBwU2AWhLlLvGE07Cj1zmwAAAYoNjfBe",
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);
  return (
    <Background>
      <Container>
        <ProfileContainer>
          <ProfileImageContainer>
            <Image
              source={require("../assets/png/defaultProfileImg.png")}
              style={{
                width: 60,
                height: 60,
                objectFit: "contain",
              }}
            />
          </ProfileImageContainer>
          <MolText
            color="black"
            label="홍길동"
            align="left"
            weight="bold"
            size="22"
          />
        </ProfileContainer>
        <InformationBannerContainer>
          <InformationBanner title="결정개수" value="15" unit="개" />
          <InformationBanner title="일기 쓴 지" value="310" unit="일째" />
        </InformationBannerContainer>
        <Line />
        <ButtonContainer>
          <MolButton
            ColorType="white"
            SizeType="long"
            text="로그아웃"
            textSize="12"
            textWeight="regular"
          />
          <MolButton
            ColorType="white"
            SizeType="long"
            text="탈퇴하기"
            textSize="12"
            textWeight="regular"
            mt="14"
          />
        </ButtonContainer>
        <MolText
          color="black"
          label="ⓒ 2023. DEPth. All rights reserved."
          align="left"
          weight="regular"
          size="12"
          mt="300"
        />
      </Container>
    </Background>
  );
};

export default MyPage;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ProfileContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImageContainer = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  background-color: white;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformationBannerContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 40px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 26px;
`;
