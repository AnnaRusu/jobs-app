import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { COLORS, SIZES } from "../../../constants"
import styles from "./welcome.style"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const JobTypeFilter = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-time")

  const handlePressItem = (item: string) => {
    setActiveJobType(item)
    router.push(`/search/${item}`)
  }

  const Item = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.tab,
        activeJobType === item
          ? { borderColor: COLORS.secondary }
          : { borderColor: COLORS.gray2 },
      ]}
      onPress={() => handlePressItem(item)}
    >
      <Text
        style={[
          styles.tabText,
          activeJobType === item
            ? { color: COLORS.secondary }
            : { color: COLORS.gray2 },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={Item}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        bounces={true}
        horizontal
      />
    </View>
  )
}

export default JobTypeFilter
