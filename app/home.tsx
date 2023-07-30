import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, View } from "react-native"
import { useState } from "react"
import { NearbyJobs, PopularJobs, Welcome } from "../components"
import { COLORS, SIZES, icons, images } from "../constants"
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn"

export default function Home() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("Full-time")

  const safeAreaStyle = { flex: 1, backgroundColor: COLORS.lightWhite }
  const headerStyle = { backgroundColor: COLORS.lightWhite }
  const viewStyle = { flex: 1, padding: SIZES.medium }

  return (
    <SafeAreaView style={safeAreaStyle}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: headerStyle,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn icon={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn icon={images.profile} dimension="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={viewStyle}>
          <Welcome setQuery={setQuery} filter={filter} setFilter={setFilter} />
          <PopularJobs query={query} />
          <NearbyJobs query={query} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
