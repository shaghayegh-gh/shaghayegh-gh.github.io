import Container from 'components/container/container'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useTheme } from 'styled-components'
import {
  Title,
  ReviewsCard,
  Quote,
  Description,
  Writer,
  responsive,
} from './reviews-style'
import { Reviews as ReviewsType } from 'data/about/about-data-type'

type ReviewsProps = {
  reviews: ReviewsType
}

const Reviews = ({ reviews }: ReviewsProps) => {
  const theme = useTheme()
  return (
    <Container background={theme.colors.gray}>
      <>
        <Title>What people say about me?</Title>
        <Carousel responsive={responsive} autoPlay={true} slidesToSlide={2}>
          {reviews.map((r, i) => (
            <ReviewsCard key={`review+${i}`}>
              <Quote>“</Quote>
              <Description>{r.comment}</Description>
              <Writer>{r.writer}</Writer>
            </ReviewsCard>
          ))}
        </Carousel>
      </>
    </Container>
  )
}

export default Reviews
