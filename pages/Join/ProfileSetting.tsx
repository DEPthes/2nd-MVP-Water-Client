import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  launchImageLibrary,
  ImagePickerResponse,
} from "react-native-image-picker";
import { useAuth } from "@/context/AuthContext";
import Background from "@/components/atom/background/Background";
import styled from "styled-components/native";

const ProfileSetting = () => {
  const { userInfo, updateUserProfile, updateUserNickname } = useAuth();
  const [newNickname, setNewNickname] = useState(
    userInfo ? userInfo.nickname : ""
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = () => {
    launchImageLibrary(
      { mediaType: "photo" },
      (response: ImagePickerResponse) => {
        if (!response.didCancel && !response.errorMessage) {
          if (response.assets && response.assets[0] && response.assets[0].uri) {
            setSelectedImage(response.assets[0].uri);
          }
        }
      }
    );
  };

  const handleProfileUpdate = () => {
    if (selectedImage !== null) {
      updateUserProfile(selectedImage);
    } else {
      // 이미지가 선택되지 않은 경우에 기본 이미지로 업데이트 처리
      updateUserProfile("../../assets/png/UserDefaultImg.png");
    }
  };

  const handleNicknameUpdate = () => {
    updateUserNickname(newNickname);
  };

  const handleUpdate = () => {
    // 업데이트 버튼을 눌렀을 때 실행되는 로직
    handleNicknameUpdate(); // 닉네임 업데이트
    handleProfileUpdate(); // 프로필 이미지 업데이트
  };

  if (!userInfo) {
    return (
      <View>
        <Text>User information not available</Text>
      </View>
    );
  }

  return (
    <Background>
      <Container>
        <UserProfileImg
          source={
            selectedImage
              ? { uri: selectedImage }
              : require("../../assets/png/UserDefaultImg.png")
          }
        />
        <TouchableOpacity onPress={handleImageSelect}>
          <ChangeUserProfileImgBtn
            source={require("../../assets/png/ChangeProfileImgBtn.png")}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="닉네임을 입력하세요"
          value={newNickname}
          onChangeText={setNewNickname}
        />
        <TouchableOpacity onPress={handleUpdate}>
          <UpdateButton>업데이트</UpdateButton>
        </TouchableOpacity>
      </Container>
    </Background>
  );
};

export default ProfileSetting;

const Container = styled.View`
  background-color: red;
`;

const UserProfileImg = styled.Image``;

const ChangeUserProfileImgBtn = styled.Image``;

const TextInput = styled.TextInput`
  border: 1px solid #000;
  padding: 10px;
  margin-top: 10px;
`;

const UpdateButton = styled.Text`
  background-color: blue;
  color: white;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
`;
