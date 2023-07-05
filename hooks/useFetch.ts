import axios from "axios"
import { REACT_APP_API_KEY } from "@env"
import { useEffect, useState } from "react"
import { FetchProps, JobInterface } from "../interfaces"

const useFetch = (
  endpoint: FetchProps["endpoint"],
  query: FetchProps["query"]
) => {
  const [data, setData] = useState<JobInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": REACT_APP_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const res = await axios.request(options)
      const newData: JobInterface[] = res.data.data.map((item: any) => {
        return {
          id: item.job_id,
          title: item.job_title,
          description: item.job_description,
          type: item.job_employment_type,
          skills: item.job_required_skills,
          country: item.job_country,
          employer: item.employer_name,
          website: item.employer_website,
          logo: item.employer_logo,
          publisher: item.job_publisher,
          job_link: item.apply_link,
        }
      })
      setData(newData)
      setIsLoading(false)
    } catch (error: any | null) {
      setError(error)
      alert("There was an error fetching data")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch
