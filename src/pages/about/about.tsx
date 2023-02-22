import Layout from 'components/layout/layout'
import AboutMe from 'components/about-me/about-me'

import { me } from 'data/about/about-data'

const About = () => {
  return (
    <Layout>
      <AboutMe me={me} />
    </Layout>
  )
}

export default About
