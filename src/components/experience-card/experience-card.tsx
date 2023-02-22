import {
  Article,
  Body,
  Title,
  Date,
  Description,
} from "./experience-card-style";
import {Experience } from "data/about/about-data-type"


const ExperienceCard = ({ title, date ,company,description}: Experience) => {
  return (
    <Article>
      <Body>
        <Title>
          {title} at {company}
        </Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </Body>
    </Article>
  );
};

export default ExperienceCard;
