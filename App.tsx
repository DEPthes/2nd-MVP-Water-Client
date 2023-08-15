import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Storage from "./pages/Storage";
import ButtonStorage from "./assets/svg/ButtonStorage";
import ButtonMyPage from "./assets/svg/ButtonMyPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/Main";
import DiaryWriting from "./pages/Diary/DiaryWriting";
import BackButton from "./assets/svg/BackButton";
import DiaryAnswer from "./pages/Diary/DiaryAnswer";

function App() {
  const Tab = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
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
      </Tab.Navigator>
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

const CutomHeader = styled.View`
  width: "100%";
  height: "100%";
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`;
