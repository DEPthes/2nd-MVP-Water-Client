import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MolText from "../../components/atom/Text/Text";

const Storage = () => {
  return (
    <SafeAreaView>
      <Container>
        <TitleContainer>
          <MolText label="결정보관함" size="17" weight="regular" />
        </TitleContainer>
      </Container>
    </SafeAreaView>
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
