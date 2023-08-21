import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import Background from "@/components/atom/background/Background";
import MolText from "@/components/atom/Text/Text";

import axios from "axios";
import WebView from "react-native-webview";
import { useAuth } from "@/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import Loading from "@/components/molecule/Login/Loading";

const Login = () => {
  const [isWebViewVisible, setWebViewVisible] = React.useState(false);
  const [webViewUrl, setWebViewUrl] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const { isAuthenticated, setIsAuthenticated, setToken, setUserInfo, token } =
    useAuth();
  const consentCompleteUrl = "http://3.36.4.36:8080/auth/kakao?code=";
  const navigation = useNavigation<any>();

  const handleButtonPress = () => {
    setWebViewVisible(true); // 웹뷰 보이게 설정
    setWebViewUrl("http://3.36.4.36:8080/auth/login");
  };

  const params = {
    client_id: "371c0a9245a201f6a5a2546f8f94e4d7",
    redirect_uri: "http://3.36.4.36:8080/auth/login",
    response_type: "code",
  };

  const handleWebViewNavigationStateChange = async (newNavState: any) => {
    const newUrl = newNavState.url;
    if (newUrl.includes(consentCompleteUrl)) {
      const apiUrl = "http://3.36.4.36:8080/auth/login";
      setLoading(true);
      axios
        .get(apiUrl, { params })
        .then((response) => {
          const responseData = response.data;
          if (responseData.status === 200 && responseData.data.token) {
            setIsAuthenticated(true);
            console.log(responseData.data);
            const newToken = responseData.data.token;
            setToken(newToken);
            const userInfo = responseData.data;
            setUserInfo(userInfo);

            console.log("isAuthenticated after setUserInfo", isAuthenticated);
            console.log("userToken after setUserToken", newToken);

            setWebViewVisible(false);
            setLoading(false);
            navigation.navigate("ProfileSetting");
            return;
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log("login API 요청 실패:", error);
        });
    }
  };

  const handleStartPress = () => {
    if (isAuthenticated) {
      navigation.navigate("Main");
    }
  };

  const injectedJavaScript = `
  const originalPushState = window.history.pushState;
  window.history.pushState = function(state, title, url) {
    if (url.includes('${consentCompleteUrl}')) {
      originalPushState.call(this, state, title, 'http://3.36.4.36:8080/auth/kakao');
    } else {
      originalPushState.apply(this, arguments);
    }
  };
`;

  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      {isWebViewVisible ? (
        <>
          {isLoading && <Loading />}
          <WebView
            source={{ uri: webViewUrl }}
            style={{ flex: 1, width: "100%" }}
            onLoadStart={() => setLoading(true)} // 로딩 상태 변경 시작 시
            onLoadEnd={() => setLoading(false)} // 로딩 상태 변경 완료 시
            onNavigationStateChange={handleWebViewNavigationStateChange}
            injectedJavaScript={injectedJavaScript}
          />
        </>
      ) : (
        <Background>
          {token ? (
            <Container style={{ paddingBottom: windowHeight * 0.1 }}>
              <TouchableOpacity onPress={handleStartPress}>
                <ImgContainer style={{ paddingBottom: windowHeight * 0.2 }}>
                  <ServiceImg
                    source={require("../../assets/png/Login-ServiceName.png")}
                  />
                </ImgContainer>
                <MolText
                  color={"black"}
                  label={"터치하여 시작하기"}
                  align={"center"}
                  size="17"
                />
              </TouchableOpacity>
            </Container>
          ) : (
            <Container style={{ paddingBottom: windowHeight * 0.1 }}>
              <ImgContainer>
                <ServiceImg
                  source={require("../../assets/png/Login-ServiceName.png")}
                />
              </ImgContainer>
              <TouchableOpacity onPress={handleButtonPress}>
                <ButtonContainer>
                  <KakaoContainer>
                    <KakaoImg source={require("../../assets/png/kakao.png")} />
                    <MolText
                      label="카카오로 시작하기"
                      size="17"
                      weight="regular"
                      align="center"
                      color="black"
                    />
                  </KakaoContainer>
                </ButtonContainer>
              </TouchableOpacity>
            </Container>
          )}
        </Background>
      )}
    </>
  );
};

export default Login;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const ImgContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const ServiceImg = styled.Image`
  margin-right: 20px;
  object-fit: contain;
`;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const KakaoContainer = styled.View`
  border-radius: 30px;
  background: #fae407;
  width: 190px;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const KakaoImg = styled.Image``;
