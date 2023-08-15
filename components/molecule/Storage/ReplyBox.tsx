import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";

interface ReplyBoxProps {
  date: string;
  content: string;
}

const ReplyBox = ({ date, content }: ReplyBoxProps) => {
  return (
    <Container>
      <DateContainer>
        <MolText
          weight="bold"
          size="12"
          color={"black"}
          label={date}
          align="left"
        />
      </DateContainer>
      <ContentContainer>
        <MolText
          weight="regular"
          size="12"
          align="center"
          color={"black"}
          label={content}
        />
      </ContentContainer>
    </Container>
  );
};

export default ReplyBox;

const Container = styled.View`
  width: 160px;
  height: 149px;
  background-color: #fff;
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 10px;
`;

const DateContainer = styled.View`
  width: 100%;
  margin-bottom: 3px;
  background-color: red;
`;

const ContentContainer = styled.View`
  width: 134px;
  height: 96px;
`;
