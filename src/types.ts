export interface Software {
  id: string
  name: string
  category: string
}

export interface Experience {
  id: number
  coverImg: string
  role: string
  company: string
  websiteURL: string
  dates: string
  description: string
  softwareStack: string[]
}

export interface Project {
  id: number
  name: string
  coverImg: string
  productionURL: string
  description: string
  softwareStack: string[]
}

export interface PortfolioData {
  name: string
  role: string
  about: string
  experience: Experience[]
  projects: Project[]
}