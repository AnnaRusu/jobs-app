import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SIZES } from "../../../constants"
import useFetchMany from "../../../hooks/useFetchMany"
import { JobInterface } from "../../../interfaces"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import styles from "./popularjobs.style"

const PopularJobs = () => {
  const { data, isLoading, error } = useFetchMany({
    SearchQuery: "developer",
  })

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
