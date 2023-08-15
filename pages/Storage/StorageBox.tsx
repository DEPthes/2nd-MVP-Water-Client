import React from "react";
import { ImageSourcePropType } from "react-native/types";
import styled from "styled-components/native";

interface BoxProps {
  image: ImageSourcePropType;
}

const StorageBox = ({ image }: BoxProps) => {
  return (
    <BoxContainer>
      <BoxImage
        source={
          require("<path-to-dummy-image>") /* 더미 이미지 경로를 넣어주세요 */
        }
      />
    </BoxContainer>
  );
};

export default StorageBox;

const BoxContainer = styled.View`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: lightgray;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxImage = styled.Image`
  width: 100%;
  height: 100%;
`;
