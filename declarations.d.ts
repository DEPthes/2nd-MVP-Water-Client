declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.svg" {
  import { ReactElement } from "react";
  const content: ReactElement;
  export default content;
}
