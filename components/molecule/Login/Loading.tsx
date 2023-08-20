import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Loading = () => {
  return (
    <ImageBackground
      source={require("../../../assets/png/LoadingBackground.png")} // 이미지 경로 설정
      style={styles.overlay}
    >
      <ActivityIndicator size="large" color="#fff" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});

export default Loading;
