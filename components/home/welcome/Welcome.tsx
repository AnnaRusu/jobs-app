import { View } from "react-native"
import Search from "./Search"
import WelcomeMessage from "./WelcomeMessage"
import JobTypeFilter from "./JobTypeFilter"

const Welcome = ({ setQuery }) => {
  return (
    <View>
      <WelcomeMessage />
      <Search setQuery={setQuery} />
      <JobTypeFilter />
    </View>
  )
}

export default Welcome
