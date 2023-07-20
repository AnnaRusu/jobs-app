import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import styles from "./footer.style"
import { icons } from "../../../constants"
import {
  isFavoriteItem,
  removeFavoriteItem,
  saveFavoriteItem,
} from "../../../utils/favourite-items"
import { useEffect, useState } from "react"

const Footer = ({ data }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  console.log("data", data)

  useEffect(() => {
    const checkIsFavorite = async () => {
      if (data) {
        const favouriteStatus = await isFavoriteItem(data.id)
        setIsFavourite(favouriteStatus)
      }
    }
    checkIsFavorite()
  }, [data])

  const handlePress = async () => {
    if (data && isFavourite) {
      await removeFavoriteItem(data.id)
      setIsFavourite(false)
    } else {
      await saveFavoriteItem(data)
      setIsFavourite(true)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={handlePress}>
        <Image
          source={isFavourite ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(data?.url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
