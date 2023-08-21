import { View, Text, FlatList } from "react-native";
import React from "react";
import ReplyBox from "./ReplyBox";
import { styled } from "styled-components/native";
import MolText from "@/components/atom/Text/Text";

interface CrystalReplyBoxProps {
  replies: { date: string; content: string }[];
}

const CrystalReplyBox = ({ replies }: CrystalReplyBoxProps) => {
  const renderItem = ({
    item,
  }: {
    item: { date: string; content: string };
  }) => <ReplyBox date={item.date} content={item.content} />;

  return (
    <Container>
      <HeaderContainer>
        <MolText
          color={"black"}
          label={"내 결정에 대한 답변들"}
          align={"center"}
          size="22"
          weight="bold"
        />
      </HeaderContainer>

      <ListContainer>
        <FlatList
          data={replies}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </ListContainer>
    </Container>
  );
};

export default CrystalReplyBox;

const Container = styled.View`
  display: flex;
`;

const HeaderContainer = styled.View`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
