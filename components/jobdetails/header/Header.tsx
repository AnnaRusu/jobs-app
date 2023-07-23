import { Stack, useRouter } from "expo-router"
import { COLORS, icons } from "../../../constants"
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn"

const Header = () => {
  const router = useRouter()

  return (
    <Stack.Screen
      options={{
        title: "",
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn
            icon={icons.left}
            dimension="60%"
            onPress={() => router.back()}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn icon={icons.share} dimension="60%" />
        ),
      }}
    />
  )
}

export default Header
