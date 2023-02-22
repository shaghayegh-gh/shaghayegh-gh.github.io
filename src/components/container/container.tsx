import { ContainerProps } from './container-type'
import { Wrapper, Box } from './container-style'

const Container = ({ children, background = '#fff' }: ContainerProps) => {
  return (
    <Wrapper background={background}>
      <Box>{children}</Box>
    </Wrapper>
  )
}

export default Container
