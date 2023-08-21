import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AppNavProps } from "@/components/molecule/Storage/ParamList";
import Background from "@/components/atom/background/Background";
import styled from "styled-components/native";
import MolText from "@/components/atom/Text/Text";
import { LinearGradient } from "expo-linear-gradient";

const ReplyBoxDetail = ({ route }: AppNavProps<"ReplyBoxDetail">) => {
  const { date, content } = route.params;
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Background>
      <Container>
        <DateContainer>
          <MolText
            label={date}
            size="22"
            weight="bold"
            align="center"
            color="black"
          />
        </DateContainer>
        <ScrollView>
          <ContentContainer>
            <MolText
              label={content}
              size="17"
              weight="regular"
              align="center"
              color="black"
            />
            <CloseBtn onPress={handleBackPress}>
              <MolText
                label="닫기"
                size="17"
                weight="regular"
                align="center"
                color="white"
              />
            </CloseBtn>
          </ContentContainer>
        </ScrollView>
      </Container>
      <LinearBackground>
        <LinearGradient
          colors={["rgba(0, 148, 255, 0.53)", "rgba(209, 236, 255, 0)"]}
          style={{ flex: 1 }}
        />
      </LinearBackground>
    </Background>
  );
};

export default ReplyBoxDetail;

const Container = styled.View`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateContainer = styled.Text`
  color: #000;
  text-align: center;
  font-size: 22.661px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ContentContainer = styled.View`
  width: fit-content;
  height: fit-content;
  background: #fff;
  overflow: hidden;
  padding: 18px 24px;
  border-radius: 25px 25px 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinearBackground = styled.View`
  position: absolute;
  bottom: 0;
`;

const CloseBtn = styled(TouchableOpacity)`
  width: 55px;
  height: 35px;
  background-color: rgba(120, 120, 120, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-top: 20px;
`;
