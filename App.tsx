import {
  Button,
  Image,
  LogBox,
  Pressable,
  StyleSheet,
  Text,
  View,
  YellowBox,
} from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonStorage from "./assets/svg/ButtonStorage";
import ButtonMyPage from "./assets/svg/ButtonMyPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/Main";
import DiaryWriting from "./pages/Diary/DiaryWriting";
import BackButton from "./assets/svg/BackButton";
import CrystalReply from "./pages/Storage/CrystalReply";
import React from "react";
import CustomHeader from "./components/molecule/header/CustomHeader";
import DiaryAnswer from "./pages/Diary/DiaryAnswer";
import Login from "./pages/Join/Login";
import { AuthProvider } from "./context/AuthContext";

import AppLoading from "./pages/Splash/AppLoading";
import ProfileSetting from "./pages/Join/ProfileSetting";
import ReplyBoxDetail from "./pages/Storage/ReplyBoxDetail";
import SplashLoading from "./pages/Splash/SplashLoading";

interface Warning {
  message: string;
}
function App() {
  LogBox.ignoreAllLogs();
  const Tab = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
        <Tab.Navigator initialRouteName="SplashLoading">
          <Tab.Screen
            name="SplashLoading"
            component={SplashLoading}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="DiaryWriting"
            component={DiaryWriting}
            options={({ navigation }) => ({
              title: "일기 쓰기",
              headerTransparent: true, // Make header transparent

              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackButton />
                </Pressable>
              ),
            })}
          />
          <Tab.Screen
            name="DiaryAnswer"
            component={DiaryAnswer}
            options={() => ({
              title: "일기 쓰기",
              headerTransparent: true, // Make header transparent
              headerLeft: () => <></>,
            })}
          />

          <Tab.Screen
            name="CrystalReply"
            component={CrystalReply}
            options={({ navigation }) => ({
              title: "결정 보관함",
              headerTransparent: true,
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="결정 보관함"
                  showBackButton={true}
                  showBottomLine={true}
                />
              ),
              tabBarIcon: () => (
                <ButtonContainer>
                  <ButtonStorage />
                </ButtonContainer>
              ),
            })}
          />

          <Tab.Screen
            name="ReplyBoxDetail"
            component={ReplyBoxDetail}
            options={({ navigation }) => ({
              title: "결정 보관함",
              headerTransparent: true,
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="결정 보관함"
                  showBackButton={true}
                  showBottomLine={true}
                />
              ),
              tabBarIcon: () => (
                <ButtonContainer>
                  <ButtonStorage />
                </ButtonContainer>
              ),
            })}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={() => ({
              headerTransparent: true,
              headerTitle: "",
            })}
          />
          <Tab.Screen
            name="ProfileSetting"
            component={ProfileSetting}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerTitle: "",
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="프로필 설정"
                  showBackButton={true}
                  showBottomLine={true}
                />
              ),
              screenNavigation: navigation,
            })}
          />
          <Tab.Screen
            name="AppLoading"
            component={AppLoading}
            options={() => ({
              headerTransparent: true,
              headerTitle: "",
            })}
          />
        </Tab.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled.View`
  width: 100px;
  height: 40px;
  background-color: blue;
`;
const ButtonContainer = styled.View`
  margin-top: 25px;
`;
export default AppEntryPoint;

// tabBarIcon: () => (
//   <View style={{position: 'relative'}}>
//     <Animated.Image
//       source={require('../../../assets/images/HomeIcon2.png')}
//       style={{
//         ...animationStyle,
//         width: Platform.OS === 'android' ? 71 : 65,
//         height: Platform.OS === 'android' ? 66 : 61,
//         shadowColor: '#000',
//         shadowOffset: {width: 0, height: 2},
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       }}
//     />
//   </View>
// ),
