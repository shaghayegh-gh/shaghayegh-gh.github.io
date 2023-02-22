import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
`

export const Body = styled.article`
  flex-grow: 1;
  max-width: 50rem;
  border-bottom: 1px solid #efefef;
  border-radius: ${({ theme }) => theme.radius.sm};

  :last-child{
    border-bottom: 0px;
  }

`
export const Title = styled.h4`
  position:relative; 
  margin-bottom: 0.5rem;
  ::before{
    position: absolute;
    content:"";
    width:8px;
    height:8px;
    background:${({ theme }) => theme.colors.background};
    border:4px solid #efefef;
    top:0px;
    left:-2rem;
    border-radius:50%;
  }
`
export const Description = styled.p``

export const Date = styled.span`
  display: block;
  width: 11rem;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.caption};
  color:${({ theme }) => theme.colors.grayText};
`
