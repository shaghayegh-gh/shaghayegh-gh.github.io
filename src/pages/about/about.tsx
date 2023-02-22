import Layout from 'components/layout/layout'
import AboutMe from 'components/about-me/about-me'
import Experiences from 'components/experiences/experience'
import Skills from 'components/skills/skills'
import Certificates from 'components/certificates/certificates'
import Reviews from 'components/reviews/reviews'
import {
  me,
  experiences,
  skills,
  certificates,
  reviews,
} from 'data/about/about-data'

const About = () => {
  return (
    <Layout>
      <AboutMe me={me} />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
      <Certificates certificates={certificates} />
      <Reviews reviews={reviews} />
    </Layout>
  )
}

export default About
