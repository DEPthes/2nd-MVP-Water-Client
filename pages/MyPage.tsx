import {
  View,
  Text,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import Background from "../components/atom/background/Background";
import MolText from "../components/atom/Text/Text";
import styled from "styled-components/native";
import MolButton from "../components/atom/Button/MolButton";
import axios from "axios";
import InformationBanner from "@/components/molecule/MyPage/InformationBanner";
import { useState } from "react";
import { useRef } from "react";
import MyPageWidget from "@/components/organisms/widget/MyPageWidget";
import * as ImagePicker from "expo-image-picker";

const MyPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [crystalCount, setCrystalCount] = useState(0);
  const [sinceDate, setSinceDate] = useState(0);
  const [isEditingNickname, setIsEditingNickName] = useState(false);
  const textInputRef = useRef<TextInput | null>(null);
  const [isImageChangeOn, setIsImageChangeOn] = useState(false);

  const ImageChangeModalOffHandler = () => {
    setIsImageChangeOn(false);
  };

  const textInputChangeHandler = (e: any) => {
    setName(e);
  };

  const ImageChangeHandler = () => {
    console.log("프로필 이미지 변경");
    setIsImageChangeOn(true);
  };

  const changeFromAlbumHandler = async () => {
    // image library 접근에 대한 허가 필요 없음
    // ImagePicker를 이용해 Image형식의 파일을 가져온다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].type);
      setImage(result.assets[0].uri);
      const formData = new FormData();

      // 이미지 파일 추가
      // formData.append("file", {
      //   uri: result.assets[0].uri,
      //   name: "image",
      //   type: "image", // 이미지 MIME 타입
      // });
      const apiUrl = `http://3.36.4.36:8080/mypage/image`;

      const requestBody = {
        image: formData,
      };
      const headers = {
        Authorization:
          "Bearer KvOxVva9xKjsl2mZ44aLt8Wa_bJCvhWaBDQcqEVfCiolTgAAAYoSco7Z",
        "Content-Type": "application/json",
      };

      axios
        .patch(apiUrl, requestBody, { headers })
        .then((response) => {
          console.log("API 요청 성공:", response.data.data);
        })
        .catch((error) => {
          console.error("API 요청 실패:", error);
        });
    }

    setIsImageChangeOn(false);
  };

  const changeToDefaultImageHandler = () => {
    const apiUrl = `http://3.36.4.36:8080/mypage/default-image`;
    const requestBody = {};
    const headers = {
      Authorization:
        "Bearer KvOxVva9xKjsl2mZ44aLt8Wa_bJCvhWaBDQcqEVfCiolTgAAAYoSco7Z",
      "Content-Type": "application/json",
    };

    axios
      .patch(apiUrl, requestBody, { headers })
      .then((response) => {
        setImage(response.data.data.profileImageUrl);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
    setIsImageChangeOn(false);
  };

  const handlePress = () => {
    if (isEditingNickname) {
      const apiUrl = `http://3.36.4.36:8080/mypage/nickname`;

      const requestBody = {
        newNickname: name,
      };
      const headers = {
        Authorization:
          "Bearer KvOxVva9xKjsl2mZ44aLt8Wa_bJCvhWaBDQcqEVfCiolTgAAAYoSco7Z",
        "Content-Type": "application/json",
      };

      axios
        .patch(apiUrl, requestBody, { headers })
        .then((response) => {
          console.log("API 요청 성공:", response.data.data);
        })
        .catch((error) => {
          console.error("API 요청 실패:", error);
        });
      setIsEditingNickName(false);
    }
  };

  const fixNicknameHandler = () => {
    setIsEditingNickName(true);
    setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    const apiUrl = `http://3.36.4.36:8080/mypage/`;

    // API 요청 헤더 설정s
    const headers = {
      Authorization:
        "Bearer KvOxVva9xKjsl2mZ44aLt8Wa_bJCvhWaBDQcqEVfCiolTgAAAYoSco7Z",
      "Content-Type": "application/json",
    };

    // POST 요청 보내기
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("API 요청 성공:", response.data.data.image);
        setName(response.data.data.nickname);
        setSinceDate(response.data.data.sinceDate);
        setImage(response.data.data.image);
        setCrystalCount(response.data.data.crystalCount);
      })
      .catch((error) => {
        console.error("API 요청 실패:", error);
      });
  }, []);
  return (
    <>
      {isImageChangeOn ? (
        <WidgetContainer onPress={ImageChangeModalOffHandler}>
          <MyPageWidget
            changeFromAlbumHandler={changeFromAlbumHandler}
            changeToDefaultHandler={changeToDefaultImageHandler}
          />
        </WidgetContainer>
      ) : (
        ""
      )}
      <Background>
        <Pressable onPress={handlePress}>
          <Container>
            <ProfileContainer>
              <ProfileImageContainer>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 50,
                  }}
                />

                <ProfileImageFixIconContainer onPress={ImageChangeHandler}>
                  <Image
                    source={require("@/assets/png/fixIcon.png")}
                    style={{
                      width: 15,
                      height: 15,
                      objectFit: "contain",
                    }}
                  />
                </ProfileImageFixIconContainer>
              </ProfileImageContainer>
              <NicknameTextInput
                ref={textInputRef}
                editable={isEditingNickname}
                value={name}
                onChangeText={textInputChangeHandler}
              />

              <Pressable onPress={fixNicknameHandler}>
                <FixNickNameContainer>
                  <Image
                    source={require("@/assets/png/fixIcon.png")}
                    style={{
                      width: 15,
                      height: 15,
                      objectFit: "contain",
                    }}
                  />
                </FixNickNameContainer>
              </Pressable>
            </ProfileContainer>
            <InformationBannerContainer>
              <InformationBanner
                title="결정개수"
                value={crystalCount}
                unit="개"
              />
              <InformationBanner
                title="일기 쓴 지"
                value={sinceDate}
                unit="일째"
              />
            </InformationBannerContainer>
            <Line />
            <ButtonContainer>
              <MolButton
                ColorType="white"
                SizeType="long"
                text="로그아웃"
                textSize="12"
                textWeight="regular"
              />
              <MolButton
                ColorType="white"
                SizeType="long"
                text="탈퇴하기"
                textSize="12"
                textWeight="regular"
                mt="14"
              />
            </ButtonContainer>
            <MolText
              color="black"
              label="ⓒ 2023. DEPth. All rights reserved."
              align="left"
              weight="regular"
              size="12"
              mt="300"
            />
          </Container>
        </Pressable>
      </Background>
    </>
  );
};

export default MyPage;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ProfileContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImageContainer = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  background-color: white;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const InformationBannerContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 40px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 26px;
`;

const NicknameTextInput = styled.TextInput`
  color: black;
  font-weight: 700;
  font-size: 22px;
` as unknown as typeof TextInput;

const FixNickNameContainer = styled.View`
  margin-left: 3px;
`;

const ProfileImageFixIconContainer = styled.Pressable`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: #d9d9d9;
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WidgetContainer = styled.Pressable`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(48, 48, 48, 0.7);
  position: absolute;
  z-index: 1;
`;
