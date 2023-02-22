import Layout from 'components/layout/layout'
import { Content, Box, Context, H1, Shake, Text , ImageWrapper} from './home.style'
import Image from 'components/image/image';
const Logo = require('images/shaghayegh.png');

function Home() {
  const job = '<Frontend developer />'
  return (
    <Layout home={true}>
      <Content>
        <Box>
          <ImageWrapper>
            <Image alt="shaghayegh" src={Logo} />
          </ImageWrapper>
        </Box>
        <Context>
          <H1>
            Hi There
            <Shake>👋</Shake>
          </H1>
          <Text>I'm Shaghayegh Ghavami</Text>
          <Text>{job}</Text>
        </Context>
      </Content>
    </Layout>
  )
}

export default Home
