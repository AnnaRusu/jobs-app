import axios from "axios"
import uuid from "react-native-uuid"
import { REACT_APP_API_KEY } from "@env"
import { useEffect, useState } from "react"
import { FetchProps, JobInterface } from "../interfaces"

const useFetchOne = (slug: string, query: FetchProps["query"]) => {
  const [data, setData] = useState<JobInterface>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const types = ["Full-time", "Part-time", "Contractor"]
  console.log(data)

  const options = {
    method: "GET",
    url: `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/${slug}`,
    headers: {
      "X-RapidAPI-Key": REACT_APP_API_KEY,
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
    params: query,
  }

  const fetchData = async () => {
    if (!slug) {
      setIsLoading(true)
      return {}
    }
    try {
      const res = await axios.request(options)

      setData({
        ...res.data,
        type: types[Math.floor(Math.random() * types.length)],
      })
      setIsLoading(false)
    } catch (error: any | null) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [slug])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetchOne
