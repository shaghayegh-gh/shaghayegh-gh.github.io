import styled from 'styled-components'
export const Content = styled.div`
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`
export const Box = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const H1 = styled.h1`
  color: ${({theme}) =>theme.colors.white};
`

export const Shake = styled.span`
  display: inline-block;
  margin-left: 10px;
  animation: shake 1.5s;
  animation-iteration-count: 5;
  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(30deg);
    }
  }
`

export const Text = styled.p`
  font-size:${({theme}) =>theme.fontSize.subtitle};
  line-height: 1rem;
  color: ${({theme}) =>theme.colors.white};
`

export const Context = styled.div`
  padding: 20px;

  @media (max-width: 680px) {
    text-align: center;
  }
`
export const ImageWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.2rem solid ${({theme}) =>theme.colors.white};
  border-radius: ${({theme}) =>theme.radius.rounded};
  padding: 0.3rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
