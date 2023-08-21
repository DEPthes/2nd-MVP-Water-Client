import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";
import { format } from "date-fns"; // date-fns 라이브러리 사용
import { useNavigation } from "@react-navigation/native";
import { AppNavProps } from "./ParamList";

interface ReplyBoxProps {
  date: string;
  content: string;
}

const ReplyBox = ({ date, content }: ReplyBoxProps) => {
  const formattedDate = format(new Date(date), "yyyy/MM/dd EEE");
  const navigation = useNavigation<AppNavProps<"ReplyBoxDetail">>();

  const handleBoxPress = () => {
    navigation.navigate("ReplyBoxDetail", {
      date: formattedDate,
      content: content,
    });
  };

  return (
    <TouchableOpacity onPress={handleBoxPress}>
      <Container>
        <DateContainer>
          <MolText
            weight="bold"
            size="12"
            color={"black"}
            label={formattedDate}
            align="left"
          />
        </DateContainer>
        <ContentContainer>
          <MolText
            weight="regular"
            size="12"
            color={"black"}
            label={content}
            align="left"
          />
        </ContentContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default ReplyBox;

const Container = styled.View`
  width: 160px;
  height: 149px;
  background-color: #fff;
  padding: 13px;
  margin: 10px;
  border-radius: 10px 10px 0 10px;
`;

const DateContainer = styled.View`
  width: 100%;
  margin-bottom: 3px;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 96px;

  text-align: left;
`;
