import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { useEffect } from "react"
import { COLORS } from "../../../constants"
import { JobInterface } from "../../../interfaces"
import NearbyJobCard from "../../../components/common/cards/nearby/NearbyJobCard"
import useFetchMany from "../../../hooks/useFetchMany"
import styles from "./nearbyjobs.style"

const NearbyJobs = ({ query }) => {
  const { data, isLoading, error, refetch } = useFetchMany({
    SearchQuery: query,
  })

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map((job: JobInterface) => (
            <NearbyJobCard key={`nearby-job-${job?.slug}`} job={job} />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs
