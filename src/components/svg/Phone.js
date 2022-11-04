import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Phone() {
    return (
        <Svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.667 11.28v2a1.332 1.332 0 0 1-1.454 1.333 13.193 13.193 0 0 1-5.753-2.046 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.073 2.48a8.56 8.56 0 0 0 .467 1.873 1.333 1.333 0 0 1-.3 1.407l-.847.847a10.666 10.666 0 0 0 4 4l.847-.847a1.334 1.334 0 0 1 1.407-.3 8.561 8.561 0 0 0 1.873.467 1.334 1.334 0 0 1 1.147 1.353Z"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
