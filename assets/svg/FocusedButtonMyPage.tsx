import React from "react";
import Svg, { Circle, Path, Defs } from "react-native-svg";

const FocusedButtonMyPage: React.FC = () => {
  return (
    <Svg width={40} height={40} viewBox="0 0 1024 1024">
      <Circle
        cx={512}
        cy={321.81}
        r={207.26}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={50}
      />
      <Path
        d="M512,593.53c-209.73,0-379.74,141.44-379.74,315.93H891.74c0-174.48-170.02-315.93-379.74-315.93Z"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={50}
      />
    </Svg>
  );
};

export default FocusedButtonMyPage;
