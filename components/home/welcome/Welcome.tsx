import { useRouter } from "expo-router"
import { useState } from "react"
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SIZES, icons } from "../../../constants"
import styles from "./welcome.style"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-time")

  const handlePressItem = (item: string) => {
    setActiveJobType(item)
    console.log(typeof item)
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
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Anna</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

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
    </View>
  )
}

export default Welcome
