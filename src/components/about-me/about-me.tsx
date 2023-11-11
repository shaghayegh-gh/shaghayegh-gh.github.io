import Container from "components/container/container"
import {
  Space,
  Box,
  Content,
  Title,
  Description,
  SocialBox,
  Social,
  Resume,
} from './about-me-style'
import { useTheme } from 'styled-components'
import { Me } from 'data/about/about-data-type'
import { ReactComponent as Linkedin } from 'images/about-me/linkedin.svg'
import { ReactComponent as Github } from 'images/about-me/github.svg'
import { ReactComponent as Medium } from 'images/about-me/medium.svg'
type AboutMeProps = {
  me: Me
}
const AboutMe = ({ me }: AboutMeProps) => {
  const theme = useTheme()
  return (
    <>
      <Container background={theme.colors.background}>
        <Space />
      </Container>
      <Container>
        <Box>
          <Content>
            <Title>{me.title}</Title>
            {me.description.map((d, i) => (
              <Description key={`about-me+${i}`}>{d}</Description>
            ))}
            <SocialBox>
              <Social href="https://www.linkedin.com/in/shaghayegh-ghavami">
                <Linkedin />
              </Social>
              <Social href="https://github.com/shaghayegh-gh">
                <Github />
              </Social>
              <Social href="https://medium.com/@shaghayegh-gh">
                <Medium />
              </Social>
            </SocialBox>
            <Resume>Download CV</Resume>
          </Content>
        </Box>
      </Container>
    </>
  )
}

export default AboutMe
