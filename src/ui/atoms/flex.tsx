import styled from 'styled-components'
import {
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  display,
  DisplayProps,
  flexBasis,
  FlexBasisProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  border,
  BordersProps,
  borderTop,
  BorderTopProps,
  borderRight,
  BorderRightProps,
  borderBottom,
  BorderBottomProps,
  borderLeft,
  BorderLeftProps,
  borderWidth,
  BorderWidthProps,
  borderStyle,
  BorderStyleProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  position,
  PositionProps,
  height,
  HeightProps
} from 'styled-system'

interface FlexProps
  extends AlignItemsProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps,
    DisplayProps,
    FlexBasisProps,
    SpaceProps,
    WidthProps,
    MaxWidthProps,
    MaxHeightProps,
    BordersProps,
    BorderTopProps,
    BorderRightProps,
    BorderBottomProps,
    BorderLeftProps,
    BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderRadiusProps,
    BackgroundProps,
    ColorProps,
    PositionProps,
    HeightProps {}

export const Flex = styled.div<FlexProps>`
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${flexBasis}
  ${display}
  ${space}
  ${width}
  ${maxWidth}
  ${maxHeight}
  ${border}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
  ${borderLeft}
  ${borderWidth}
  ${borderStyle}
  ${borderColor}
  ${borderRadius}
  ${background}
  ${color}
  ${position}
  ${height}
`

Flex.defaultProps = {
  display: 'flex'
}
