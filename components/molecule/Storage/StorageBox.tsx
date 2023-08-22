import React from "react";
import styled from "styled-components/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import crystal from "../../../types/crystal";
import crystal6_test from "@/assets/svg/crystal/crystal6_test.svg";
import Crystal from "@/assets/svg/crystal/Crystal";

interface BoxProps {
  onPress?: () => void; // Add onPress prop
}

type ownProps = {
  onPress?: () => void;
} & crystal;

const StorageBox = (props: ownProps) => {
  const { onPress, crystalId, red, green, blue } = props;
  return (
    <TouchableBoxContainer onPress={onPress}>
      <ImgWrapper>
        <Crystal red={red} green={green} blue={blue} width={100} height={100} />
      </ImgWrapper>
    </TouchableBoxContainer>
  );
};

export default StorageBox;

const TouchableBoxContainer = styled(TouchableOpacity)`
  width: 78px;
  height: 78px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 14px;
`;

const BoxImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ImgWrapper = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
