export interface Software {
  id: number
  icon: string
  name: string
}

export interface Experience {
  id: number
  coverImg: string
  role: string
  company: string
  websiteURL: string
  dates: string
  description: string
  softwareStack: Software[]
}

export interface PortfolioData {
  name: string
  role: string
  about: string
  experience: Experience[]
}