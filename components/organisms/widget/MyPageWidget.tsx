import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MolText from "@/components/atom/Text/Text";

type ownProps = {
  changeFromAlbumHandler: () => void;
  changeToDefaultHandler: () => void;
};

const MyPageWidget = (props: ownProps) => {
  const { changeFromAlbumHandler, changeToDefaultHandler } = props;
  return (
    <Container>
      <MolText
        color="black"
        label="프로필 사진"
        align="left"
        weight="bold"
        size="17"
      />
      <ChageImageFromAlbumPressable onPress={changeFromAlbumHandler}>
        <MolText
          color="black"
          label="앨범에서 선택하기"
          align="left"
          weight="regular"
          size="17"
        />
      </ChageImageFromAlbumPressable>
      <Pressable onPress={changeToDefaultHandler}>
        <MolText
          color="black"
          label="기본 이미지로 변경"
          align="left"
          weight="regular"
          size="17"
        />
      </Pressable>
    </Container>
  );
};

export default MyPageWidget;

const Container = styled.Pressable`
  width: 300px;
  height: 126px;
  padding-top: 22px;
  padding-left: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  position: absolute;
  z-index: 3;
`;

const ChageImageFromAlbumPressable = styled.Pressable`
  margin-top: 14px;
  margin-bottom: 10px;
`;
