import { Experiences as ExperiencesType } from 'data/about/about-data-type'
import Container from '../container/container'
import ExperienceCard from '../experience-card/experience-card'
import { Title, ExperienceWrapper } from './experience-style'

type ExperiencesProps = {
  experiences: ExperiencesType
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <Container>
      <Title>WORK EXPERIENCE</Title>
      <ExperienceWrapper>
        {experiences.map((e, i) => (
          <ExperienceCard
            key={`experience+${i}`}
            title={e.title}
            date={e.date}
            description={e.description}
            company={e.company}
          />
        ))}
      </ExperienceWrapper>
    </Container>
  )
}

export default Experiences
