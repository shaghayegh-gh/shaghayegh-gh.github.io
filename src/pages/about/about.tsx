import Layout from 'components/layout/layout'
import AboutMe from 'components/about-me/about-me'
import Experiences from 'components/experiences/experience'

import { me,experiences } from 'data/about/about-data'

const About = () => {
  return (
    <Layout>
      <AboutMe me={me} />
      <Experiences experiences={experiences} />
    </Layout>
  )
}

export default About
