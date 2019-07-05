import styled from 'styled-components'
import {
  SpaceProps,
  FontSizeProps,
  TextAlignProps,
  LineHeightProps,
  FontWeightProps,
  DisplayProps,
  ColorProps,
  MaxWidthProps,
  WidthProps,
  space,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  display,
  color,
  maxWidth,
  width
} from 'styled-system'

interface TextProps
  extends SpaceProps,
    FontSizeProps,
    TextAlignProps,
    LineHeightProps,
    FontWeightProps,
    DisplayProps,
    ColorProps,
    MaxWidthProps,
    WidthProps {}

export const Text = styled.p<TextProps>`
  ${space}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${display}
  ${color}
  ${maxWidth}
  ${width}
`

Text.defaultProps = {
  m: 0,
  color: 'primary',
  fontSize: '14px',
  fontWeight: 'normal'
}
