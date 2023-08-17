import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "../../components/atom/Text/Text";
import Background from "../../components/atom/background/Background";
import StorageBox from "../../components/molecule/Storage/StorageBox";
import test from "../../assets/png/crystal.png";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp

interface StorageProps {
  navigation: NavigationProp<any>; // Set the type
}

const Storage = ({ navigation }: StorageProps) => {
  return (
    <Background>
      <Container>
        <Row>
          <StorageBox
            image={test}
            onPress={() => navigation.navigate("CrystalReply")}
          />
          <StorageBox image={test} />
          <StorageBox image={test} />
          <StorageBox image={test} />
        </Row>
        <Row>
          <StorageBox image={test} />
          <StorageBox image={test} />
          <StorageBox image={test} />
        </Row>
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
