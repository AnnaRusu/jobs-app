import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../../constants"
import useFetch from "../../../hooks/useFetch"
import { JobInterface } from "../../../interfaces"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import styles from "./nearbyjobs.style"

const NearbyJobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  })

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
            <NearbyJobCard key={`nearby-job-${job?.id}`} job={job} />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs
