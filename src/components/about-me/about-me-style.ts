import styled from 'styled-components'

export const Space = styled.div`
position: relative;
width: 100%;
height: 200px;
}
`

export const Box = styled.div`
  position:relative;
  height: 110px;

  @media (max-width: 480px) {
    height: 180px;
  }
}
`
export const Content = styled.div`
position:absolute;
top: -18rem;
background: #fff;
border-radius: 1rem;
padding: 2rem;
box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}
`

export const Title = styled.h1`
  margin-bottom: 2rem;
`
export const Description = styled.p`
  opacity: 0.7;
  -webkit-opacity: 0.7;
  padding-y: 2rem;
`

export const SocialBox = styled.div`
  margin-top: 1rem;
`
export const Social = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.grayOutline};
  padding: 0.4rem;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 0.2rem;
  cursor: pointer;
  margin-right: 0.5rem;
  :hover {
    background: ${({ theme }) => theme.colors.background};
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
`

export const Resume = styled.a`
  margin-top: 2rem;
  line-height: 3rem;
  padding: 0 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.background};
  display: inline-block;
  font-weight: 500;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 0.2rem;
  :hover {
    box-shadow: 0px 20px 20px 0px rgb(132 144 255 / 30%);
  }
`
