import styled from 'styled-components'

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4.5rem;
  text-align: center;
  font-size: ${({theme}) =>theme.fontSize.title};
`
export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.5rem;
  height: 6.5rem;
  background:${({theme}) =>theme.colors.white};
  border-radius: ${({theme}) =>theme.radius.sm};
  margin: 1rem;
  padding: 1rem;
  text-align: center;
`

export const ImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: auto;
`

export const Subtitle = styled.p`
  margin-bottom: 0px;
`
