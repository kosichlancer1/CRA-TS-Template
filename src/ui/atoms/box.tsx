import styled from 'styled-components'
import {
  space,
  SpaceProps,
  WidthProps,
  MaxWidthProps,
  MinHeightProps,
  ColorProps,
  FlexProps,
  PositionProps,
  ZIndexProps,
  BorderProps,
  BorderTopProps,
  BorderRightProps,
  BorderBottomProps,
  BorderLeftProps,
  BorderWidthProps,
  BorderStyleProps,
  BorderColorProps,
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  HeightProps,
  LeftProps,
  RightProps,
  BottomProps,
  TopProps,
  right,
  top,
  bottom,
  width,
  maxWidth,
  minHeight,
  color,
  flex,
  position,
  zIndex,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  boxShadow,
  display,
  height,
  left
} from 'styled-system'

interface BoxProps
  extends SpaceProps,
    WidthProps,
    MaxWidthProps,
    MinHeightProps,
    ColorProps,
    FlexProps,
    PositionProps,
    ZIndexProps,
    BorderProps,
    BorderTopProps,
    BorderRightProps,
    BorderBottomProps,
    BorderLeftProps,
    BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderRadiusProps,
    BoxShadowProps,
    DisplayProps,
    HeightProps,
    LeftProps,
    RightProps,
    BottomProps,
    TopProps {}

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${maxWidth}
  ${minHeight}
  ${color}
  ${flex}
  ${position}
  ${zIndex}
  ${border}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
  ${borderLeft}
  ${borderWidth}
  ${borderStyle}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${display}
  ${height}
  ${left}
  ${right}
  ${top}
  ${bottom}

`
