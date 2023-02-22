export type Me = {
  title: string
  description: string[]
}

export type Experience = {
  title: string
  company: string
  date: string
  description: string
}
export type Experiences = Experience[]

export type Skill = { icon: string; subtitle: string }

export type Skills = Skill[]

export type Certificate = {
  icon: string
  title: string
  institute: string
  date: string
}
export type Certificates = Certificate[]

export type Review = {
  writer: string
  comment: string
}

export type Reviews = Review[]
