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
        <View>
          {showBackButton && (
            <Pressable onPress={() => navigation.goBack()}>
              <BackButtonContainer>
                <BackButton />
              </BackButtonContainer>
            </Pressable>
          )}
        </View>
        <View>
          <MolText
            label={title}
            size="17"
            weight="regular"
            align="center"
            color={"black"}
          />
        </View>
        {showBottomLine && <BottomLine />}
      </HeaderContainer>
    </SafeAreaViewComponent>
  );
};

const HeaderContainer = styled.View`
  padding-top: 8px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const BottomLine = styled.View`
  width: 390px;
  margin-top: 13px;
  height: 0.4px;

  background: #333;
`;

const BackButtonContainer = styled.View``;

export default CustomHeader;
