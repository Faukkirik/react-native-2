import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props: SvgProps) => (
    <Svg
        fill="none"
        width={24}
        height={24}
        {...props}
    >
        <Path
            fill="#080341"
            fillRule="evenodd"
            d="M12.75 3v3.046a5.97 5.97 0 0 1 2.93 1.214l2.154-2.154 1.06 1.06-2.154 2.155a5.97 5.97 0 0 1 1.214 2.929H21v1.5h-3.046a5.971 5.971 0 0 1-1.214 2.93l2.154 2.154-1.06 1.06-2.155-2.154a5.97 5.97 0 0 1-2.929 1.214V21h-1.5v-3.046a5.97 5.97 0 0 1-2.93-1.214l-2.153 2.154-1.061-1.06 2.154-2.155a5.97 5.97 0 0 1-1.214-2.929H3v-1.5h3.046A5.97 5.97 0 0 1 7.26 8.32L5.106 6.167l1.06-1.06L8.321 7.26a5.97 5.97 0 0 1 2.929-1.214V3h1.5Zm-3.9 5.786a4.5 4.5 0 1 1 6.299 6.429l-6.298-6.43Z"
            clipRule="evenodd"
        />
    </Svg>
)
export const MemoSvgDay = memo(SvgComponent)
