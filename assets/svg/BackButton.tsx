import React from "react";
import Svg, { Circle, Path, Defs } from "react-native-svg";

const BackButton: React.FC = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.47503 7.0667 8.83336L12.5 3.40002"
        stroke="#333333"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BackButton;
