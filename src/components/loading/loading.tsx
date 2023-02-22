import styled from 'styled-components'

type Props = {
  background: string
  height: string
}
const Loading = () => {
  return (
      <Box>
        <Wrapper>
          <Bar background="#23d5ab" height={'.1s'} />
          <Bar background="#23a6d5" height={'.2s'} />
          <Bar background="#e73c7e" height={'.3s'} />
          <Bar background="#ee7752" height={'.4'} />
        </Wrapper>
      </Box>
  )
}

export default Loading

const Box = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
  position: relative;
`
const Bar = styled.div<Props>`
  margin: auto;
  width: 1rem;
  height: 70px;
  background: ${({ background }) => background};
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  animation: loader 1.2s linear infinite;
  animation-delay: ${({ height }) => height};

  @keyframes loader {
    0% {
      transform: scaleY(0.1);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.1);
    }
  }
`
