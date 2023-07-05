import React from "react"
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SIZES } from "../../../constants"
import useFetch from "../../../hooks/useFetch"
import { JobInterface } from "../../../interfaces"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import styles from "./popularjobs.style"

const PopularJobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_page: 1,
  })

  console.log("data:", data)

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
