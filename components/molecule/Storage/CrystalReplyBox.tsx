import { View, Text } from "react-native";
import React from "react";
import ReplyBox from "./ReplyBox";

const CrystalReplyBox = () => {
  return (
    <View>
      <ReplyBox
        date={"2023/08/02 WED"}
        content={
          "정말 너무 힘들었겠다...나였어도 그렇게 반응했을거야. 그래도 잘 참아줬어. 대견하고 기특하다."
        }
      />
      <ReplyBox
        date={"2023/08/02 WED"}
        content={
          "정말 너무 힘들었겠다...나였어도 그렇게 반응했을거야. 그래도 잘 참아줬어. 대견하고 기특하다."
        }
      />
      <ReplyBox
        date={"2023/08/02 WED"}
        content={
          "정말 너무 힘들었겠다...나였어도 그렇게 반응했을거야. 그래도 잘 참아줬어. 대견하고 기특하다."
        }
      />
    </View>
  );
};

export default CrystalReplyBox;
