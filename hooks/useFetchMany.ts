import axios from "axios"
import { REACT_APP_API_KEY } from "@env"
import { useEffect, useState } from "react"
import { FetchProps, JobInterface } from "../interfaces"
import { isEmpty } from "lodash"

const useFetchMany = (query: FetchProps["query"] = {}) => {
  const [data, setData] = useState<JobInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const types = ["Full-time", "Part-time", "Contractor"]
  const cities = [
    "Paris",
    "London",
    "Berlin",
    "Madrid",
    "Rome",
    "Amsterdam",
    "Vienna",
    "Athens",
    "Lisbon",
    "Stockholm",
  ]
  console.log("query", query, isEmpty(query.SearchQuery))

  const options = {
    method: "GET",
    url: `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${
      isEmpty(query.SearchQuery) ? "Latest" : "Search"
    }`,
    headers: {
      "X-RapidAPI-Key": REACT_APP_API_KEY,
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
    params: query,
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const res = await axios.request(options)
      // Only keep/edit the keys I'm going to use
      const newData: JobInterface[] = res.data.data.map((item: any) => {
        return {
          title: item.title,
          type: types[Math.floor(Math.random() * types.length)],
          skills: item.tags,
          location: cities[Math.floor(Math.random() * cities.length)],
          company: item.company,
          logo: item.logo,
          publisher: item.jobSource,
          link: item.url,
          slug: item.slug,
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

export default useFetchMany
