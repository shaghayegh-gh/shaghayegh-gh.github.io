import Container from '../container/container'
import {
  Title,
  CertificatesWrapper,
  CertificatesCard,
  ImageWrapper,
  Content,
  Name,
  Institute
} from './certificates-style'
import Image from 'components/image/image'
import { Certificates as CertificatesType } from 'data/about/about-data-type'

type CertificatesProps = {
  certificates: CertificatesType
}

const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <Container>
      <Title>CERTIFICATE</Title>
      <CertificatesWrapper>
        {certificates.map((c, i: number) => (
          <CertificatesCard key={i}>
            <ImageWrapper>
              <Image
                alt="skill"
                src={require(`images/certificates/${c.icon}`)}
              />
            </ImageWrapper>
            <Content>
              <Name>{c.title}</Name>
              <Institute>{c.institute}</Institute>
            </Content>
          </CertificatesCard>
        ))}
      </CertificatesWrapper>
    </Container>
  )
}

export default Certificates
