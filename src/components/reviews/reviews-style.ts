import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 4rem;
`
export const ReviewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({theme}) =>theme.radius.sm};
  border: 1px solid ${({theme}) =>theme.colors.grayOutline};
  padding: 1.5rem 2rem 2rem;
  margin: 1rem;
  height: 18rem;
`
export const Quote = styled.span`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: ${({theme}) =>theme.fontSize.title};
  line-height: 2rem;
  height: 15px;
  margin: 1rem 0;
  opacity: 0.4;
`
export const Description = styled.p`
  opacity: 0.7;
  -webkit-opacity: 0.7;
  margin-bottom: 0px;
`
export const Writer = styled.p`
  font-size: ${({theme}) =>theme.fontSize.caption};
  font-weight: bold;
  opacity: 0.4;
  -webkit-opacity: 0.4;
`
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}
