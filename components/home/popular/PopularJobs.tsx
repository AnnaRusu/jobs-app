import { useState } from "react"
import { useRouter } from "expo-router"
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SIZES } from "../../../constants"
import { JobInterface } from "../../../interfaces"
import useFetch from "../../../hooks/useFetch"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import styles from "./popularjobs.style"

const PopularJobs = () => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState("")

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  })

  const handleCardPress = (job: JobInterface) => {
    router.push(`/job-details/${job?.id}`)
    setSelectedJob(job?.id)
  }

  const Item = ({ item }: { item: JobInterface }) => {
    return (
      <PopularJobCard
        job={item}
        selectedJob={selectedJob}
        handleCardPress={handleCardPress}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
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
          <FlatList
            data={data}
            renderItem={Item}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs
