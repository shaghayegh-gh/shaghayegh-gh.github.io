import styled from 'styled-components'

export const Title = styled.h3`
  margin-bottom: 4.5rem;
  text-align: center;
  font-size: ${({theme}) =>theme.fontSize.title};
`

export const CertificatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`

export const CertificatesCard = styled.div`
  width: 16rem;
  margin: 2rem;
  text-align: center;
`

export const ImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  margin: auto;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  border-top: 1px solid  ${({theme}) =>theme.colors.grayOutline};
`
export const Name = styled.p`
  opacity: 0.7;
`
export const Institute = styled.p`
  opacity: 0.4;
  font-size:${({theme}) =>theme.fontSize.caption};

`
