import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MolText from "../../components/atom/Text/Text";
import Background from "../../components/atom/background/Background";

const Storage = () => {
  return (
    <Background>
      <Container>
        <TitleContainer>
          <MolText label="결정보관함" size="17" weight="regular" />
        </TitleContainer>
      </Container>
    </Background>
  );
};

export default Storage;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 13px;
`;
