import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "@/context/AuthContext";
import Background from "@/components/atom/background/Background";
import styled from "styled-components/native";
import Home from "../Home";
import { useNavigation } from "@react-navigation/native";

const ProfileSetting = () => {
  const { userInfo, updateUserProfile, updateUserNickname } = useAuth();
  const [newNickname, setNewNickname] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isNicknameEmpty, setIsNicknameEmpty] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // 현재 이미지 주소
  // 권한 요청 hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const navigation = useNavigation<any>();

  const handleImageSelect = async () => {
    // 권한 확인 코드
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    // 이미지 업로드
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      // 이미지 업로드 취소한 경우가 아닌 경우에만 실행
      setSelectedImage(result.assets[0].uri);
      console.log(selectedImage);
    }

    // const result: ImagePicker.ImagePickerResult =
    //   await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });

    // if (!result.canceled && result.assets.length > 0) {
    //   const imageInfo = result.assets[0];
    //   const response = await fetch(imageInfo.uri);
    //   const blob = await response.blob();
    //   const blobUrl = URL.createObjectURL(blob); // Blob을 URL로 변환
    //   setSelectedImage(blobUrl);
    // }
  };

  const handleProfileUpdate = () => {
    if (selectedImage !== null) {
      console.log(selectedImage);
      updateUserProfile(selectedImage);
    }
  };

  const handleNicknameUpdate = () => {
    updateUserNickname(newNickname);
  };

  const handleUpdate = async () => {
    if (newNickname.trim() === "") {
      setIsNicknameEmpty(true);
    } else {
      try {
        handleNicknameUpdate();
        handleProfileUpdate();
        navigation.navigate("Main");
      } catch (error) {}
    }
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
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        behavior="padding"
        enabled
      >
        <Container>
          <TouchableOpacity onPress={handleImageSelect}>
            <ProfileContainer>
              <UserProfileImg
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : require("../../assets/png/UserDefaultImg.png")
                }
              />
              <ChangeUserProfileImgBtn
                source={require("../../assets/png/ChangeProfileImgBtn.png")}
              />
            </ProfileContainer>
          </TouchableOpacity>

          <TextInput
            placeholder="닉네임을 입력해주세요."
            placeholderTextColor="#939393"
            value={newNickname !== null ? newNickname : ""}
            onChangeText={setNewNickname}
            style={{
              borderColor: isNicknameEmpty ? "#71CEF7" : "#fff",
              borderWidth: isNicknameEmpty ? 2 : 1,
            }}
          />
          <TouchableOpacity onPress={handleUpdate}>
            <UpdateButton>
              <UpdateText>가입완료</UpdateText>
              {/* <MolText
                color={"white"}
                label={"가입완료"}
                weight="bold"
                size="17"
                align={"center"}
              /> */}
            </UpdateButton>
          </TouchableOpacity>
        </Container>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default ProfileSetting;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 450px;
`;

const ProfileContainer = styled.View`
  margin-bottom: 30px;
`;

const UserProfileImg = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  position: relative;
`;

const ChangeUserProfileImgBtn = styled.Image`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 10px;
  bottom: -140px;
`;

const TextInput = styled.TextInput`
  width: 313px;
  height: 49px;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 24px;
  text-align: center;
  display: flex;

  color: #939393;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  margin-top: 170px;
`;

const UpdateButton = styled.Text`
  background-color: #9de1ff;
  width: 313px;
  height: 49px;
  border-radius: 20px;
  text-align: center;
  margin-top: 10px;
  padding-top: 17.5px;
`;

const UpdateText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
`;
