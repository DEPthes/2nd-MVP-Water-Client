import React from "react";
import {
  View,
  Pressable,
  Platform,
  SafeAreaView as iOSSafeAreaView,
} from "react-native";
import BackButton from "../../../assets/svg/BackButton";
import styled from "styled-components/native";
import MolText from "../../atom/Text/Text";
import { SafeAreaView as AndroidSafeAreaView } from "react-native-safe-area-context";

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
  const SafeAreaViewComponent =
    Platform.OS === "ios" ? iOSSafeAreaView : AndroidSafeAreaView;

  return (
    <SafeAreaViewComponent>
      <HeaderContainer>
        <BackButtonWrapper>
          {showBackButton && (
            <Pressable onPress={() => navigation.goBack()}>
              <BackButtonContainer>
                <BackButton />
              </BackButtonContainer>
            </Pressable>
          )}
        </BackButtonWrapper>
        <TextContainer>
          <TextWrapper>{title}</TextWrapper>
        </TextContainer>
      </HeaderContainer>
      {showBottomLine && <BottomLine />}
    </SafeAreaViewComponent>
  );
};

const HeaderContainer = styled.View`
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BottomLine = styled.View`
  width: 390px;
  margin-top: 13px;
  height: 0.4px;

  background: #333;
`;

const BackButtonContainer = styled.View`
  margin-left: 8px;
  width: 20px;

  margin-top: 8px;
`;

const TextWrapper = styled.Text`
  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

const TextContainer = styled.View`
  width: 220px;
`;

const BackButtonWrapper = styled.View`
  width: 126px;
  text-align: left;
`;

export default CustomHeader;
