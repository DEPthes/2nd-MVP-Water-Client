import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  userId: number;
  email: string;
  nickname: string;
  image: string;
  token: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  userInfo: UserData | null;
  setUserInfo: (value: UserData) => void;
  token: string;
  setToken: (value: string) => void;
  login: () => void;
  logout: () => void;
  updateUserProfile: (selectedImage: string) => void;
  updateUserNickname: (newNickname: string) => void;
  updateUserProfileDefault: (defaultImage: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  const createApiUrl = (path: string): string => `http://3.36.4.36:8080${path}`;
  const params = {
    client_id: "371c0a9245a201f6a5a2546f8f94e4d7",
    redirect_uri: "http://3.36.4.36:8080/auth/login",
    response_type: "code",
  };

  const login = () => {
    const apiUrl = createApiUrl("/auth/login");
    axios
      .get(apiUrl, { params })
      .then((response) => {
        const responseData = response.data;
        if (responseData.status === 200 && responseData.data.token) {
          setIsAuthenticated(true);
          console.log(responseData.data);
          const newToken = responseData.data.token; // 새로운 토큰 저장
          setToken(newToken); // 토큰 업데이트

          // axios 요청 완료 후에 상태값 출력
          console.log("isAuthenticated after setUserInfo", isAuthenticated);
          console.log("userToken after setUserToken", newToken);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log("login API 요청 실패:", error);
      });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    login();
  }, []);

  const updateUserProfile = (selectedImage: string | null) => {
    const apiUrl = createApiUrl("/mypage/image");

    const formData = new FormData();
    // formData.append("newNickname", newNickname);

    if (selectedImage) {
      const imageUriParts = selectedImage.split(".");
      const imageExtension = imageUriParts[imageUriParts.length - 1];

      // 이미지를 Blob으로 변환
      fetch(selectedImage)
        .then((response) => response.blob())
        .then((blob) => {
          formData.append("selectedImage", blob, `profile.${imageExtension}`);

          // FormData를 사용하여 업데이트 요청 보내기
          axios
            .patch(apiUrl, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              console.log("profile Img update 성공");
            })
            .catch((error) => {
              console.log("updateUserProfile API 요청 실패:", error);
            });
        });
    } else {
      // 이미지가 없는 경우에는 그냥 FormData만 사용하여 업데이트 요청 보내기
      //   axios
      //     .patch(apiUrl, formData, {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //         "Content-Type": "multipart/form-data",
      //       },
      //     })
      //     .then((response) => {
      //       // 업데이트 성공 처리
      //       // 업데이트 후에 필요한 작업을 수행할 수 있습니다.
      //     })
      //     .catch((error) => {
      //       console.log("updateUserProfile API 요청 실패:", error);
      //     });
    }
  };

  const updateUserNickname = (newNickname: string) => {
    const apiUrl = createApiUrl("/mypage/nickname");

    const requestData = {
      newNickname: newNickname,
    };

    axios
      .patch(apiUrl, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // 닉네임 업데이트 성공 처리
        // 업데이트 후에 필요한 작업을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.log("updateNickname API 요청 실패:", error);
      });
  };

  const updateUserProfileDefault = () => {
    const apiUrl = createApiUrl("/mypage/default-image");

    axios
      .patch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // 닉네임 업데이트 성공 처리
        // 업데이트 후에 필요한 작업을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.log("updateUserProfileDefault API 요청 실패:", error);
      });
  };

  useEffect(() => {
    if (userInfo) {
      // userInfo가 업데이트되면 여기에서 원하는 동작을 수행할 수 있습니다.
    }
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userInfo,
        token,
        setIsAuthenticated,
        setToken,
        setUserInfo,
        updateUserProfile,
        updateUserNickname,
        updateUserProfileDefault,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
