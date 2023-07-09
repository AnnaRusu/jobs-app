export interface FetchProps {
  endpoint: string
  query: { [key: string]: string | number }
}

export interface JobInterface {
  id: string
  title: string
  type: string
  skills: string[]
  location: string
  company: string
  logo: string
  publisher: string
  link: string
  slug: string
  tags?: string[]
  postDate?: string
  url?: string
  originalPosting?: string
}
