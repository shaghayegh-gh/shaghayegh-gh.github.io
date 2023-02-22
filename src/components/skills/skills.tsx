
import Container from "../container/container";
import {Title,SkillsWrapper,Skill,ImageWrapper, Subtitle} from "./skills-style"
import Image from "components/image/image";
import { theme } from "theme";

type SkillsProps = {
  skills: {
    icon:string,
    subtitle:string
  }[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Container background={theme.colors.background}>
      <Title>SKILLS</Title>
      <SkillsWrapper>
        {skills.map((s, i) => (
          <Skill key={`skills+${i}`}>
            <ImageWrapper>
              <Image alt="skill" src={require(`images/skills/${s.icon}`)} />
            </ImageWrapper>
            <Subtitle>{s.subtitle}</Subtitle>
          </Skill>
        ))}
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;

