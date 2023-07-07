export interface FetchProps {
  endpoint: string
  query: { [key: string]: string | number }
}

export interface JobInterface {
  id: string
  title: string
  description: string
  type: string
  skills: string[]
  country: string
  employer: string
  website: string
  logo: string
  job_link: string
  publisher: string
}
