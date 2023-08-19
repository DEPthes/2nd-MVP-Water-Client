import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import crystal from "../../../types/crystal";

interface BoxProps {
  image: any;
  onPress?: () => void; // Add onPress prop
}

type ownProps = {
  image: any;
  onPress?: () => void;
} & crystal;

const StorageBox = (props: ownProps) => {
  const { image, onPress, crystalId, red, green, blue } = props;
  return (
    <TouchableBoxContainer onPress={onPress}>
      <BoxImage source={image} />
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
