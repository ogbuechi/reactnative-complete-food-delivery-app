import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PinBig = ({ strokeColor }) => (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0 1 15 0Z"
            stroke={strokeColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke={strokeColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default PinBig;
