import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RouteParamList } from "@/components/molecule/RouteParamList";

const { width, height } = Dimensions.get("window");
const images = [
  require("../../assets/png/splash/splash1.png"),
  require("../../assets/png/splash/splash2.png"),
  require("../../assets/png/splash/splash3.png"),
];

const SplashLoading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation =
    useNavigation<StackNavigationProp<RouteParamList, "SplashLoading">>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Image
      source={images[currentIndex]}
      style={[{ width, height }]}
      resizeMode="cover"
    />
  );
};

export default SplashLoading;
