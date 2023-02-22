import styled from 'styled-components'

export const Title = styled.h3`
  margin-bottom: 4.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  background: ${({ theme }) => theme.colors.background};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 2.5rem;
`

export const ExperienceWrapper = styled.div`
  padding-left: 2rem;
  position: relative;
  margin-bottom: 35px;
  ::before {
    position: absolute;
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    left: 0.4rem;
    top: 0;
    background-color: ${({ theme }) => theme.colors.grayOutline};
  }
`
