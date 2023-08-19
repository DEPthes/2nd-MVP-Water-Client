import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Background from "@/components/atom/background/Background";
import StorageBox from "@/components/molecule/Storage/StorageBox";
import test from "../../assets/png/crystal.png";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp
import axios from "axios";
import crystal from "../../types/crystal";

interface StorageProps {
  navigation: NavigationProp<any>; // Set the type
}

const Storage = ({ navigation }: StorageProps) => {
  const [crystalData, setCrystalData] = useState<crystal[]>([]);

  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/crystal/all`;

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
        console.log("API 요청 성공:", response.data.data);
        setCrystalData(response.data.data);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);
  return (
    <Background>
      <Container>
        <Row>
          <>
            {crystalData.map((crystal) => {
              <StorageBox
                crystalId={crystal.crystalId}
                red={crystal.red}
                green={crystal.green}
                blue={crystal.blue}
                image={test}
                onPress={() => navigation.navigate("CrystalReply")}
              />;
            })}
          </>
        </Row>
        {/* <Row>
          <StorageBox image={test} />
          <StorageBox image={test} />
          <StorageBox image={test} />
        </Row> */}
      </Container>
    </Background>
  );
};

export default Storage;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 94px;
  box-sizing: border-box;
`;

const Row = styled.View`
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 16px;
`;
