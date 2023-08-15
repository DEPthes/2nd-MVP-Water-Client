import { View, Text } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp

interface CryStalReplyProps {
  navigation: NavigationProp<any>; // Set the type
}

const CryStalReply = ({ navigation }: CryStalReplyProps) => {
  return (
    <View>
      <Text>CryStalReply</Text>
    </View>
  );
};

export default CryStalReply;
