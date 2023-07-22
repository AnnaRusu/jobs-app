import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";

import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { COLORS, SIZES, icons, images } from "../constants";

export default function Home() {
  const router = useRouter();

  const safeAreaStyle = { flex: 1, backgroundColor: COLORS.lightWhite };
  const headerStyle = { backgroundColor: COLORS.lightWhite };
  const viewStyle = { flex: 1, padding: SIZES.medium };

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
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
