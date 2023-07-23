import { useState } from "react"
import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { icons } from "../../../constants"
import styles from "../../home/welcome/welcome.style"

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("")

  const handleChangeText = (text: string) => {
    text === "" && setQuery("linux")
    setSearch(text)
  }

  const handlePressButton = () => {
    search === "" ? setQuery("linux") : setQuery(search)
  }

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleChangeText}
          placeholder="What are you looking for?"
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={handlePressButton}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Search
