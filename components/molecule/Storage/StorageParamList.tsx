import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ParamList = {
  CrystalReply: { crystalId: number; red: number; green: number; blue: number };
  ReplyBoxDetail: { date: string; content: string };
};

export type AppNavProps<T extends keyof ParamList> = {
  [x: string]: any;
  navigate(arg0: string, arg1: { date: string; content: string }): unknown;
  navigation: StackNavigationProp<ParamList, T>;
  route: RouteProp<ParamList, T>;
};
