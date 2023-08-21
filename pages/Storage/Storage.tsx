import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Background from "@/components/atom/background/Background";
import StorageBox from "@/components/molecule/Storage/StorageBox";
import test from "../../assets/png/crystal.png";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp
import axios from "axios";
import crystal from "@/types/crystal";
import { useAuth } from "@/context/AuthContext";

interface StorageProps {
  navigation: NavigationProp<any>;
}

const numColumns = 4;

const Storage = ({ navigation }: StorageProps) => {
  const { token } = useAuth();
  const [crystalData, setCrystalData] = useState<crystal[]>([]);

  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/crystal/all`;

    // API 요청 헤더 설정
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("crystal/all API 요청 성공:", response.data.data);
        setCrystalData(response.data.data);
      })
      .catch((error) => {
        console.log("crystal/all API 요청 실패:", error);
      });
  }, []);

  const renderItem = ({ item }: { item: crystal }) => (
    <GridItem>
      <StorageBox
        key={item.crystalId}
        crystalId={item.crystalId}
        red={item.red}
        green={item.green}
        blue={item.blue}
        image={test}
        onPress={() => navigation.navigate("CrystalReply")}
      />
    </GridItem>
  );

  return (
    <Background>
      <Container>
        <FlatList
          data={crystalData}
          renderItem={renderItem}
          keyExtractor={(item) => item.crystalId.toString()} // .toString() 추가
          numColumns={numColumns}
        />
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

const GridItem = styled.View`
  flex: 1;
  margin: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 8px;
`;

const ItemText = styled.Text`
  font-size: 18px;
`;
