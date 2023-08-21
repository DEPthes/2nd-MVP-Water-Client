import MolButton from "@/components/atom/Button/MolButton";
import MolText from "@/components/atom/Text/Text";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

type ownProps = {
  onPressHandler: () => void;
  label: string;
};

const AfterAnswerWidget = (props: ownProps) => {
  const { onPressHandler, label } = props;
  return (
    <Container>
      <MolText
        color="black"
        align="center"
        weight="bold"
        size="22"
        label={label}
      />
      <Pressable onPress={onPressHandler}>
        <MolButton ColorType="blue" SizeType="small" text="확인" mt="40px" />
      </Pressable>
    </Container>
  );
};

export default AfterAnswerWidget;

const Container = styled.View`
  padding-top: 62px;
  width: 292px;
  height: 223px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
