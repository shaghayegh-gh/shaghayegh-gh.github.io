import styled from 'styled-components'
import { ContainerProps } from './container-type'

export const Wrapper = styled.div<Pick<ContainerProps, 'background'>>`
  background: ${({ background }) => background};
`
export const Box = styled.div`
  max-width: 70rem;
  margin: auto;
  padding: 4rem 2rem;
`
