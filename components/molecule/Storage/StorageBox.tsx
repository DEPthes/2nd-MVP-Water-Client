import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import crystal from "../../../types/crystal";
import crystal6_test from "@/assets/svg/crystal/crystal6_test.svg";

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
      <ImgWrapper>{crystal6_test}</ImgWrapper>
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
`;
