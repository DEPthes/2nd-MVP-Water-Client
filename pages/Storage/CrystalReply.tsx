import { View, Text } from "react-native";
import React from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import CrystalReplyBox from "../../components/molecule/Storage/CrystalReplyBox";

const CrystalReply = () => {
  return (
    <Background>
      <Container>
        <CrystalContainer>
          <CryStalImage source={require("../../assets/png/crystalTest2.png")} />
        </CrystalContainer>
        <View>
          <CrystalReplyBox />
        </View>
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
`;
const CryStalImage = styled.Image`
  width: 254px;
  height: 223px;
`;
