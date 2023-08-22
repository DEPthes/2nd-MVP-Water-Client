import { View, Text, ScrollView, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import CrystalReplyBox from "../../components/molecule/Storage/CrystalReplyBox";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { useRoute } from "@react-navigation/native";
import Crystal from "@/assets/svg/crystal/Crystal";

interface CrystalReplyParams {
  crystalId: number;
  red: number;
  green: number;
  blue: number;
  selectedCrystalFake: string; // Add selectedCrystalFake to route params
}

const CrystalReply = () => {
  const { token } = useAuth();
  const route = useRoute();
  const {
    crystalId,
    red,
    green,
    blue,
    selectedCrystalFake, // Retrieve selectedCrystalFake from route params
  } = route.params as CrystalReplyParams;
  const [replies, setReplies] = useState<{ date: string; content: string }[]>(
    []
  );

  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/crystal/${crystalId}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("crystal/{crystalId} API 요청 성공:", response.data.data);
        setReplies(response.data.data);
      })
      .catch((error) => {
        console.log("crystal/{crystalId} API 요청 실패:", error);
      });
  }, [crystalId]);

  return (
    <Background>
      <Container>
        <CrystalContainer>
          <Crystal
            red={red}
            green={green}
            blue={blue}
            width={230}
            height={230}
          />
        </CrystalContainer>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={({ item }) => (
            <ReplyBoxContainer>
              <CrystalReplyBox replies={replies} />
            </ReplyBoxContainer>
          )}
        />
      </Container>
    </Background>
  );
};

export default CrystalReply;

const Container = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 70px;
`;

const CrystalContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`;

const CrystalImage = styled.Image`
  width: 254px;
  height: 223px;
`;

const ReplyBoxContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 223px;
  border-radius: 30px 30px 0 0;
  padding-bottom: 200px;
`;
