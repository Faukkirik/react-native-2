import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"
import {memo} from "react"

const SvgComponent = (props: SvgProps) => (
    <Svg width={16} height={16} {...props}>
        <Path
            fill={'black'}
            fillRule="evenodd"
            d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3a1 1 0 1 1 0 2h-.154l-.704 9.153A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.154 5H2a1 1 0 0 1 0-2h3V2Zm2 1h2V2H7v1ZM4.16 5l.692 9h6.296l.692-9H4.16Z"
        />
    </Svg>
)
export const MemoSvgComponent = memo(SvgComponent)