import { useGlobalSearchParams } from "expo-router"
import { isEmpty } from "lodash"
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native"
import { Company, Footer } from "../../components"
import { COLORS, SIZES } from "../../constants"
import useFetchOne from "../../hooks/useFetchOne"
import Header from "../../components/jobdetails/header/Header"
import Tabs from "../../components/jobdetails/tabs/Tabs"

export default function JobDetails() {
  const params = useGlobalSearchParams()
  const { data, isLoading, error } = useFetchOne(params.slug as string)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : isEmpty(data) ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              logo={data.logo}
              title={data.title}
              company={data.company}
              location={data.location}
            />
            <Tabs data={data} />
          </View>
        )}
      </ScrollView>
      <Footer data={data} />
    </SafeAreaView>
  )
}
