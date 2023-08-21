import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonMyPage from "../assets/svg/ButtonMyPage";
import ButtonStorage from "../assets/svg/ButtonStorage";
import Storage from "./Storage/Storage";
import Home from "./Home";
import MyPage from "./MyPage";
import styled from "styled-components/native";
import CustomHeader from "../components/molecule/header/CustomHeader";
import Login from "./Join/login";
import FocusedButtonStorage from "@/assets/svg/FocusedButtonStorage";
import FocusedButtonMyPage from "@/assets/svg/FocusedButtonMyPage";

const Main = () => {
  const Tab = createBottomTabNavigator();
  const isTabFocused = (state: any, routeName: string) => {
    const route = state.routes.find((r: any) => r.name === routeName);
    return route ? route.state?.index === 0 : false;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#71CEF7", height: 60 },
        tabBarLabel: () => null,
        headerStyle: {
          backgroundColor: "transparent", // Make the header transparent
        },
        headerTransparent: true, // Apply transparency to the header
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          title: "결정 보관함",
          header: () => (
            <CustomHeader
              navigation={""}
              title="결정 보관함"
              showBackButton={false}
              showBottomLine={true}
            />
          ),
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomWidth: 1,
            borderBottomColor: "transparent",
          },
          tabBarIcon: ({ focused }) => (
            <ButtonContainer>
              {focused ? <FocusedButtonStorage /> : <ButtonStorage />}
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
                marginBottom: 60,
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
          tabBarIcon: ({ focused }) => (
            <ButtonContainer>
              {focused ? <FocusedButtonMyPage /> : <ButtonMyPage />}
            </ButtonContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const ButtonContainer = styled.View``;
const TabTitle = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
`;
