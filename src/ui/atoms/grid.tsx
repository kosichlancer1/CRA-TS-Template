import styled from 'styled-components'
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  border,
  BorderProps,
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
  display,
  DisplayProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  gridGap,
  GridGapProps,
  gridColumn,
  GridColumnProps,
  gridAutoFlow,
  GridAutoFlowProps
} from 'styled-system'

interface GridProps
  extends SpaceProps,
    WidthProps,
    MaxWidthProps,
    MinHeightProps,
    BorderProps,
    BorderTopProps,
    BorderRightProps,
    BorderBottomProps,
    BorderLeftProps,
    BorderWidthProps,
    BorderStyleProps,
    BorderColorProps,
    BorderRadiusProps,
    DisplayProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridGapProps,
    GridColumnProps,
    GridAutoFlowProps {}

export const Grid = styled.div<GridProps>`
  ${display}
  ${space}
  ${width}
  ${maxWidth}
  ${minHeight}
  ${border}
  ${borderTop}
  ${borderRight}
  ${borderBottom}
  ${borderLeft}
  ${borderWidth}
  ${borderStyle}
  ${borderColor}
  ${borderRadius}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${gridColumn}
  ${gridAutoFlow}
`

Grid.defaultProps = {
  display: 'grid'
}
