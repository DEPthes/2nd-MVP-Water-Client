import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import MolText from "./Text";

const MyButtonMeta: ComponentMeta<typeof MolText> = {
  title: "atom/MolText",
  component: MolText,
  args: {
    label: "아녕",
    size: "22",
    weight: "bold",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MolText>;

export const Basic: MyButtonStory = (args) => <MolText {...args} />;
