import { Text, View } from "react-native";
import React, { Component } from "react";
import Background from "../../components/atom/background/Background";
import styled from "styled-components/native";
import MolText from "../../components/atom/Text/Text";

export class DiaryWriting extends Component {
  render() {
    return (
      <Background>
        <Container>
          <UpperBanner>
            <MolText
              label="나쁜 감정을 가득 담아 일기를 써보세요.
여기서는 무슨 말이든 괜찮아요."
              size="14"
              weight="regular"
              align="center"
            />
          </UpperBanner>
        </Container>
      </Background>
    );
  }
}

export default DiaryWriting;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperBanner = styled.View`
  background-color: white;
  width: 320px;
  height: 77px;
`;
