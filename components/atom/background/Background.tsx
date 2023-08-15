import React, { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text } from "react-native";

type ContainerProps = {
  children: ReactNode;
};

const Background: React.FC<ContainerProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(0, 148, 255, 0.53)", "rgba(209, 236, 255, 0)"]}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default Background;
