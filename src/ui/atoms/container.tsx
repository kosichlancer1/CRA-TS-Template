import styled from 'styled-components'
import { space, width, maxWidth, margin } from 'styled-system'
import { Box } from './box'

export const Container = styled(Box)`
  ${space}
  ${margin}
  ${width}
  ${maxWidth}
  padding: 0 8px;

  @media(min-width: 640px) {
    padding: 0 15px;
  }
`
