import React from "react";
import Svg, { Circle, Path, Defs, Rect } from "react-native-svg";

const FocusedButtonStorage: React.FC = () => {
  return (
    <Svg width={40} height={40} viewBox="0 0 1024 1024">
      <Path
        d="M121.2,331.34H904.56V891.57c0,11.27-9.15,20.43-20.43,20.43H141.63c-11.27,0-20.43-9.15-20.43-20.43V331.34h0Z"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={50}
      />
      <Path
        d="M122.22,112H901.78c12.12,0,21.96,9.84,21.96,21.96v127.96H100.26v-127.96c0-12.12,9.84-21.96,21.96-21.96Z"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={50}
      />
      <Rect
        x="400.89"
        y="426.79"
        width="223.99"
        height="59.18"
        rx="13.79"
        ry="13.7"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={50}
      />
    </Svg>
  );
};

export default FocusedButtonStorage;
