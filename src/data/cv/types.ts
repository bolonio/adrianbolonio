export interface CvType {
  jobs: JobItemType[]
  education: EducationItemType[]
  languages: LanguageItemType[]
}

export interface JobItemType {
  title: string
  company: string
  companyUrl: string
  companyLogo: string
  location: Location
  startDate: string
  endDate: string
  description: string
  technologies?: string[]
}

export interface EducationItemType {
  school: string
  schoolUrl: string
  schoolLogo: string
  location: Location
  degree: string
  startDate: string
  endDate: string
  description: string
}

export interface LanguageItemType {
  id: string
  name: string
  level: string
  country: string
}

interface Location {
  country: Country
  city: string
}

interface Country {
  id: string
  name: string
}

export interface CV {
  jobs: JobItemType[]
  education: EducationItemType[]
  languages: LanguageItemType[]
}
