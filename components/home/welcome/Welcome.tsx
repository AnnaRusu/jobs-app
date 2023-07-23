import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { COLORS, SIZES } from "../../../constants"
import { getUser } from "../../../utils/user"
import styles from "./welcome.style"
import Search from "../../../components/common/search/Search"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({ setQuery }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-time")
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    getUser().then((username) => setName(username))
  }, [])

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
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome {name}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <Search setQuery={setQuery} />
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
