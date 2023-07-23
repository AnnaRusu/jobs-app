import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useEffect } from "react"
import { COLORS, SIZES } from "../../../constants"
import { JobInterface } from "../../../interfaces"
import useFetchMany from "../../../hooks/useFetchMany"
import styles from "./popularjobs.style"
import PopularJobCard from "../../../components/common/cards/popular/PopularJobCard"

const PopularJobs = ({ query }) => {
  const { data, isLoading, error, refetch } = useFetchMany({
    SearchQuery: query,
  })

  useEffect(() => {
    refetch()
  }, [query])

  const Item = ({ item }: { item: JobInterface }) => {
    return <PopularJobCard job={item} />
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
            keyExtractor={(item) => item?.slug}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs
