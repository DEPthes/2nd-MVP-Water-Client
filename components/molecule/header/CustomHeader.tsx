import React from "react";
import { View, Pressable } from "react-native";
import BackButton from "../../../assets/svg/BackButton";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";

interface CustomHeaderProps {
  navigation: any;
  title: string;
  showBackButton?: boolean;
  showBottomLine?: boolean;
}

const CustomHeader = ({
  navigation,
  title,
  showBackButton = false,
  showBottomLine = false,
}: CustomHeaderProps) => {
  return (
    <HeaderContainer>
      {showBackButton && (
        <Pressable onPress={() => navigation.goBack()}>
          <BackButton />
        </Pressable>
      )}
      <MolText label={title} size="17" weight="regular" align="center" />
      {showBottomLine && <BottomLine />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BottomLine = styled.View`
  width: 390px;
  height: 0.4px;
  background: #333;
`;

export default CustomHeader;
