import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonMyPage from "../assets/svg/ButtonMyPage";
import ButtonStorage from "../assets/svg/ButtonStorage";
import Storage from "./Storage";
import Home from "./Home";
import MyPage from "./MyPage";
import styled from "styled-components/native";

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#71CEF7", height: 60 },
        tabBarLabel: () => null,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          title: "결정 보관함",
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          },
          tabBarIcon: () => (
            <ButtonContainer>
              <ButtonStorage />
            </ButtonContainer>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "물은 답을 알고 있다",
          headerStyle: {
            backgroundColor: "transparent",
          },
          tabBarIcon: () => (
            <Image
              source={require(".././assets/png/ButtonHome.png")}
              style={{
                width: 66,
                height: 80,
                marginBottom: 4,
                objectFit: "contain",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "",
          headerTransparent: true,
          tabBarIcon: () => (
            <ButtonContainer>
              <ButtonMyPage />
            </ButtonContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const ButtonContainer = styled.View`
  margin-top: 25px;
`;
