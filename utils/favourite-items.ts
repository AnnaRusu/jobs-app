import AsyncStorage from "@react-native-async-storage/async-storage"
import { JobInterface } from "interfaces"

export const saveFavoriteItem = async (item: JobInterface) => {
  try {
    const favorites = await getFavoriteItems()
    favorites.push(item)
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
  } catch (error) {
    console.error("Error adding to favorites:", error)
  }
}

export const getFavoriteItems = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites")
    console.log("favorites", JSON.parse(favorites))
    return favorites != null ? JSON.parse(favorites) : []
  } catch (error) {
    console.error("Error getting favorites:", error)
    return []
  }
}

export const removeFavoriteItem = async (slug: string) => {
  try {
    let favorites = await getFavoriteItems()
    favorites = favorites.filter((favorite: JobInterface) => favorite.slug !== slug)
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
  } catch (error) {
    console.error("Error removing from favorites:", error)
  }
}

export const isFavoriteItem = async (slug: string) => {
  try {
    const favorites = await getFavoriteItems()
    return favorites.some((item: JobInterface) => item.slug === slug)
  } catch (error) {
    console.error("Error checking if item is favorite:", error)
    return false
  }
}
