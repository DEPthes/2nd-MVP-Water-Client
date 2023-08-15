import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView as AndroidSafeAreaView } from "react-native-safe-area-context";
import { Platform, SafeAreaView as iOSSafeAreaView, Text } from "react-native";

type ContainerProps = {
  children: ReactNode;
};

const Background: React.FC<ContainerProps> = ({ children }) => {
  const SafeAreaViewComponent =
    Platform.OS === "ios" ? iOSSafeAreaView : AndroidSafeAreaView;

  return (
    <LinearGradient
      colors={["rgba(0, 148, 255, 0.53)", "rgba(209, 236, 255, 0)"]}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <SafeAreaViewComponent>{children}</SafeAreaViewComponent>
    </LinearGradient>
  );
};

export default Background;
